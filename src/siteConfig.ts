// ─── Site configuration — single source of truth ─────────────────────────────
// The production domain is not finalised yet. Everything that references the
// domain (canonical URLs, sitemap, robots, structured data, contact emails)
// derives from SITE_DOMAIN below, so switching to the final domain is a
// one-line change here.

export const SITE_DOMAIN = "limitlesstrading.com";
export const SITE_URL = `https://${SITE_DOMAIN}`;

// Twitter/X handle (update alongside the domain when confirmed).
export const TWITTER_HANDLE = "@limitlesstrading";

// All contact addresses use the site domain so branding stays consistent.
export const EMAILS = {
  general: `hello@${SITE_DOMAIN}`,
  invest: `invest@${SITE_DOMAIN}`,
  compliance: `compliance@${SITE_DOMAIN}`,
  complaints: `complaints@${SITE_DOMAIN}`,
  privacy: `privacy@${SITE_DOMAIN}`,
} as const;

// Absolute URL helper for canonicals / structured data.
export const url = (path = "") => `${SITE_URL}${path}`;
