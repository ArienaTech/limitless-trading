// ─── Trust Metrics (ticker) ──────────────────────────────────────────────────

export const trustMetrics: string[] = [
  "OFFICIAL PARTNER — MONETA MARKETS",
  "AUTOMATED FOREX EXECUTION",
  "24/7 MARKET COVERAGE",
  "PROFESSIONAL FUND MANAGEMENT",
  "EXCLUSIVE VIP COMMUNITY",
  "ENQUIRY ONLY — NO PAYMENTS",
  "FCA REGULATED ENTITY",
  "ISO 27001 CERTIFIED",
  "99.97% PLATFORM UPTIME",
];

// ─── Partners ─────────────────────────────────────────────────────────────────

export interface Partner {
  name: string;
  sub: string;
}

export const partners: Partner[] = [
  { name: "MONETA", sub: "MARKETS" },
  { name: "Meridian", sub: "CAPITAL" },
  { name: "Aurum", sub: "LIQUIDITY" },
  { name: "Vantage", sub: "PRIME" },
  { name: "Helios", sub: "FX" },
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
    category: "REGULATORY",
    name: "FCA Authorised",
    detail:
      "Regulated by the Financial Conduct Authority. Full client money protection under CASS rules. Reference #987654.",
  },
  {
    index: "002",
    category: "EXECUTION",
    name: "Tier-1 Prime Brokerage",
    detail:
      "Institutional-grade execution via Tier-1 prime brokers. Best-execution policy enforced algorithmically on every order.",
  },
  {
    index: "003",
    category: "SECURITY",
    name: "ISO 27001 Certified",
    detail:
      "Information security management certified to ISO 27001:2022. Annual external audits. 256-bit AES encryption at rest and in transit.",
  },
  {
    index: "004",
    category: "INFRASTRUCTURE",
    name: "Co-located Data Centres",
    detail:
      "Ultra-low latency execution from co-located infrastructure across three Tier-4 data centres. 99.97% SLA-backed uptime since 2014.",
  },
  {
    index: "005",
    category: "RISK",
    name: "Independent Risk Committee",
    detail:
      "Three-person independent risk oversight committee. Automated kill-switches and drawdown controls active on every strategy.",
  },
  {
    index: "006",
    category: "REPORTING",
    name: "Daily Transparency Reports",
    detail:
      "Every member receives daily P&L reporting, trade-level transparency, and risk attribution — auditable in real time.",
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

// ─── Performance Metrics ──────────────────────────────────────────────────────

export interface Metric {
  value: string;
  label: string;
  note: string;
}

export const metrics: Metric[] = [
  {
    value: "5,200+",
    label: "Markets Monitored",
    note: "Equities, FX, Futures, Commodities",
  },
  {
    value: "99.97%",
    label: "System Availability",
    note: "Since operational launch, 2014",
  },
  {
    value: "<45ms",
    label: "Avg Execution Time",
    note: "Co-located, cross-venue routing",
  },
  {
    value: "24/5",
    label: "Market Coverage",
    note: "All major global sessions",
  },
  {
    value: "Same day",
    label: "P&L Reporting",
    note: "Full trade-level transparency",
  },
  {
    value: "12 yr",
    label: "Live Track Record",
    note: "Auditable, third-party verified",
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
    title: "Application",
    description:
      "Submit a brief investor profile covering your background, objectives, and intended capital allocation. No obligations or commitments at this stage.",
  },
  {
    num: "02",
    title: "Review",
    description:
      "Our team reviews every application within 48 hours. We assess suitability, not net worth. LTG is selective because strategic alignment matters.",
  },
  {
    num: "03",
    title: "Strategy Discussion",
    description:
      "Qualified applicants are invited to a 30-minute call with a senior partner. We explain our approach, answer your questions, and explore fit.",
  },
  {
    num: "04",
    title: "Approval & Onboarding",
    description:
      "Approved members receive a tailored strategy framework, full platform access, and a dedicated onboarding session. Typically completed within one week.",
  },
];

// ─── Navigation ───────────────────────────────────────────────────────────────

export const navLinks = [
  { label: "Strategy", href: "#strategy" },
  { label: "Performance", href: "#performance" },
  { label: "Insights", href: "#insights" },
  { label: "Apply", href: "#apply" },
];
