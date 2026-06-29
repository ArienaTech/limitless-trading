export type Format = "VINYL" | "DIGITAL" | "EP" | "ALBUM";

export interface Track {
  num: string;
  title: string;
  label: string;
  year: string;
  format: Format;
}

export const tracks: Track[] = [
  { num: "001", title: "Dead Reckoning", label: "Ostgut Ton", year: "2025", format: "VINYL" },
  { num: "002", title: "Signal Loss", label: "Tresor", year: "2024", format: "VINYL" },
  { num: "003", title: "Null Space", label: "self-released", year: "2024", format: "DIGITAL" },
  { num: "004", title: 'Fault Line (12")', label: "Semantica", year: "2023", format: "VINYL" },
  { num: "005", title: "Everything Goes Dark", label: "CLR", year: "2023", format: "DIGITAL" },
  { num: "006", title: "Interior / Exterior", label: "Prologue", year: "2022", format: "VINYL" },
  { num: "007", title: "Pressure Wave EP", label: "Blueprint", year: "2022", format: "EP" },
  { num: "008", title: "Corridor", label: "Stroboscopic Artefacts", year: "2021", format: "VINYL" },
];

export type ShowType =
  | "HEADLINE"
  | "B2B"
  | "SUPPORTING"
  | "BACK TO BACK"
  | "RESIDENCY";

export interface Show {
  date: string;
  venue: string;
  city: string;
  type: ShowType;
}

export const shows: Show[] = [
  { date: "09 MAY", venue: "Fabric Room 1", city: "London", type: "HEADLINE" },
  { date: "16 MAY", venue: "Tresor", city: "Berlin", type: "B2B" },
  { date: "23 MAY", venue: "Shelter", city: "Amsterdam", type: "HEADLINE" },
  { date: "31 MAY", venue: "Corsica Studios", city: "London", type: "SUPPORTING" },
  { date: "07 JUN", venue: "Panorama Bar", city: "Berlin", type: "HEADLINE" },
  { date: "14 JUN", venue: "Output", city: "New York", type: "HEADLINE" },
  { date: "21 JUN", venue: "Concrete", city: "Paris", type: "BACK TO BACK" },
  { date: "28 JUN", venue: "Robert Johnson", city: "Offenbach", type: "HEADLINE" },
  { date: "12 JUL", venue: "De School", city: "Amsterdam", type: "RESIDENCY" },
];

export const pastShows: { date: string; venue: string; city: string }[] = [
  { date: "18 APR 2026", venue: "Berghain", city: "Berlin" },
  { date: "04 APR 2026", venue: "Bassiani", city: "Tbilisi" },
  { date: "21 MAR 2026", venue: "Fold", city: "London" },
  { date: "07 MAR 2026", venue: "Khidi", city: "Tbilisi" },
  { date: "22 FEB 2026", venue: "Tresor", city: "Berlin" },
  { date: "08 FEB 2026", venue: "De Marktkantine", city: "Amsterdam" },
  { date: "25 JAN 2026", venue: "Nitsa", city: "Barcelona" },
  { date: "11 JAN 2026", venue: "Closer", city: "Kyiv" },
  { date: "31 DEC 2025", venue: "Funkhaus", city: "Berlin" },
  { date: "13 DEC 2025", venue: "Sub Club", city: "Glasgow" },
  { date: "29 NOV 2025", venue: "Rex Club", city: "Paris" },
  { date: "15 NOV 2025", venue: "Fabric", city: "London" },
];

export interface Mix {
  title: string;
  context: string;
  date: string;
  runtime: string;
}

export const mixes: Mix[] = [
  {
    title: "TRESOR LIVE REC",
    context: "Recorded live at Tresor, Berlin",
    date: "Jan 2026",
    runtime: "01:48:23",
  },
  {
    title: "FABRIC 103",
    context: "Fabric Podcast Series",
    date: "Nov 2025",
    runtime: "02:14:07",
  },
  {
    title: "VOID SESSIONS #12",
    context: "Self-recorded, studio",
    date: "Mar 2025",
    runtime: "01:22:54",
  },
];

export const tickerItems: string[] = [
  "09 MAY / FABRIC — LONDON",
  "16 MAY / TRESOR — BERLIN",
  "23 MAY / SHELTER — AMSTERDAM",
  "07 JUN / PANORAMA BAR — BERLIN",
  "14 JUN / OUTPUT — NEW YORK",
  "28 JUN / ROBERT JOHNSON — OFFENBACH",
];

export const navLinks = [
  { label: "Music", href: "#music" },
  { label: "Live", href: "#live" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#booking" },
];
