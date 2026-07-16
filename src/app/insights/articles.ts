// ─── Insight article content ──────────────────────────────────────────────────
// Long-form educational content for the /insights/[slug] detail pages.
// Structured for AEO/GEO: clear question-led headings, concise answers first,
// then supporting depth. No performance guarantees or fabricated statistics.

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export interface Article {
  slug: string;
  category: string;
  title: string;
  metaTitle: string;
  description: string;
  excerpt: string;
  readTime: string;
  date: string; // human-readable
  datePublished: string; // ISO
  dateModified: string; // ISO
  keywords: string[];
  takeaways: string[];
  body: ArticleBlock[];
}

export const articles: Article[] = [
  {
    slug: "why-systematic-trading-outperforms",
    category: "STRATEGY",
    title: "Why Systematic Trading Outperforms Over the Long Run",
    metaTitle: "Why Systematic Trading Outperforms Discretionary Trading",
    description:
      "Systematic trading applies the same rules to every trade, removing emotion and improving consistency. Here is why a rules-based process compounds better than discretionary decision-making over the long run.",
    excerpt:
      "When the same rules are applied without exception, the compounding effect of consistency becomes mathematically dominant over discretionary approaches.",
    readTime: "6 min read",
    date: "June 2026",
    datePublished: "2026-06-02",
    dateModified: "2026-06-02",
    keywords: [
      "systematic trading",
      "discretionary vs systematic trading",
      "rules-based trading",
      "algorithmic forex trading",
      "trading consistency",
    ],
    takeaways: [
      "Systematic trading executes a fixed set of rules, so every decision is repeatable and reviewable.",
      "Removing discretion removes the single biggest source of variance in most traders' results: emotion.",
      "Consistency compounds. A modest, repeatable edge applied without exception outperforms a larger edge applied inconsistently.",
      "The goal is not to predict markets but to navigate them with a process that survives every market condition.",
    ],
    body: [
      {
        type: "p",
        text: "Systematic trading is a method of trading financial markets using a predefined, rules-based process that is applied identically to every trade. Instead of deciding in the moment, a systematic trader decides in advance — when to enter, how much to risk, and when to exit — and then follows that plan without exception. The result is a process that is repeatable, measurable, and free from the emotional swings that quietly erode most discretionary results.",
      },
      { type: "h2", text: "Systematic vs discretionary: what actually differs" },
      {
        type: "p",
        text: "Discretionary traders make each decision case by case, weighing the chart, the news, and their own read of the market. That flexibility sounds like an advantage, and in the hands of a disciplined professional it can be. But it introduces a variable that is almost impossible to control: the human response to uncertainty. The same trader, facing the same setup, will act differently when they are confident versus when they are fearful, rested versus tired, up on the day versus down.",
      },
      {
        type: "p",
        text: "Systematic trading removes that variable. The rules do not care whether the last trade won or lost. They do not chase, they do not freeze, and they do not deviate under pressure. Every position is sized the same way, every exit is honoured, and every outcome can be attributed to the process rather than to a mood.",
      },
      { type: "h3", text: "Why consistency beats brilliance" },
      {
        type: "p",
        text: "The most under-appreciated fact in trading is that a modest edge applied consistently compounds into a result that a larger edge applied inconsistently cannot match. If you have a rule that wins slightly more than it loses, the mathematics only works in your favour when the rule is followed every single time. Skip the rule on the trades that feel wrong — which are often the very trades the system needs — and the edge evaporates.",
      },
      {
        type: "quote",
        text: "Markets cannot be predicted. They can be systematically navigated.",
      },
      { type: "h2", text: "The three properties that make a system durable" },
      {
        type: "ul",
        items: [
          "Repeatability — the same inputs always produce the same decision, so performance can be reviewed and improved objectively.",
          "Risk symmetry — position sizing and stop placement are defined before the trade, so no single loss can threaten the account.",
          "Reviewability — because every trade follows the rules, deviations are visible, and the system can be refined with data rather than opinion.",
        ],
      },
      { type: "h2", text: "Does systematic trading remove all risk?" },
      {
        type: "p",
        text: "No. Trading forex and other leveraged products always carries a significant risk of loss, and no process — however disciplined — can guarantee a profit. A systematic approach does not eliminate losing trades; it makes losing trades survivable and the overall process consistent. The value is in controlling the controllable: your risk, your discipline, and your ability to keep applying an edge across every market condition.",
      },
      { type: "h2", text: "The Limitless approach" },
      {
        type: "p",
        text: "At Limitless Trading Group we teach the individual before the trader. Systematic execution is only powerful once a person understands why discretion tends to fail them — the psychology, the risk management, and the discipline come first. From there, rules-based execution becomes the tool that turns understanding into consistency. Education first, execution second, and scaling with longevity over chasing profits.",
      },
    ],
  },
  {
    slug: "anatomy-of-a-bad-trade",
    category: "PSYCHOLOGY",
    title: "The Anatomy of a Bad Trade: How Smart Investors Lose Money",
    metaTitle: "The Anatomy of a Bad Trade: Why Smart Investors Lose Money",
    description:
      "Most trading losses are not caused by poor analysis but by the human response to uncertainty. Here is how a bad trade actually forms — and the discipline that prevents it.",
    excerpt:
      "Most losses are not caused by poor analysis. They are caused by the human response to uncertainty — reflexive decisions made in the gap between knowing the rules and following them.",
    readTime: "8 min read",
    date: "May 2026",
    datePublished: "2026-05-19",
    dateModified: "2026-05-19",
    keywords: [
      "trading psychology",
      "why traders lose money",
      "risk management forex",
      "position sizing",
      "trading discipline",
    ],
    takeaways: [
      "A bad trade is usually a good idea ruined by execution — not a bad idea.",
      "The five most common failure points are emotion, oversizing, early profit-taking, revenge trading, and abandoning the plan.",
      "Position sizing decided before the trade is the single most effective defence against catastrophic loss.",
      "The gap between knowing the rules and following them is where accounts are lost — and where systems earn their value.",
    ],
    body: [
      {
        type: "p",
        text: "Ask most people why traders lose money and they will point to bad analysis. In reality, the majority of damaging losses come from the opposite direction: a sound idea undone by the way it was executed. Understanding the anatomy of a bad trade — how it forms, moment by moment — is the fastest way to stop repeating it.",
      },
      { type: "h2", text: "Stage one: the setup is fine" },
      {
        type: "p",
        text: "A bad trade rarely begins with a bad decision. It usually begins with a reasonable one: a valid setup, a level that matters, a plan that would have been fine if followed. The problem is not the entry. The problem is everything that happens after the position is open and uncertainty takes over.",
      },
      { type: "h2", text: "Stage two: emotion replaces the plan" },
      {
        type: "p",
        text: "The moment money is at risk, the brain stops evaluating probabilities and starts protecting itself. A small drawdown triggers the urge to move the stop. A quick profit triggers the urge to close early and lock it in. Neither impulse is on the plan. Both feel completely rational in the moment. This is the gap between knowing the rules and following them — and it is where most accounts are quietly lost.",
      },
      {
        type: "quote",
        text: "I knew exactly what I was doing wrong. The problem was I could not stop doing it.",
      },
      { type: "h2", text: "The five failure points" },
      {
        type: "ul",
        items: [
          "Emotion over logic — decisions made to relieve discomfort rather than to follow the plan.",
          "Oversizing with confidence — risking too much because the setup feels certain, when certainty is exactly when risk should be controlled.",
          "Closing profit too early — taking a small win to escape the discomfort of an open position, cutting the trades that were meant to pay for the losers.",
          "Revenge trading — chasing a loss with a larger, unplanned position to get back to even.",
          "Abandoning the plan — overriding the system on the specific trades it exists to handle.",
        ],
      },
      { type: "h2", text: "Why position sizing is the real defence" },
      {
        type: "p",
        text: "Every failure point above becomes survivable if the size is right and unsurvivable if it is not. Position sizing decided before the trade — as a fixed fraction of capital, never adjusted mid-trade to justify a hope — is the single most effective protection a trader has. It turns a bad trade into a small, recoverable event rather than an account-defining one.",
      },
      { type: "h3", text: "The discipline that prevents it" },
      {
        type: "p",
        text: "You cannot think your way out of an emotional reaction in real time; the reaction is faster than the thought. The only reliable defence is to make the decision in advance and remove the discretion at the moment it matters. That is precisely what a systematic process does: it pre-commits you to the plan so the emotional override never gets a vote.",
      },
      { type: "h2", text: "The Limitless view" },
      {
        type: "p",
        text: "We believe it is not the strategy that sets most traders back, but their mindset, psychology, and emotional control. That is why we master the individual before the trader — and why removing discretion, for many members, is not a limitation but the answer. Trading carries a high risk of loss; the goal is not to avoid losing trades but to make sure no single trade can define your account.",
      },
    ],
  },
  {
    slug: "risk-adjusted-returns",
    category: "RISK",
    title: "Risk-Adjusted Returns: The Only Metric That Matters",
    metaTitle: "Risk-Adjusted Returns Explained: Sharpe, Sortino & Drawdown",
    description:
      "Headline returns are marketing. Risk-adjusted metrics — Sharpe ratio, Sortino ratio, and maximum drawdown — tell you how a return was actually earned. Here is how to read them.",
    excerpt:
      "Headline returns are marketing. Sharpe ratio, Sortino ratio, max drawdown — these are the professional standards. Here is how to read them, and why they change everything.",
    readTime: "5 min read",
    date: "May 2026",
    datePublished: "2026-05-05",
    dateModified: "2026-05-05",
    keywords: [
      "risk-adjusted returns",
      "sharpe ratio explained",
      "sortino ratio",
      "maximum drawdown",
      "how to evaluate a trading strategy",
    ],
    takeaways: [
      "A headline return means little without knowing the risk taken to earn it.",
      "The Sharpe ratio measures return per unit of total volatility; the Sortino ratio measures return per unit of downside volatility.",
      "Maximum drawdown is the largest peak-to-trough fall — the number that decides whether you can actually stay invested.",
      "Professionals compare strategies on risk-adjusted terms, not on the biggest number in the brochure.",
    ],
    body: [
      {
        type: "p",
        text: "A return on its own tells you almost nothing. A strategy that returned 40% by risking ruin is worse than one that returned 15% with tight, controlled risk — because only one of them is repeatable and survivable. Risk-adjusted returns are the professional standard precisely because they answer the question a headline number hides: how much risk was taken to earn this?",
      },
      { type: "h2", text: "What are risk-adjusted returns?" },
      {
        type: "p",
        text: "Risk-adjusted returns express performance relative to the risk taken to achieve it, rather than in isolation. Two strategies can post the same return while taking wildly different risks. The risk-adjusted view lets you compare them fairly — and it is the lens every serious allocator uses when deciding where capital belongs.",
      },
      { type: "h2", text: "The three metrics that matter" },
      { type: "h3", text: "Sharpe ratio" },
      {
        type: "p",
        text: "The Sharpe ratio measures excess return per unit of total volatility. A higher Sharpe means more return for each unit of risk. It is the most widely quoted risk-adjusted metric, and a useful first filter — though it penalises upside and downside volatility equally, which is not how most investors actually experience risk.",
      },
      { type: "h3", text: "Sortino ratio" },
      {
        type: "p",
        text: "The Sortino ratio refines the Sharpe by only counting downside volatility — the movements investors actually care about. A strategy that is volatile to the upside is not penalised the way it is under Sharpe. For return streams that are deliberately asymmetric, the Sortino ratio is often the more honest measure.",
      },
      { type: "h3", text: "Maximum drawdown" },
      {
        type: "p",
        text: "Maximum drawdown is the largest peak-to-trough decline over a period. It is the number that decides whether you can actually stay invested through the hard stretch, because a strategy you abandon at the bottom returns you nothing. Drawdown is where paper performance meets human tolerance.",
      },
      {
        type: "quote",
        text: "Headline returns are marketing. Risk-adjusted returns are the truth.",
      },
      { type: "h2", text: "How to read them together" },
      {
        type: "ul",
        items: [
          "Start with maximum drawdown — can you psychologically and financially survive the worst stretch?",
          "Use the Sortino ratio to judge how efficiently downside risk was converted into return.",
          "Use the Sharpe ratio as a cross-check and a way to compare against benchmarks.",
          "Never evaluate any of them without the context of the time period and market conditions they were earned in.",
        ],
      },
      { type: "h2", text: "Why this changes everything" },
      {
        type: "p",
        text: "Once you evaluate performance on a risk-adjusted basis, the biggest number in the brochure stops impressing you. You start asking better questions: how was this earned, how deep were the drawdowns, and would I have stayed invested through them? That shift — from headline returns to risk-adjusted reality — is the difference between a marketing consumer and a professional allocator.",
      },
      {
        type: "p",
        text: "At Limitless Trading Group, risk management is our number-one pillar. Past performance is never a reliable indicator of future results, and all trading carries a significant risk of loss — which is exactly why we teach members to measure success in risk-adjusted, long-term terms rather than in the size of a single headline return.",
      },
    ],
  },
];

export const articleSlugs = articles.map((a) => a.slug);

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
