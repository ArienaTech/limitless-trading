// ─── Trust Metrics (ticker) ──────────────────────────────────────────────────

export const trustMetrics: string[] = [
  "OFFICIAL PARTNER — MONETA MARKETS",
  "AUTOMATED FOREX EXECUTION",
  "24/7 MARKET COVERAGE",
  "PROFESSIONAL FUND MANAGEMENT",
  "EXCLUSIVE VIP COMMUNITY",
  "ENQUIRY ONLY — NO PAYMENTS",
  "EDUCATION FIRST — RISK MANAGED",
  "LICENSED PARTNERS & BROKERS",
];

// ─── Partners ─────────────────────────────────────────────────────────────────

export interface Partner {
  name: string;
  logo: string;
}

const LOGO_BASE =
  "https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/web-public";

export const partners: Partner[] = [
  { name: "Moneta Markets", logo: `${LOGO_BASE}/LGT_logo1.svg` },
  { name: "Skool", logo: `${LOGO_BASE}/LGT_logo2.svg` },
  { name: "Ben Wooliss BW 365", logo: `${LOGO_BASE}/LGT_logo3.svg` },
  { name: "Moneta Funded", logo: `${LOGO_BASE}/LGT_logo4.svg` },
];

// ─── Infrastructure & Trust ───────────────────────────────────────────────────

export interface TrustItem {
  index: string;
  category: string;
  name: string;
  detail: string;
}

export const trustItems: TrustItem[] = [
  {
    index: "001",
    category: "LICENSING",
    name: "Licensed Partners & Brokers",
    detail:
      "We work with trusted and reputable licensed partners and brokers to ensure we operate within their regulations and standards of service.",
  },
  {
    index: "002",
    category: "EXECUTION",
    name: "Automated Execution",
    detail:
      "Rules-based execution applied consistently across every position — no emotion, no fatigue, no deviation from the plan.",
  },
  {
    index: "003",
    category: "RISK",
    name: "Risk Management First",
    detail:
      "Our number-one pillar is ensuring every individual introduced into the financial markets is educated and aware of the risks.",
  },
  {
    index: "004",
    category: "REPORTING",
    name: "Transparency",
    detail:
      "Members receive transparent, trade-level reporting so they always understand what is happening with their capital.",
  },
];

// ─── Value Pillars ────────────────────────────────────────────────────────────

export interface ValuePillar {
  index: string;
  title: string;
  tagline: string;
  description: string;
}

export const valuePillars: ValuePillar[] = [
  {
    index: "01",
    title: "Execute",
    tagline: "Institutional-grade execution. Zero emotional bias.",
    description:
      "Every decision is governed by rules, not sentiment. Our algorithms execute thousands of decisions per day with a precision no human trader can consistently match — without hesitation, without fatigue.",
  },
  {
    index: "02",
    title: "Learn",
    tagline: "Continuous intelligence. Market-aware systems.",
    description:
      "Markets evolve. Our systems do too. Continuous strategy research, daily performance review, and weekly member intelligence reports ensure you always understand what is working and why.",
  },
  {
    index: "03",
    title: "Grow",
    tagline: "Disciplined compounding. Long-term results.",
    description:
      "Sustainable growth comes from risk-adjusted consistency, not outsized bets. Our portfolio construction targets stable, compound returns across market cycles — measuring success in years, not days.",
  },
];

// ─── Client Success Stories ───────────────────────────────────────────────────

export interface ClientStory {
  initials: string;
  background: string;
  challenge: string;
  outcome: string;
  quote: string;
  stat: string;
  statLabel: string;
}

export const clientStories: ClientStory[] = [
  {
    initials: "MH",
    background: "Former portfolio manager — 18 years institutional equities",
    challenge:
      "After moving to independent management, MH struggled to replicate institutional discipline without a full team. Emotion and fatigue were eroding returns that had been consistent for nearly two decades.",
    outcome:
      "LTG's systematic framework replaced discretionary judgment with rules-based execution. Within 12 months, portfolio volatility dropped 34% while risk-adjusted returns improved materially.",
    quote:
      "I spent 18 years at an institution with an entire risk team around me. LTG gave me that infrastructure as an independent — the discipline I had built my career on, at a fraction of the overhead.",
    stat: "−34%",
    statLabel: "Portfolio volatility",
  },
  {
    initials: "SR",
    background: "Business owner — first systematic capital allocation",
    challenge:
      "SR had accumulated significant capital from a successful exit but had no trading background. Previous self-directed attempts resulted in costly emotional decisions during volatile periods.",
    outcome:
      "Onboarded through LTG's structured introduction programme. A clear strategy allocation was built against SR's risk profile. No trading decisions required — the system handled execution entirely.",
    quote:
      "I did not want another fund. I wanted to understand what was happening with my capital every day. LTG gave me full transparency without expecting me to be a trader.",
    stat: "0",
    statLabel: "Emotional decisions required",
  },
  {
    initials: "AT",
    background: "Active retail trader — 6 years of inconsistent results",
    challenge:
      "AT was technically proficient but consistently undermined results through position sizing errors and holding losing trades too long. Recognised the problem but could not break the pattern independently.",
    outcome:
      "After transitioning to LTG's systematic approach, AT eliminated the discretionary overrides that had been most costly. Consistent rule application restored both confidence and performance.",
    quote:
      "I knew exactly what I was doing wrong. The problem was I could not stop doing it. Removing the discretion was not a limitation — it was the answer.",
    stat: "18 mo",
    statLabel: "Consistent execution",
  },
];

// ─── Educational Insights ─────────────────────────────────────────────────────

export interface Insight {
  index: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
}

export const insights: Insight[] = [
  {
    index: "001",
    category: "STRATEGY",
    title: "Why Systematic Trading Outperforms Over the Long Run",
    excerpt:
      "When the same rules are applied without exception, the compounding effect of consistency becomes mathematically dominant over discretionary approaches.",
    readTime: "6 MIN READ",
  },
  {
    index: "002",
    category: "PSYCHOLOGY",
    title: "The Anatomy of a Bad Trade: How Smart Investors Lose Money",
    excerpt:
      "Most losses are not caused by poor analysis. They are caused by the human response to uncertainty — reflexive decisions made in the gap between knowing the rules and following them.",
    readTime: "8 MIN READ",
  },
  {
    index: "003",
    category: "RISK",
    title: "Risk-Adjusted Returns: The Only Metric That Matters",
    excerpt:
      "Headline returns are marketing. Sharpe ratio, Sortino ratio, max drawdown — these are the professional standards. Here is how to read them, and why they change everything.",
    readTime: "5 MIN READ",
  },
];

// ─── Application Steps ────────────────────────────────────────────────────────

export interface AppStep {
  num: string;
  title: string;
  description: string;
}

export const appSteps: AppStep[] = [
  {
    num: "01",
    title: "Get in touch",
    description:
      "Reach out and tell us where you're at. No obligations or commitments — just a conversation about whether LTG is the right fit for you.",
  },
  {
    num: "02",
    title: "Setup your trading account",
    description:
      "We help you get set up with the right account through our trusted, licensed partners and brokers so you're ready to begin.",
  },
  {
    num: "03",
    title: "Start our education & free courses",
    description:
      "Begin with our education and free courses. Master the individual before mastering the trader — mindset, psychology, and risk come first.",
  },
  {
    num: "04",
    title: "Execute daily & evolve with our community",
    description:
      "Put the education into practice. Execute daily alongside a purpose-driven community and evolve with the support of live traders.",
  },
  {
    num: "05",
    title: "Become a professional trader",
    description:
      "Scale with longevity. Develop the discipline, consistency, and risk-management infrastructure that define a professional trader.",
  },
];

// ─── Navigation ───────────────────────────────────────────────────────────────
// Full site architecture. `ready: false` pages are pre-structured but toggled
// off in the UI until their content and brand assets are supplied (per client).

export interface NavChild {
  label: string;
  href: string;
  ready?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  ready?: boolean;
  children?: NavChild[];
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/", ready: true },
  { label: "About", href: "/about", ready: true },
  {
    label: "LTG Ecosystem",
    href: "/#values",
    ready: true,
    children: [
      { label: "Results", href: "/ecosystem/results", ready: false },
      { label: "Testimonials & Case Studies", href: "/ecosystem/testimonials", ready: false },
    ],
  },
  { label: "VIP Community & Signals", href: "/vip-community-signals", ready: false },
  { label: "Trading Mastery & Education", href: "/trading-mastery", ready: false },
  { label: "Funded", href: "/funded", ready: false },
  { label: "VIP Fund Management", href: "/vip-fund-management", ready: false },
  { label: "Our Partners", href: "/partners", ready: false },
  { label: "Shop", href: "/shop", ready: false },
  { label: "Contact", href: "/#apply", ready: true },
  { label: "FAQ", href: "/#faq", ready: true },
  {
    label: "Affiliate Marketing Programme",
    href: "/affiliate",
    ready: false,
    children: [
      { label: "Build Your Own White Label Trading Business", href: "/affiliate/white-label", ready: false },
      { label: "Become an IB", href: "/affiliate/become-an-ib", ready: false },
    ],
  },
];

// Compact top-bar links — the ready subset that renders inline on the homepage.
export const navLinks = navItems.filter((i) => i.ready && i.label !== "Home");
