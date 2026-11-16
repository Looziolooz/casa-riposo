import { site } from "./site";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export const routes = [
  "", "/servizi", "/personale", "/qualita", "/iniziative", "/contatti", "/trasparenza",
  "/ammissione", "/visite", "/lavora-con-noi", "/reclami", "/privacy", "/cookie",
] as const;

/** JSON-LD NursingHome con i soli dati confermati dalla scheda. */
export function nursingHomeJsonLd(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "NursingHome",
    name: site.name,
    legalName: site.legalName,
    vatID: `IT${site.vat}`,
    url: `${siteUrl}/${locale}`,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Contrada Vallini",
      postalCode: "88025",
      addressLocality: "Maida",
      addressRegion: "CZ",
      addressCountry: "IT",
    },
  };
}
