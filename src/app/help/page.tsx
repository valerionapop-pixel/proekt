import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { dictionaries, resolveLocale } from "@/i18n/translations";

type HelpPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({ searchParams }: HelpPageProps): Promise<Metadata> {
  const params = await searchParams;
  const lang = Array.isArray(params.lang) ? params.lang[0] : params.lang;
  const locale = resolveLocale(lang);
  const dict = dictionaries[locale];

  return {
    title: dict.help.title,
    description: dict.help.intro,
    openGraph: {
      title: dict.help.title,
      description: dict.help.intro,
      locale: locale === "ru" ? "ru_RU" : "en_US"
    }
  };
}

export default async function HelpPage({ searchParams }: HelpPageProps) {
  const params = await searchParams;
  const lang = Array.isArray(params.lang) ? params.lang[0] : params.lang;
  const locale = resolveLocale(lang);
  const dict = dictionaries[locale];

  return (
    <main className="content-page">
      <div className="page-shell">
        <Header locale={locale} dict={dict} />

        <section className="content-card">
          <h1>{dict.help.title}</h1>
          <p>{dict.help.intro}</p>

          <article>
            <h2>{dict.help.volunteerTitle}</h2>
            <p>{dict.help.volunteerText}</p>
          </article>

          <article>
            <h2>{dict.help.fosterTitle}</h2>
            <p>{dict.help.fosterText}</p>
          </article>

          <article>
            <h2>{dict.help.transportTitle}</h2>
            <p>{dict.help.transportText}</p>
          </article>

          <article>
            <h2>{dict.help.donationsTitle}</h2>
            <p>{dict.help.donationsText}</p>
          </article>

          <article>
            <h2>{dict.help.partnersTitle}</h2>
            <p>{dict.help.partnersText}</p>
          </article>
        </section>
      </div>

      <Footer dict={dict} locale={locale} />
    </main>
  );
}
