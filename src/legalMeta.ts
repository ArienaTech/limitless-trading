// ─── Shared legal constants ───────────────────────────────────────────────────
// Single source of truth for entity, jurisdiction and contact details so every
// legal document stays internally consistent.
//
// NOTE (client to confirm before launch): the registered company name and
// company registration number are placeholders — update `entityLegalName` and
// `companyNumber` once confirmed with Companies House.

export const legal = {
  brand: "Limitless Trading Group",
  short: "LTG",
  entityLegalName: "Limitless Trading Group Ltd",
  companyNumber: "to be confirmed",
  jurisdiction: "England and Wales",
  city: "London, United Kingdom",
  registeredOffice: "London, United Kingdom",
  website: "limitlesstrading.com",
  lastUpdated: "July 2026",
  email: {
    general: "hello@ltgtrading.com",
    privacy: "privacy@ltgtrading.com",
    complaints: "complaints@ltgtrading.com",
    compliance: "compliance@ltgtrading.com",
  },
} as const;

// Convenience: describes the legal entity in a single, reusable sentence.
export const entityDescription = `${legal.brand} is a trading name of ${legal.entityLegalName}, a company registered in ${legal.jurisdiction} (company number: ${legal.companyNumber}). Our registered office is ${legal.registeredOffice}.`;
