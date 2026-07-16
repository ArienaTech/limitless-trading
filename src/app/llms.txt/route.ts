import { SITE_URL, EMAILS } from "../../siteConfig";
import { articles } from "../insights/articles";

// Serves /llms.txt — a concise, structured summary of the site for AI/LLM
// crawlers (the emerging llmstxt.org convention). Generated from the same
// config and content sources so it never drifts from the live site.

export const dynamic = "force-static";

export function GET() {
  const articleLines = articles
    .map((a) => `- [${a.title}](${SITE_URL}/insights/${a.slug}): ${a.description}`)
    .join("\n");

  const body = `# Limitless Trading Group (LTG)

> Limitless Trading Group is a London-based systematic forex trading, education, and fund management group, founded in 2023. We work with trusted, licensed partners and brokers. Our approach is education first, disciplined rules-based execution second, and scaling with longevity and risk management — not chasing profits. Membership is by application only, with no upfront payment.

## About

- Founded: 2023, London, United Kingdom
- Model: education-first community; systematic (rules-based) execution; managed capital
- Philosophy: "Master the individual before mastering the trader" — mindset, psychology, and risk management come first
- Access: by application only; no upfront payment; fully confidential
- Important: trading carries a high risk of loss. Nothing on the site is financial advice. Past performance is not a reliable indicator of future results.

## Core pages

- [Home](${SITE_URL}/): overview of the systematic trading, education, and fund management ecosystem
- [About](${SITE_URL}/about): story, philosophy, values, and team
- [Insights](${SITE_URL}/insights): educational articles and market intelligence
- [Apply](${SITE_URL}/#apply): membership application
- [FAQ](${SITE_URL}/#faq): frequently asked questions

## Insight articles

${articleLines}

## Services

- Automated / systematic forex execution
- Trading education and mentorship (Inner Circle)
- VIP community and signals
- Managed capital / VIP fund management (via licensed partners)

## Legal

- [Risk Disclosure](${SITE_URL}/legal/risk-disclosure)
- [Terms & Conditions](${SITE_URL}/legal/terms)
- [Privacy Policy](${SITE_URL}/legal/privacy-policy)
- [Cookie Policy](${SITE_URL}/legal/cookie-policy)
- [Disclaimer](${SITE_URL}/legal/disclaimer)

## Contact

- General: ${EMAILS.general}
- Investor relations: ${EMAILS.invest}
- Compliance: ${EMAILS.compliance}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
