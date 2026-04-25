import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { dictionaries, resolveLocale } from "@/i18n/translations";

type FaqPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({ searchParams }: FaqPageProps): Promise<Metadata> {
  const params = await searchParams;
  const lang = Array.isArray(params.lang) ? params.lang[0] : params.lang;
  const locale = resolveLocale(lang);
  const dict = dictionaries[locale];

  return {
    title: dict.faq.title,
    description: dict.faq.intro,
    openGraph: {
      title: dict.faq.title,
      description: dict.faq.intro,
      locale: locale === "ru" ? "ru_RU" : "en_US"
    }
  };
}

export default async function FaqPage({ searchParams }: FaqPageProps) {
  const params = await searchParams;
  const lang = Array.isArray(params.lang) ? params.lang[0] : params.lang;
  const locale = resolveLocale(lang);
  const dict = dictionaries[locale];

  return (
    <main className="content-page">
      <div className="page-shell">
        <Header locale={locale} dict={dict} />

        <section className="content-card">
          <h1>{dict.faq.title}</h1>
          <p>{dict.faq.intro}</p>

          <div className="faq-list">
            {dict.faq.items.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>

      <Footer dict={dict} locale={locale} />
    </main>
  );
}
