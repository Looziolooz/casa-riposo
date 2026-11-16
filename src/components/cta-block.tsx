import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { site } from "@/lib/site";

export async function CtaBlock() {
  const t = await getTranslations("cta");
  return (
    <section className="mx-auto mt-16 max-w-6xl px-4">
      <div className="rounded-lg bg-brand p-8 text-white">
        <h2 className="text-2xl font-bold">{t("title")}</h2>
        <p className="mt-2 max-w-2xl">{t("text")}</p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/contatti" className="rounded bg-white px-5 py-3 font-bold text-brand-dark">
            {t("button")}
          </Link>
          <a href={site.phoneHref} className="rounded border border-white px-5 py-3 font-bold">
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
