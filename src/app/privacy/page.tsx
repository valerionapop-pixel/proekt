import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { dictionaries, resolveLocale } from "@/i18n/translations";

type PrivacyPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({
  searchParams
}: PrivacyPageProps): Promise<Metadata> {
  const params = await searchParams;
  const lang = Array.isArray(params.lang) ? params.lang[0] : params.lang;
  const locale = resolveLocale(lang);
  const dict = dictionaries[locale];

  return {
    title: dict.privacy.title,
    description: dict.privacy.sections[0]?.body ?? dict.privacy.title,
    openGraph: {
      title: dict.privacy.title,
      description: dict.privacy.sections[0]?.body ?? dict.privacy.title,
      locale: locale === "ru" ? "ru_RU" : "en_US"
    }
  };
}

export default async function PrivacyPage({ searchParams }: PrivacyPageProps) {
  const params = await searchParams;
  const lang = Array.isArray(params.lang) ? params.lang[0] : params.lang;
  const locale = resolveLocale(lang);
  const dict = dictionaries[locale];

  return (
    <main className="content-page">
      <div className="page-shell">
        <Header locale={locale} dict={dict} />

        <section className="content-card">
          <h1>{dict.privacy.title}</h1>
          <p className="muted">{dict.privacy.updated}</p>

          {dict.privacy.sections.map((section) => (
            <article key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </section>
      </div>

      <Footer dict={dict} locale={locale} />
    </main>
  );
}
