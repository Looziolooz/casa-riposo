import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { site } from "@/lib/site";

const secondary = [
  { href: "/ammissione", key: "ammissione" },
  { href: "/visite", key: "visite" },
  { href: "/lavora-con-noi", key: "lavora" },
  { href: "/reclami", key: "reclami" },
  { href: "/trasparenza", key: "trasparenza" },
  { href: "/privacy", key: "privacy" },
  { href: "/cookie", key: "cookie" },
] as const;

export function Footer() {
  const t = useTranslations();
  return (
    <footer className="mt-16 bg-brand-dark pb-24 text-white lg:pb-0">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2">
        <address className="not-italic leading-relaxed">
          <p className="font-bold">{site.name}</p>
          <p>{site.address}</p>
          <p>
            <a href={site.phoneHref} className="underline">{site.phone}</a>
          </p>
          <p>
            <a href={`mailto:${site.email}`} className="underline">{site.email}</a>
          </p>
        </address>
        <ul className="grid grid-cols-2 gap-2">
          {secondary.map((item) => (
            <li key={item.key}>
              <Link href={item.href} className="underline-offset-4 hover:underline">
                {t(`nav.${item.key}`)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="border-t border-white/20 px-4 py-4 text-center text-sm">
        {site.legalName} · {t("footer.vat")} {site.vat}
      </p>
    </footer>
  );
}
