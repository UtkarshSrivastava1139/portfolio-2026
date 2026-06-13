import profile from "@/assets/portfolio/profile.png";
import enivaran from "@/assets/portfolio/enivaran.png";
import roots from "@/assets/portfolio/roots.png";
import hack4bihar from "@/assets/portfolio/hack4bihar.png";
import innoplanai from "@/assets/portfolio/innoplanai.png";
import sahayak from "@/assets/portfolio/sahayak.png";
import clubverse from "@/assets/portfolio/clubverse.png";
import starkseek from "@/assets/portfolio/starkseek.png";
import hackneeti from "@/assets/portfolio/hackneeti.png";
import ieeeJssun from "@/assets/portfolio/ieee-jssun-sb.png";
import smsSpam from "@/assets/portfolio/sms-spam.png";
import smartResume from "@/assets/portfolio/smart-resume.png";
import eventPortal from "@/assets/portfolio/event-portal.png";
import automind from "@/assets/portfolio/automind.png";

export const images = {
  profile,
  enivaran,
  roots,
  hack4bihar,
  innoplanai,
  sahayak,
  clubverse,
  starkseek,
  hackneeti,
  ieeeJssun,
  smsSpam,
  smartResume,
  eventPortal,
  automind,
};

export type FeaturedProject = {
  slug: string;
  caseSlug: "enivaran" | "roots" | "hack4bihar" | "eventportal";
  name: string;
  label: string;
  headline: string;
  body: string;
  outcomes: string[];
  stack: string[];
  image: string;
  href?: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "e-nivaran",
    caseSlug: "enivaran",
    name: "e-Nivaran",
    label: "Hack4Delhi 2026 Grand Finalist",
    headline: "Civic infrastructure that reached the Government of Delhi.",
    body: "An AI-powered platform that classifies citizen complaints, routes them to the correct municipal authority, and escalates unresolved issues based on community upvotes and severity scoring. Reached the Grand Finale of Hack4Delhi — India Innovates 2026 at Bharat Mandapam, organized by the Government of Delhi.",
    outcomes: [
      "Top 30 / 1,500+ Teams",
      "Bharat Mandapam Grand Finale",
      "Govt. of Delhi",
      "1,500+ Platform Visits",
    ],
    stack: ["Next.js 15", "TypeScript", "MongoDB Atlas", "FastAPI", "Tailwind CSS"],
    image: images.enivaran,
    href: "https://www.enivaran.app/",
  },
  {
    slug: "roots",
    caseSlug: "roots",
    name: "ROOTS — For a better earth",
    label: "IEEE YESIST12 Global Finalist · Convergex Top 5 · BizTech Top 10",
    headline: "An AI that verifies your eco-actions and calculates the carbon you actually saved.",
    body: "Sustainability apps fail because they rely on self-reporting. ROOTS solves this with a custom-trained YOLOv8 computer vision model that analyzes submitted photos, cross-references descriptions, and calculates real carbon saved. Represented India at the IEEE YESIST12 Grand Finale in Malaysia — Top 30 of 3,000+ teams globally.",
    outcomes: [
      "Top 30 / 3,000+ Globally",
      "Represented India in Malaysia",
      "Convergex Top 5 / 150+",
      "100+ Active Users",
    ],
    stack: ["Next.js", "Flask", "YOLOv8", "Gemini API", "Scikit-Learn"],
    image: images.roots,
    href: "https://roots4abetterearth.xyz",
  },
  {
    slug: "hack4bihar",
    caseSlug: "hack4bihar",
    name: "Hack4Bihar",
    label: "National Hackathon Platform",
    headline: "Built the entire frontend for a national hackathon — under a live deadline.",
    body: "Hack4Bihar needed a production-ready platform for registrations, event information, and public visibility. I migrated it completely from HTML/CSS/JS to Next.js, rebuilt every page, and shipped under real deadline pressure. The platform didn't just work — it scaled to 25,000+ visits and 5,000+ registrations without breaking.",
    outcomes: [
      "25,000+ Visits",
      "5,000+ Registrations",
      "40% SEO Improvement",
      "Full Frontend Migration",
    ],
    stack: ["Next.js", "Django", "Python", "Tailwind CSS", "REST APIs"],
    image: images.hack4bihar,
  },
  {
    slug: "founders-pit",
    caseSlug: "eventportal",
    name: "Event Portal",
    label: "Built & Live-Tested in Production · EDC JSSUN",
    headline: "End to End Event Management Platform — then ran a 270-person event on it.",
    body: "Most event platforms are rented. I built one. A production-grade event management system handling registrations, team submissions, and live operational monitoring — with a real-time WebSocket auction module as the centrepiece. Then ran Founder's Pit 2026 on it. 270+ participants. 75+ teams. Zero failures.",
    outcomes: [
      "270+ Participants",
      "75+ Teams",
      "4,500+ Platform Visits",
      "10,000+ Student Reach",
    ],
    stack: ["React", "Vite", "Node.js", "PostgreSQL", "WebSockets", "Supabase"],
    image: images.eventPortal,
    href: "https://events.edcjssun.com/",
  },
];

export type CompactProject = {
  name: string;
  tag: string;
  description: string;
  stack: string[];
  href?: string;
  repoHref?: string;
  image: string;
};

export const compactProjects: CompactProject[] = [
  {
    name: "AutoMind",
    tag: "AI Education Platform · Deployed",
    description:
      "Visual automata theory learning platform powered by AI — converts complex CS theory into interactive visual simulations.",
    stack: ["Next.js", "Gemini API", "TypeScript"],
    href: "https://automind-eight.vercel.app",
    repoHref: "https://github.com/UtkarshSrivastava1139/AutoMind",
    image: images.automind,
  },
  {
    name: "InnoPlan AI",
    tag: "AI Cofounder Tool · Hackathon",
    description:
      "Transforms a raw startup idea into a structured project roadmap, PRD, and execution plan using LLM orchestration.",
    stack: ["Next.js", "Claude API", "MongoDB", "Clerk"],
    href: "https://innoplanai.vercel.app/",
    image: images.innoplanai,
  },
  {
    name: "SMS Spam Detection",
    tag: "ML Project · 92% Accuracy",
    description:
      "End-to-end NLP pipeline classifying phishing, KYC scams, and loan fraud SMS. 10,500+ sample dataset, ROC-AUC optimized.",
    stack: ["Python", "Scikit-Learn", "NLP", "TF-IDF"],
    href: "https://github.com/UtkarshSrivastava1139/sms-spam-detection",
    image: images.smsSpam,
  },
  {
    name: "SmartResume AI",
    tag: "AI Tool · Deployed",
    description:
      "Gemini-powered resume builder generating ATS-optimized content — summaries, bullet points, cover letters — from basic inputs.",
    stack: ["Python", "Streamlit", "Gemini API"],
    href: "https://ai-smart-resume.streamlit.app/",
    repoHref: "https://github.com/UtkarshSrivastava1139/SmartResume",
    image: images.smartResume,
  },
  {
    name: "IEEE JSSUN Website",
    tag: "Chapter Infrastructure",
    description:
      "Official website for the IEEE JSS University Student Branch — events, announcements, team activities.",
    stack: ["HTML", "CSS", "JavaScript", "Tailwind"],
    href: "https://ieeejssuninoida.vercel.app/",
    image: images.ieeeJssun,
  },
  {
    name: "StarkSeek",
    tag: "Internship · Production Site",
    description:
      "Responsive, SEO-optimized company site shipped during my Web Developer internship at Starkseek.",
    stack: ["React", "Tailwind CSS", "JavaScript"],
    href: "https://starkseek.com/",
    image: images.starkseek,
  },
];

export const tier3Projects = [
  "Sahayak",
  "Hackneeti",
  "ClubVerse",
  "NAR8 AI",
  "Portfolio v1",
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Web Developer Intern",
    company: "Starkseek",
    period: "Dec 2024 — Present",
    bullets: [
      "Built responsive websites using the MERN stack — improved mobile responsiveness by 95%.",
      "Integrated REST APIs and SEO strategies, increasing organic traffic by 65%.",
      "Collaborated with cross-functional teams to deliver 3+ production-ready web applications.",
    ],
  },
  {
    role: "Unreal Engine Game Developer Intern",
    company: "Gaurav Go Technologies",
    period: "June 2025 — July 2025",
    bullets: [
      "Designed 5+ gameplay mechanics using Blueprints and C++ in Unreal Engine 5.",
      "Created and optimized 10+ interactive levels, reducing load times by 25%.",
      "Enhanced UX with responsive mechanics, achieving 90%+ positive feedback.",
    ],
  },
];

const CERT_BASE = "E:\Project Working\Remix of Crafted Portfolio\src\assets\certificates";

export type Certificate = {
  title: string;
  org: string;
  category: string;
  year: string;
  image: string;
};

export const certificates: Certificate[] = [
  { title: "IEEE YESIST12 Grand Finale Finalist — Top 30/3000+", org: "IEEE YESIST12", category: "Hackathon", year: "2025", image: `${CERT_BASE}/yesist12Finalist.jpg` },
  { title: "BizTech Ideathon — Top 10/450+", org: "NDIM, New Delhi", category: "Hackathon", year: "2025", image: `${CERT_BASE}/biztechIdeathon.jpg` },
  { title: "TOP 10 — Convergex Hackathon", org: "Convergex", category: "Hackathon", year: "2024", image: `${CERT_BASE}/Certificate%20of%20Participation%20-%20TOP%2010%20Teams%20Covergex%20Hackathon%20Dec%202024.png` },
  { title: "2nd Prize — Poster Presentation", org: "JSS University", category: "Award", year: "2024", image: `${CERT_BASE}/Certificate%20of%20Achievement%20Poster%20Presentation%202nd%20prize.png` },
  { title: "Creative Member Newsletter", org: "JSS University", category: "Creative", year: "2024", image: `${CERT_BASE}/Creative%20Member%20Newsletter%20Certificate.png` },
  { title: "Techspardha — NIT Kurukshetra", org: "NIT Kurukshetra", category: "Competition", year: "2025", image: `${CERT_BASE}/Techspardha%20NITKurukshetra.jpg` },
  { title: "Adobe India Hackathon", org: "Adobe & Unstop", category: "Competition", year: "2025", image: `${CERT_BASE}/Adobe%20India%20Hackathon%20-%20Participation.jpg` },
  { title: "Hack2Skill Certification", org: "Hack2Skill", category: "Certification", year: "2025", image: `${CERT_BASE}/Hack2skill-Certificate.png` },
  { title: "Build with India — Unstop", org: "Unstop", category: "Hackathon", year: "2025", image: `${CERT_BASE}/Unstop_buildwithindia.jpg` },
  { title: "CodeForge Hackathon", org: "CodeForge", category: "Hackathon", year: "2025", image: `${CERT_BASE}/CodeForge.jpg` },
  { title: "YESIST12 Ambassador", org: "IEEE YESIST12", category: "Ambassador", year: "2025", image: `${CERT_BASE}/yesist12-ambassdor.png` },
  { title: "Hack4Bihar Internship Offer", org: "Hack4Bihar", category: "Internship", year: "2025", image: `${CERT_BASE}/Hack4Bihar%20Offer%20Letter.jpeg` },
  { title: "CSIS Ambassador", org: "CSIS", category: "Ambassador", year: "2025", image: `${CERT_BASE}/CSIS%20ambassdor.png` },
  { title: "Campus Ambassador — IIT BHU CodeFest", org: "IIT BHU", category: "Ambassador", year: "2025", image: `${CERT_BASE}/Certificate%20IIT%20BHU%20CA%20Code%20Fest.jpeg` },
  { title: "StarkSeek Internship Offer", org: "StarkSeek", category: "Internship", year: "2024", image: `${CERT_BASE}/StarkSeek%20Offer%20Letter.jpeg` },
  { title: "GSSoC 2024 Extended Contributor", org: "GirlScript Summer of Code", category: "Open Source", year: "2024", image: `${CERT_BASE}/Utkarsh_Srivastava_Badge_Contributor_GSSoC2024-Extd.png` },
  { title: "Python (Basic)", org: "HackerRank", category: "Programming", year: "2024", image: `${CERT_BASE}/Certificate%20Python(Basic).png` },
  { title: "Samsung Solve for Tomorrow", org: "Samsung", category: "Competition", year: "2024", image: `${CERT_BASE}/Certificate-of-Participation%20Samsung%20Solve%20for%20Tomorrow.jpg` },
  { title: "IEEE Xtreme Programming Contest", org: "IEEE", category: "Ambassador", year: "2024", image: `${CERT_BASE}/ieee%20xtreme.jpg` },
  { title: "IGDTUW Hackathon", org: "IGDTUW", category: "Hackathon", year: "2024", image: `${CERT_BASE}/IGDTUW%20Hackathon.png` },
  { title: "Campus Ambassador — BITS Pilani", org: "BITS Pilani", category: "Ambassador", year: "2024", image: `${CERT_BASE}/Campus%20Ambassdor%20-%20BITS.jpg` },
  { title: "IEEE WebMaster Volunteer", org: "IEEE", category: "Volunteer", year: "2024", image: `${CERT_BASE}/Certificate%20of%20Volunteer%20-%20IEEE%20WebMaster.jpg` },
  { title: "University Conclave Volunteer", org: "JSS University", category: "Volunteer", year: "2024", image: `${CERT_BASE}/Certificate%20for%20Volunterring%20-%20University%20Conclave.png` },
  { title: "IEEE GitHub Event", org: "IEEE", category: "Workshop", year: "2024", image: `${CERT_BASE}/Certificate%20of%20Appreciation%20-%20IEEE%20Github%20Event.png` },
  { title: "IEEE India Council Participation", org: "IEEE India Council", category: "Workshop", year: "2024", image: `${CERT_BASE}/IEEE%20INDIA%20COUNCIL%20participation.jpg` },
  { title: "CSE Department Conclave", org: "JSS University — CSE Dept", category: "Event", year: "2024", image: `${CERT_BASE}/Certificate%20of%20Participation%20-%20Conclave%20of%20Dept.%20of%20CSE.png` },
  { title: "School of Science & Humanities Conclave", org: "JSS University", category: "Event", year: "2024", image: `${CERT_BASE}/Certificate%20of%20Participation%20-%20Conclave%20of%20School%20of%20Science%20%26%20Humanities.png` },
  { title: "Poster Presentation Participation", org: "JSS University", category: "Event", year: "2024", image: `${CERT_BASE}/Certificate%20of%20Participation%20Poster%20Presentation.png` },
  { title: "Appreciation — CashKaro", org: "CashKaro", category: "Appreciation", year: "2024", image: `${CERT_BASE}/Certificate%20of%20Appreciation%20-%20CashKaro.png` },
  { title: "Build with India", org: "Build with India", category: "Hackathon", year: "2024", image: `${CERT_BASE}/Build%20with%20India.png` },
  { title: "I'CEO Competition", org: "IEEE UP Section, Galgotias", category: "Competition", year: "2025", image: `${CERT_BASE}/iceo-certificate.jpg` },
  { title: "Game Developer Intern — Gaurav Go", org: "Gaurav Go Technologies", category: "Internship", year: "Jul 2025", image: `${CERT_BASE}/internship-gaurav-go.jpg` },
  { title: "Finalist — HackwithUP Hackathon", org: "Chandigarh University TBI", category: "Hackathon", year: "Nov 2025", image: `${CERT_BASE}/hackwithup.png` },
];

const LIFE_BASE = "https://utkarshsrivastava.vercel.app/images";

export type LifeImageSlide = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  iconName: "trophy" | "calendar" | "globe" | "star" | "users" | "code" | "award";
};

export type LifeStatSlide = {
  title: string;
  value: string;
  subtitle: string;
};

export type LifeQuoteSlide = { text: string; author: string };

export type LifeGalleryItem =
  | {
      id: number;
      type: "image-carousel";
      colSpan: string;
      rowSpan: string;
      interval: number;
      content: LifeImageSlide[];
    }
  | {
      id: number;
      type: "stat-carousel";
      colSpan: string;
      rowSpan: string;
      interval: number;
      variant: "accent" | "surface";
      content: LifeStatSlide[];
    }
  | {
      id: number;
      type: "quote";
      colSpan: string;
      rowSpan: string;
      content: LifeQuoteSlide[];
    };

export const lifeGallery: LifeGalleryItem[] = [
  {
    id: 1,
    type: "image-carousel",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2",
    interval: 5000,
    content: [
      { src: `${LIFE_BASE}/landscape/hackwithup2.jpg`, alt: "HackWithUP Hackathon", title: "HackWithUP Finals", subtitle: "Building solutions under pressure", iconName: "trophy" },
      { src: `${LIFE_BASE}/landscape/edc-linkedin-workshop-speaker.jpg`, alt: "EDC LinkedIn Workshop", title: "Speaking at LinkedIn Workshop", subtitle: "Guiding students on personal branding", iconName: "calendar" },
      { src: `${LIFE_BASE}/landscape/ieee-day-speaker.jpg`, alt: "IEEE Day Speaker", title: "Speaking at IEEE Day", subtitle: "Sharing knowledge and insights", iconName: "calendar" },
      { src: `${LIFE_BASE}/landscape/ieee-yesist-malaysia.jpg`, alt: "IEEE Yesist12 Malaysia", title: "International Finalist", subtitle: "Representing India in Malaysia", iconName: "globe" },
      { src: `${LIFE_BASE}/landscape/got-award-for-creative-team-head-jss.jpeg`, alt: "Leadership Award", title: "Creative Team Head", subtitle: "Recognized for creative leadership", iconName: "star" },
      { src: `${LIFE_BASE}/landscape/presenting-at-convergex.jpeg`, alt: "Hackathon Presentation", title: "Hackathon Presentation", subtitle: "Pitching innovative ideas", iconName: "star" },
      { src: `${LIFE_BASE}/landscape/a-collage.jpeg`, alt: "Collage of events", title: "Event Highlights", subtitle: "Showcasing memorable moments", iconName: "star" },
    ],
  },
  {
    id: 2,
    type: "image-carousel",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-2",
    interval: 4000,
    content: [
      { src: `${LIFE_BASE}/portrait/microsoft-speaker.jpg`, alt: "Speaker at Microsoft", title: "Tech Talk", subtitle: "Speaking at Microsoft Office", iconName: "calendar" },
      { src: `${LIFE_BASE}/portrait/abhyuday-speaker.jpg`, alt: "Speaker at Abhyuday", title: "Speaker at Abhyuday", subtitle: "Speaking at Abhyuday, JSS University", iconName: "calendar" },
      { src: `${LIFE_BASE}/portrait/award-winning-ieee-yesist-finalist.jpg`, alt: "Award Winner", title: "Innovation Award", subtitle: "IEEE Yesist12 Finalist", iconName: "award" },
      { src: `${LIFE_BASE}/portrait/speaking-at-ieee-orientation.jpeg`, alt: "Mentoring", title: "Mentoring Juniors", subtitle: "Guiding the next generation", iconName: "users" },
      { src: `${LIFE_BASE}/portrait/me-at-cashkaro.jpeg`, alt: "Professional", title: "Industry Experience", subtitle: "Experience at CashKaro", iconName: "code" },
      { src: `${LIFE_BASE}/portrait/ieee-day-speaker.jpg`, alt: "IEEE Day Speaker", title: "IEEE Day Speaker", subtitle: "Speaking at IEEE Day", iconName: "calendar" },
      { src: `${LIFE_BASE}/portrait/microsoft-office-attended.jpg`, alt: "Microsoft Office Visit", title: "Industry Experience", subtitle: "Experience at Microsoft Office", iconName: "code" },
    ],
  },
  {
    id: 3,
    type: "stat-carousel",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    interval: 3000,
    variant: "accent",
    content: [
      { title: "Hackathons", value: "10+", subtitle: "Participated & Finalist" },
      { title: "Awards Won", value: "5+", subtitle: "Across Multiple Domains" },
      { title: "Events Spoken", value: "5+", subtitle: "Tech Talks & Panels" },
      { title: "Events Attended", value: "25+", subtitle: "Engaging & Learning" },
    ],
  },
  {
    id: 4,
    type: "stat-carousel",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    interval: 3500,
    variant: "surface",
    content: [
      { title: "Projects", value: "20+", subtitle: "Deployed Apps" },
      { title: "Clients", value: "4+", subtitle: "Happy Customers" },
      { title: "Experience", value: "2+ Yrs", subtitle: "Web & AI Development" },
    ],
  },
  {
    id: 5,
    type: "image-carousel",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
    interval: 4500,
    content: [
      { src: `${LIFE_BASE}/communities/ieee-all.jpg`, alt: "IEEE Community", title: "IEEE Community", subtitle: "Building a strong tech network", iconName: "users" },
      { src: `${LIFE_BASE}/communities/edc-linkedin-workshop.JPG`, alt: "LinkedIn Workshop", title: "Workshop Host", subtitle: "Teaching personal branding", iconName: "globe" },
      { src: `${LIFE_BASE}/communities/convergex-hackathon.jpg`, alt: "ConvergeX Hackathon", title: "ConvergeX Finalist", subtitle: "Managing large scale hackathons", iconName: "code" },
      { src: `${LIFE_BASE}/communities/ieee-day-2.jpg`, alt: "IEEE Day", title: "IEEE Day Celebration", subtitle: "Speaking at IEEE Day", iconName: "calendar" },
      { src: `${LIFE_BASE}/communities/ieee-orientation.jpeg`, alt: "IEEE Orientation", title: "IEEE Orientation", subtitle: "Welcoming new members", iconName: "calendar" },
    ],
  },
  {
    id: 6,
    type: "image-carousel",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    interval: 3000,
    content: [
      { src: `${LIFE_BASE}/portrait/hack4bihar-poster-of-me.png`, alt: "Hack4Bihar", title: "Hack4Bihar", subtitle: "Community Mentor", iconName: "trophy" },
      { src: `${LIFE_BASE}/portrait/edc-poster-of-me-as-tech_head.jpeg`, alt: "EDC Tech Head", title: "Technical Head", subtitle: "EDC JSS University", iconName: "globe" },
      { src: `${LIFE_BASE}/portrait/ieee-poster-as-xtreme-ambassador.jpeg`, alt: "IEEEXtreme Ambassador", title: "Ambassador", subtitle: "IEEEXtreme 17.0", iconName: "globe" },
      { src: `${LIFE_BASE}/portrait/ieee-poster-of-me-as-webmaster.jpeg`, alt: "IEEE Webmaster", title: "Webmaster", subtitle: "IEEE JSS University", iconName: "globe" },
    ],
  },
  {
    id: 7,
    type: "quote",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    content: [{ text: "The best way to predict the future is to invent it.", author: "Alan Kay" }],
  },
];

export const proofItems = [
  "IEEE YESIST12 Global Finalist · Represented India in Malaysia",
  "Presented at Bharat Mandapam, Govt. of Delhi",
  "IEEE Research · Primary Author",
  "250+ Students Led",
  "Top 10% · IEEEXtreme 19.0",
];

export const recognitionGrid: { achievement: string; organizer: string; result: string }[] = [
  { achievement: "Convergex Hackathon", organizer: "Convergex", result: "Top 5 / 150+ Teams" },
  { achievement: "BizTech Ideathon", organizer: "NDIM, New Delhi", result: "Top 10 / 350+ Teams" },
  { achievement: "HackwithUP", organizer: "Chandigarh University TBI", result: "Finalist" },
  { achievement: "Project Presentation", organizer: "IEEE JSS Noida", result: "1st Prize" },
  { achievement: "Poster Presentation", organizer: "JSS University", result: "2nd Prize" },
  { achievement: "Adobe India Hackathon", organizer: "Adobe & Unstop", result: "Participant" },
  { achievement: "GSSoC Extended", organizer: "GirlScript Summer of Code", result: "Contributor" },
  { achievement: "Samsung Solve for Tomorrow", organizer: "Samsung", result: "Participant" },
  { achievement: "IEEEXtreme 20.0", organizer: "IEEE UP Section", result: "Co-Lead & Ambassador" },
];

export const featuredAchievements = [
  {
    eyebrow: "IEEE YESIST12 2025",
    title: "Global Finalist — Top 30 of 3,000+ Teams",
    body: "Represented India at the IEEE YESIST12 Grand Finale in Malaysia. Competed against teams from across the world with ROOTS — selected among 30 teams globally out of 3,000+ entries.",
  },
  {
    eyebrow: "Hack4Delhi · India Innovates 2026",
    title: "Grand Finalist — Top 30 of 1,500+ Teams",
    body: "e-Nivaran reached the Grand Finale at Bharat Mandapam, organized by the Government of Delhi. Presented civic AI infrastructure to government stakeholders.",
  },
  {
    eyebrow: "ICSETI 2026 · Scopus Indexed",
    title: "Published Research — Primary Author",
    body: "IEEE conference paper on Edge AI for rural classrooms. Designed a $300 offline AI architecture for underserved schools — as a second-year undergraduate.",
  },
  {
    eyebrow: "IEEEXtreme 19.0",
    title: "Top 10% Globally — 19,000+ Participants",
    body: "Competitive 24-hour programming contest run by IEEE worldwide. Ranked in the top 10% out of 19,000+ participants across the globe.",
  },
];

export const leadership = [
  {
    org: "EDC JSSUN",
    title: "Vice President · Entrepreneurship Development Cell",
    period: "Apr 2025 – Present",
    headline:
      "Leading an 80-member team, 15+ events, 250+ students mentored — plus the infrastructure that runs it all.",
    body: "Promoted from Technical Head to Vice President after conceiving and executing Founder's Pit 2026 — EDC JSSUN's flagship entrepreneurship event. 270+ participants, 75+ teams, a live auction platform architected and deployed from scratch.",
  },
  {
    org: "IEEE",
    title: "Webmaster & Co-Lead UP Section · IEEE JSS University SB",
    period: "2024 – Present",
    headline:
      "From building the chapter's digital infrastructure to leading IEEE Xtreme across the entire UP section.",
    body: "Webmaster of the IEEE JSS University Student Branch. Ambassador for IEEE YESIST12, IEEE Xtreme 19.0, and IEEE CSIS. Recently selected as Co-Lead for the IEEE UP Section's IEEE Xtreme 20 Student Ambassador Program.",
  },
  {
    org: "CSE TC & RAC",
    title: "Student Coordinator · CSE Technical Council & Research Activity Cell",
    period: "2024 – Present",
    headline:
      "Helping build a technical and research community from the ground up — 15+ events, 5+ research initiatives.",
    body: "Established in collaboration with our Head of Department to create a structured platform for technical and research activities. Building a space where students engage with research early — not just in their final year.",
  },
];
