import { getTranslations, setRequestLocale } from "next-intl/server";

export async function PlaceholderPage({ locale, titleKey }: { locale: string; titleKey: string }) {
  setRequestLocale(locale);
  const t = await getTranslations();
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-bold text-brand-dark">{t(`nav.${titleKey}`)}</h1>
      <p className="mt-4 text-muted">{t("placeholder")}</p>
    </section>
  );
}
