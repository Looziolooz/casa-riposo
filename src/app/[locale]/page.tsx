import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { CtaBlock } from "@/components/cta-block";

type Card = { title: string; text: string };

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const cards = t.raw("cards") as Card[];

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <p className="font-bold uppercase tracking-wide text-brand">{t("eyebrow")}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight text-brand-dark md:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted">{t("intro")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-16">
        <ul className="grid gap-4 md:grid-cols-3">
          {cards.map((c) => (
            <li key={c.title} className="rounded-lg border border-black/10 bg-white p-6">
              <h2 className="text-xl font-bold text-brand-dark">{c.title}</h2>
              <p className="mt-2 text-muted">{c.text}</p>
            </li>
          ))}
        </ul>
        <Link href="/servizi" className="mt-6 inline-block font-bold text-brand underline underline-offset-4">
          {t("more")} →
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-16">
        <h2 className="text-2xl font-bold">{t("qualityTitle")}</h2>
        <p className="mt-3 max-w-3xl text-muted">{t("qualityText")}</p>
        <Link href="/qualita" className="mt-4 inline-block font-bold text-brand underline underline-offset-4">
          {t("qualityLink")} →
        </Link>
      </section>

      <CtaBlock />
    </>
  );
}
