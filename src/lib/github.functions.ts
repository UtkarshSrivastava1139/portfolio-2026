import { createServerFn } from "@tanstack/react-start";

const GH_USER = "UtkarshSrivastava1139";
const GH_ENDPOINT = "https://api.github.com/graphql";

const QUERY = /* GraphQL */ `
  query ($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              color
            }
          }
        }
      }
      repositories(
        first: 100
        ownerAffiliations: OWNER
        isFork: false
        privacy: PUBLIC
        orderBy: { field: PUSHED_AT, direction: DESC }
      ) {
        totalCount
        nodes {
          name
          languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
            edges {
              size
              node {
                name
                color
              }
            }
          }
          defaultBranchRef {
            target {
              ... on Commit {
                history(first: 1) {
                  nodes {
                    message
                    committedDate
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export type GhDay = { date: string; count: number; color: string };
export type GhStats = {
  totalContributions: number;
  weeks: GhDay[][];
  languages: { name: string; color: string; percent: number }[];
  latestCommit: { message: string; repo: string; relativeTime: string; url: string } | null;
  repoCount: number;
  currentStreak: number;
  fetchedAt: number;
};

let cache: { at: number; data: GhStats } | null = null;
const TTL = 10 * 60 * 1000;

function relTime(iso: string) {
  const diff = (Date.now() - new Date(iso).getTime()) / 1000;
  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 86400 * 7) return `${Math.floor(diff / 86400)}d ago`;
  if (diff < 86400 * 30) return `${Math.floor(diff / 86400 / 7)}w ago`;
  return `${Math.floor(diff / 86400 / 30)}mo ago`;
}

export const getGithubStats = createServerFn({ method: "GET" }).handler(async () => {
  if (cache && Date.now() - cache.at < TTL) return cache.data;

  const token = process.env.GITHUB_TOKEN;
  if (!token) return null;

  const res = await fetch(GH_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "portfolio-app",
    },
    body: JSON.stringify({ query: QUERY, variables: { login: GH_USER } }),
  });

  if (!res.ok) throw new Error(`GitHub API ${res.status}`);
  const json = (await res.json()) as {
    data?: {
      user: {
        contributionsCollection: {
          contributionCalendar: {
            totalContributions: number;
            weeks: { contributionDays: { date: string; contributionCount: number; color: string }[] }[];
          };
        };
        repositories: {
          totalCount: number;
          nodes: {
            name: string;
            languages: { edges: { size: number; node: { name: string; color: string | null } }[] };
            defaultBranchRef: {
              target?: {
                history?: {
                  nodes: { message: string; committedDate: string; url: string }[];
                };
              };
            } | null;
          }[];
        };
      };
    };
    errors?: { message: string }[];
  };

  if (json.errors?.length || !json.data) {
    throw new Error(json.errors?.[0]?.message ?? "GraphQL error");
  }

  const u = json.data.user;
  const weeks: GhDay[][] = u.contributionsCollection.contributionCalendar.weeks.map((w) =>
    w.contributionDays.map((d) => ({ date: d.date, count: d.contributionCount, color: d.color })),
  );

  // Languages aggregate
  const langTotals = new Map<string, { size: number; color: string }>();
  for (const repo of u.repositories.nodes) {
    for (const e of repo.languages.edges) {
      const cur = langTotals.get(e.node.name) ?? { size: 0, color: e.node.color ?? "#8B8B95" };
      cur.size += e.size;
      langTotals.set(e.node.name, cur);
    }
  }
  const total = Array.from(langTotals.values()).reduce((s, v) => s + v.size, 0) || 1;
  const languages = Array.from(langTotals.entries())
    .map(([name, v]) => ({ name, color: v.color, percent: (v.size / total) * 100 }))
    .sort((a, b) => b.percent - a.percent)
    .slice(0, 3);

  // Latest commit across repos
  let latest: { message: string; repo: string; date: string; url: string } | null = null;
  for (const r of u.repositories.nodes) {
    const c = r.defaultBranchRef?.target?.history?.nodes?.[0];
    if (!c) continue;
    if (!latest || new Date(c.committedDate) > new Date(latest.date)) {
      latest = { message: c.message.split("\n")[0], repo: r.name, date: c.committedDate, url: c.url };
    }
  }

  // Streak: count consecutive days ending today with count > 0
  const flat = weeks.flat().filter((d) => new Date(d.date) <= new Date());
  let streak = 0;
  for (let i = flat.length - 1; i >= 0; i--) {
    if (flat[i].count > 0) streak++;
    else if (streak > 0) break;
    else if (i === flat.length - 1) continue; // allow today empty
    else break;
  }

  const data: GhStats = {
    totalContributions: u.contributionsCollection.contributionCalendar.totalContributions,
    weeks,
    languages,
    latestCommit: latest
      ? { message: latest.message, repo: latest.repo, relativeTime: relTime(latest.date), url: latest.url }
      : null,
    repoCount: u.repositories.totalCount,
    currentStreak: streak,
    fetchedAt: Date.now(),
  };

  cache = { at: Date.now(), data };
  return data;
});