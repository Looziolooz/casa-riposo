import { ContentPage, contentMetadata } from "@/components/content-page";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  return contentMetadata((await params).locale, "servizi");
}

export default async function Page({ params }: Props) {
  return <ContentPage locale={(await params).locale} ns="servizi" />;
}
