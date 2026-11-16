# Casa di Riposo - Residenza San Francesco di Paola (Maida, CZ)

Stack: Next.js 15 (App Router) + Tailwind v4 + Neon/Drizzle + next-intl (it/en) + Vercel, Node 24.

## Stato

- [x] Fase 1 - Setup: Next, Tailwind, next-intl, Drizzle + Neon, schema e migrazione 0000, Node 24
- [x] Scheletro: header con menu dalla scheda, footer, switch IT/EN, tasto chiama fisso su mobile, 13 pagine placeholder
- [ ] Fase 2 - Direzione visiva (/motion-prompt), palette e font definitivi (ora provvisori in globals.css)
- [x] Fase 3 - Contenuti IT+EN su tutte le 13 pagine. I dati mancanti sono segnaposto tra [parentesi quadre]: cercare "[" in messages/*.json
- [ ] Fase 4 - Form: contatti/visita, candidature (CV su Vercel Blob), reclami. Server Actions + Zod + Resend + Turnstile
- [ ] Fase 5 - Trasparenza e documenti PDF
- [x] SEO base: JSON-LD NursingHome, sitemap, robots (manca hreflang per pagina)
- [ ] Fase 6 - SEO avanzata, accessibilita WCAG AA, privacy/cookie, Lighthouse
- [ ] Fase 7 - Deploy Vercel, dominio
- [ ] Fase 8 - Admin /admin (Auth.js): iniziative, documenti, richieste

## Per partire

1. Crea il progetto Neon in regione EU (Frankfurt), copia `.env.example` in `.env.local` con DATABASE_URL
2. `npm run db:migrate`
3. `npm run dev` e apri http://localhost:3000 (redirect a /it)

## Da chiedere al cliente

PEC, orari di visita, titolare/DPO privacy, nome pubblico (Residenza San Francesco di Paola o Casa Protetta Maida?),
logo/colori/foto reali, dominio e accessi, PDF (Carta dei Servizi, modulistica, organigramma),
modalita richiesta cartelle cliniche, chi traduce in inglese, scadenze,
se gli obblighi D.Lgs 33/2013 si applicano (struttura accreditata ASP).
