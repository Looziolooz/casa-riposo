"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { navItems, site } from "@/lib/site";

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const other = locale === "it" ? "en" : "it";

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="font-bold text-brand-dark">
          {site.name}
        </Link>

        <nav aria-label={t("menu")} className="hidden lg:block">
          <ul className="flex gap-5">
            {navItems.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="py-2 hover:text-brand aria-[current=page]:font-bold aria-[current=page]:text-brand"
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={pathname}
            locale={other}
            className="rounded border border-black/20 px-2 py-1 text-sm uppercase"
          >
            {other}
          </Link>
          <a
            href={site.phoneHref}
            className="hidden rounded bg-brand px-4 py-2 font-bold text-white hover:bg-brand-dark lg:inline-block"
          >
            {site.phone}
          </a>
          <button
            type="button"
            className="rounded border border-black/20 px-3 py-2 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? t("close") : t("menu")}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label={t("menu")} className="border-t border-black/10 lg:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-2">
            {navItems.map((item) => (
              <li key={item.key}>
                <Link href={item.href} onClick={() => setOpen(false)} className="block py-3 text-lg">
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
