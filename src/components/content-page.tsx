import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CtaBlock } from "./cta-block";

type Item = { title: string; text: string };
type Section = { heading: string; items: Item[] };

export async function contentMetadata(locale: string, ns: string): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: ns });
  return { title: t("title"), description: t("intro") };
}

/** Pagina di contenuto: titolo, intro, sezioni a card, nota e CTA. Testi in messages/<locale>.json. */
export async function ContentPage({ locale, ns }: { locale: string; ns: string }) {
  setRequestLocale(locale);
  const t = await getTranslations(ns);
  const sections = t.raw("sections") as Section[];

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-16">
        <h1 className="text-4xl font-bold text-brand-dark">{t("title")}</h1>
        <p className="mt-4 max-w-3xl text-lg text-muted">{t("intro")}</p>
      </section>

      {sections.map((s) => (
        <section key={s.heading} className="mx-auto max-w-6xl px-4 pt-12">
          <h2 className="text-2xl font-bold">{s.heading}</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {s.items.map((it) => (
              <li key={it.title} className="rounded-lg border border-black/10 bg-white p-6">
                <h3 className="text-lg font-bold text-brand-dark">{it.title}</h3>
                <p className="mt-2 text-muted">{it.text}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}

      {t.has("note") && (
        <p className="mx-auto mt-10 max-w-6xl px-4 font-bold">{t("note")}</p>
      )}

      <CtaBlock />
    </>
  );
}
