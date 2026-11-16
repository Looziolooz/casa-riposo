// Dati di contatto dalla scheda briefing. PEC e orari: da chiedere al cliente.
export const site = {
  name: "Residenza San Francesco di Paola",
  legalName: "Residenza per anziani San Francesco di Paola di V. Paone & C. S.a.s.",
  vat: "02580580799",
  address: "Contrada Vallini, 88025 Maida (CZ)",
  phone: "+39 0968 754280",
  phoneHref: "tel:+390968754280",
  email: "casaprotettamaida@gmail.com",
} as const;

export const navItems = [
  { href: "/", key: "home" },
  { href: "/servizi", key: "servizi" },
  { href: "/personale", key: "personale" },
  { href: "/qualita", key: "qualita" },
  { href: "/iniziative", key: "iniziative" },
  { href: "/contatti", key: "contatti" },
  { href: "/trasparenza", key: "trasparenza" },
] as const;
