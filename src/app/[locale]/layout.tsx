import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CallButton } from "@/components/call-button";
import { site } from "@/lib/site";
import { nursingHomeJsonLd, siteUrl } from "@/lib/seo";
import "../globals.css";

const body = Atkinson_Hyperlegible({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: site.name, template: `%s · ${site.name}` },
  description: "Residenza socio-sanitaria per anziani a Maida (CZ).",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations("nav");

  return (
    <html lang={locale}>
      <body className={`${body.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(nursingHomeJsonLd(locale)) }}
        />
        <NextIntlClientProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2"
          >
            {t("skip")}
          </a>
          <Header />
          <main id="main" className="min-h-[60vh]">
            {children}
          </main>
          <Footer />
          <CallButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
