const PARTNER_IDS = [
  "142958",
  "143049",
  "143025",
  "143158",
  "143134",
  "143110",
  "143222",
  "143248",
  "143317",
  "143341",
  "143420",
  "143523",
] as const;

export const partnerLogos = PARTNER_IDS.map((id, index) => ({
  src: `/partners/${id}.png`,
  alt: `Banking Partner ${index + 1}`,
}));
