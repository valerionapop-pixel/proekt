import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { dictionaries, resolveLocale } from "@/i18n/translations";

type TrustPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({ searchParams }: TrustPageProps): Promise<Metadata> {
  const params = await searchParams;
  const lang = Array.isArray(params.lang) ? params.lang[0] : params.lang;
  const locale = resolveLocale(lang);
  const dict = dictionaries[locale];

  return {
    title: dict.trust.title,
    description: dict.trust.intro,
    openGraph: {
      title: dict.trust.title,
      description: dict.trust.intro,
      locale: locale === "ru" ? "ru_RU" : "en_US"
    }
  };
}

export default async function TrustPage({ searchParams }: TrustPageProps) {
  const params = await searchParams;
  const lang = Array.isArray(params.lang) ? params.lang[0] : params.lang;
  const locale = resolveLocale(lang);
  const dict = dictionaries[locale];

  return (
    <main className="content-page">
      <div className="page-shell">
        <Header locale={locale} dict={dict} />

        <section className="content-card">
          <h1>{dict.trust.title}</h1>
          <p>{dict.trust.intro}</p>

          <article>
            <h2>{dict.trust.orgTitle}</h2>
            <p>{dict.trust.orgText}</p>
          </article>

          <article>
            <h2>{dict.trust.transparencyTitle}</h2>
            <ul>
              {dict.trust.transparencyList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article>
            <h2>{dict.trust.animalCareTitle}</h2>
            <ul>
              {dict.trust.animalCareList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>
      </div>

      <Footer dict={dict} locale={locale} />
    </main>
  );
}
