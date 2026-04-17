// Mock data for v0 — to be replaced by API-Football sync via edge function.
export type MatchStatus = "scheduled" | "live" | "ht" | "finished";

export interface MockMatch {
  id: string;
  league: string;
  leagueLogo: string;
  homeTeam: string;
  homeCrest: string;
  awayTeam: string;
  awayCrest: string;
  kickoff: string; // ISO
  status: MatchStatus;
  homeScore?: number;
  awayScore?: number;
  minute?: number;
  oddsHome: number;
  oddsDraw: number;
  oddsAway: number;
  isDerby?: boolean;
}

const crest = (label: string, hue: number) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='hsl(${hue},70%,55%)'/><stop offset='1' stop-color='hsl(${(hue + 30) % 360},70%,35%)'/></linearGradient></defs><circle cx='32' cy='32' r='30' fill='url(%23g)' stroke='white' stroke-width='2'/><text x='32' y='40' text-anchor='middle' font-family='Space Grotesk,sans-serif' font-size='22' font-weight='700' fill='white'>${label}</text></svg>`
  )}`;

const leagueLogo = (label: string, hue: number) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='hsl(${hue},60%,20%)'/><text x='16' y='21' text-anchor='middle' font-family='Inter,sans-serif' font-size='12' font-weight='700' fill='hsl(${hue},80%,70%)'>${label}</text></svg>`
  )}`;

const now = Date.now();

export const mockMatches: MockMatch[] = [
  {
    id: "m1",
    league: "Botola Pro",
    leagueLogo: leagueLogo("BP", 25),
    homeTeam: "Raja Casablanca",
    homeCrest: crest("RC", 160),
    awayTeam: "Wydad AC",
    awayCrest: crest("WA", 0),
    kickoff: new Date(now - 1000 * 60 * 35).toISOString(),
    status: "live",
    homeScore: 1,
    awayScore: 1,
    minute: 38,
    oddsHome: 2.4,
    oddsDraw: 3.1,
    oddsAway: 2.8,
    isDerby: true,
  },
  {
    id: "m2",
    league: "Champions League",
    leagueLogo: leagueLogo("UCL", 220),
    homeTeam: "Real Madrid",
    homeCrest: crest("RM", 220),
    awayTeam: "Man City",
    awayCrest: crest("MC", 195),
    kickoff: new Date(now - 1000 * 60 * 12).toISOString(),
    status: "live",
    homeScore: 0,
    awayScore: 2,
    minute: 14,
    oddsHome: 2.2,
    oddsDraw: 3.4,
    oddsAway: 3.0,
  },
  {
    id: "m3",
    league: "Ligue 1",
    leagueLogo: leagueLogo("L1", 240),
    homeTeam: "PSG",
    homeCrest: crest("PSG", 240),
    awayTeam: "Marseille",
    awayCrest: crest("OM", 195),
    kickoff: new Date(now + 1000 * 60 * 60 * 2).toISOString(),
    status: "scheduled",
    oddsHome: 1.55,
    oddsDraw: 4.2,
    oddsAway: 5.5,
    isDerby: true,
  },
  {
    id: "m4",
    league: "Premier League",
    leagueLogo: leagueLogo("EPL", 340),
    homeTeam: "Arsenal",
    homeCrest: crest("ARS", 0),
    awayTeam: "Liverpool",
    awayCrest: crest("LIV", 350),
    kickoff: new Date(now + 1000 * 60 * 60 * 5).toISOString(),
    status: "scheduled",
    oddsHome: 2.6,
    oddsDraw: 3.3,
    oddsAway: 2.5,
  },
  {
    id: "m5",
    league: "La Liga",
    leagueLogo: leagueLogo("LL", 15),
    homeTeam: "Barcelona",
    homeCrest: crest("FCB", 220),
    awayTeam: "Atletico",
    awayCrest: crest("ATM", 0),
    kickoff: new Date(now + 1000 * 60 * 60 * 26).toISOString(),
    status: "scheduled",
    oddsHome: 1.85,
    oddsDraw: 3.6,
    oddsAway: 4.0,
  },
  {
    id: "m6",
    league: "Botola Pro",
    leagueLogo: leagueLogo("BP", 25),
    homeTeam: "FAR Rabat",
    homeCrest: crest("FAR", 120),
    awayTeam: "RS Berkane",
    awayCrest: crest("RSB", 30),
    kickoff: new Date(now + 1000 * 60 * 60 * 30).toISOString(),
    status: "scheduled",
    oddsHome: 2.1,
    oddsDraw: 3.0,
    oddsAway: 3.4,
  },
];

export const mockUser = {
  username: "Anouar_26",
  country: "🇲🇦",
  division: "elite" as const,
  divisionLabel: "Elite",
  coins: 2840,
  xp: 6420,
  xpToNext: 9999,
  rank: 47,
  country_rank: 12,
  streak: 12,
};

export const mockTopTipsters = [
  { username: "Rachid_Pro", country: "🇲🇦", winRate: 62, picks: 88, streak: 5, verified: true },
  { username: "Karim_Tips", country: "🇩🇿", winRate: 58, picks: 124, streak: 3, verified: true },
  { username: "Yasmine_FC", country: "🇫🇷", winRate: 55, picks: 67, streak: 2, verified: false },
];
