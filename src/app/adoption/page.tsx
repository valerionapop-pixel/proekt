import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { dictionaries, resolveLocale } from "@/i18n/translations";

type AdoptionPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({
  searchParams
}: AdoptionPageProps): Promise<Metadata> {
  const params = await searchParams;
  const lang = Array.isArray(params.lang) ? params.lang[0] : params.lang;
  const locale = resolveLocale(lang);
  const dict = dictionaries[locale];

  return {
    title: dict.adoption.title,
    description: dict.adoption.intro,
    openGraph: {
      title: dict.adoption.title,
      description: dict.adoption.intro,
      locale: locale === "ru" ? "ru_RU" : "en_US"
    }
  };
}

export default async function AdoptionPage({ searchParams }: AdoptionPageProps) {
  const params = await searchParams;
  const lang = Array.isArray(params.lang) ? params.lang[0] : params.lang;
  const locale = resolveLocale(lang);
  const dict = dictionaries[locale];

  return (
    <main className="content-page">
      <div className="page-shell">
        <Header locale={locale} dict={dict} />

        <section className="content-card">
          <h1>{dict.adoption.title}</h1>
          <p>{dict.adoption.intro}</p>

          <article>
            <h2>{dict.adoption.stepsTitle}</h2>
            <ol>
              {dict.adoption.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>

          <article>
            <h2>{dict.adoption.requirementsTitle}</h2>
            <ul>
              {dict.adoption.requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article>
            <h2>{dict.adoption.trialTitle}</h2>
            <p>{dict.adoption.trialText}</p>
          </article>
        </section>
      </div>

      <Footer dict={dict} locale={locale} />
    </main>
  );
}
