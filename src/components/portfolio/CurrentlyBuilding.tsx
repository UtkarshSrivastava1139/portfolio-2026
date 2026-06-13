import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Section } from "./Section";
import { getGithubStats, type GhStats } from "@/lib/github.functions";

function levelFor(count: number) {
  if (count === 0) return 0;
  if (count < 3) return 1;
  if (count < 6) return 2;
  if (count < 10) return 3;
  return 4;
}

const LEVEL_BG = [
  "bg-white/[0.04]",
  "bg-[var(--color-accent)]/20",
  "bg-[var(--color-accent)]/40",
  "bg-[var(--color-accent)]/70",
  "bg-[var(--color-accent)]",
];

function Heatmap({ weeks }: { weeks: GhStats["weeks"] }) {
  return (
    <div className="overflow-x-auto">
      <div
        className="grid grid-flow-col gap-[3px]"
        style={{ gridTemplateRows: "repeat(7, 11px)" }}
        role="img"
        aria-label="GitHub contribution heatmap (last 12 months)"
      >
        {weeks.map((week, wi) =>
          Array.from({ length: 7 }).map((_, di) => {
            const day = week[di];
            if (!day) return <div key={`${wi}-${di}`} className="h-[11px] w-[11px]" />;
            const lvl = levelFor(day.count);
            return (
              <div
                key={day.date}
                className={`h-[11px] w-[11px] rounded-[2px] ${LEVEL_BG[lvl]}`}
                title={`${day.count} contributions on ${day.date}`}
              />
            );
          }),
        )}
      </div>
    </div>
  );
}

function StatChip({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-xl border border-rule bg-elevated p-4">
      <div className="font-mono text-[10px] uppercase tracking-wider text-faint">{label}</div>
      <div className="mt-1 font-display text-2xl font-semibold tracking-tight text-ink">{value}</div>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="space-y-6">
      <div className="h-[110px] w-full animate-pulse rounded-2xl bg-white/[0.04]" />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-[78px] animate-pulse rounded-xl bg-white/[0.04]" />
        ))}
      </div>
    </div>
  );
}

export function CurrentlyBuilding() {
  const fetchStats = useServerFn(getGithubStats);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["github-stats"],
    queryFn: () => fetchStats(),
    staleTime: 10 * 60 * 1000,
    retry: 1,
  });

  return (
    <Section
      id="currently-building"
      eyebrow="Currently Building"
      title={<>Live from <span className="text-accent">my workshop</span></>}
      intro="Real-time signal from GitHub — what I'm shipping, in what languages, and how often."
    >
      {isLoading ? (
        <LoadingState />
      ) : isError || !data ? (
        <div className="rounded-2xl border border-rule bg-elevated p-6 text-sm text-muted">
          Couldn't reach GitHub right now. Try refreshing in a bit.
        </div>
      ) : (
        <div className="space-y-8">
          {/* Heatmap card */}
          <div className="rounded-2xl border border-rule bg-elevated p-5 md:p-6">
            <div className="mb-4 flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-faint">
                  Contribution graph
                </div>
                <div className="mt-1 text-ink">
                  <span className="font-display text-xl font-semibold">
                    {data.totalContributions.toLocaleString()}
                  </span>{" "}
                  <span className="text-sm text-muted">contributions</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-faint">
                <span>Less</span>
                {LEVEL_BG.map((bg, i) => (
                  <span key={i} className={`h-[10px] w-[10px] rounded-[2px] ${bg}`} />
                ))}
                <span>More</span>
              </div>
            </div>
            <Heatmap weeks={data.weeks} />
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <StatChip label="Current streak" value={`${data.currentStreak}d`} />
            <StatChip label="Public repos" value={data.repoCount} />
            <StatChip label="Top language" value={data.languages[0]?.name ?? "—"} />
            <StatChip
              label="Last commit"
              value={data.latestCommit?.relativeTime ?? "—"}
            />
          </div>

          {/* Languages + latest commit */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-rule bg-elevated p-5">
              <div className="font-mono text-[11px] uppercase tracking-wider text-faint">
                Top languages
              </div>
              <div className="mt-4 space-y-3">
                {data.languages.map((l) => (
                  <div key={l.name}>
                    <div className="mb-1 flex justify-between text-xs">
                      <span className="text-ink">{l.name}</span>
                      <span className="font-mono text-faint">{l.percent.toFixed(1)}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.05]">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${l.percent}%`, backgroundColor: l.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={data.latestCommit?.url ?? "#"}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-2xl border border-rule bg-elevated p-5 transition hover:border-rule-strong"
            >
              <div className="font-mono text-[11px] uppercase tracking-wider text-faint">
                Latest commit
              </div>
              {data.latestCommit ? (
                <>
                  <p className="mt-3 line-clamp-2 text-[15px] leading-snug text-ink">
                    {data.latestCommit.message}
                  </p>
                  <div className="mt-3 flex items-center justify-between font-mono text-xs text-muted">
                    <span className="text-accent">{data.latestCommit.repo}</span>
                    <span>{data.latestCommit.relativeTime} ↗</span>
                  </div>
                </>
              ) : (
                <p className="mt-3 text-sm text-muted">No recent commits found.</p>
              )}
            </a>
          </div>
        </div>
      )}
    </Section>
  );
}