import { useTranslations } from "next-intl";
import { site } from "@/lib/site";

/** Tasto chiamata sempre visibile su mobile. */
export function CallButton() {
  const t = useTranslations("nav");
  return (
    <a
      href={site.phoneHref}
      className="fixed inset-x-4 bottom-4 z-40 rounded-full bg-brand py-4 text-center text-lg font-bold text-white shadow-lg lg:hidden"
    >
      {t("call")} {site.phone}
    </a>
  );
}
