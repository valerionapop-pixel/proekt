import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { dictionaries, resolveLocale } from "@/i18n/translations";

type StoriesPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({
  searchParams
}: StoriesPageProps): Promise<Metadata> {
  const params = await searchParams;
  const lang = Array.isArray(params.lang) ? params.lang[0] : params.lang;
  const locale = resolveLocale(lang);
  const dict = dictionaries[locale];

  return {
    title: dict.stories.title,
    description: dict.stories.intro,
    openGraph: {
      title: dict.stories.title,
      description: dict.stories.intro,
      locale: locale === "ru" ? "ru_RU" : "en_US"
    }
  };
}

export default async function StoriesPage({ searchParams }: StoriesPageProps) {
  const params = await searchParams;
  const lang = Array.isArray(params.lang) ? params.lang[0] : params.lang;
  const locale = resolveLocale(lang);
  const dict = dictionaries[locale];

  return (
    <main className="content-page">
      <div className="page-shell">
        <Header locale={locale} dict={dict} />

        <section className="content-card">
          <h1>{dict.stories.title}</h1>
          <p>{dict.stories.intro}</p>

          <div className="story-grid">
            {dict.stories.items.map((item) => (
              <article key={item.name} className="story-card">
                <div className="story-card-media">
                  <Image
                    src={item.image}
                    alt={item.pet}
                    fill
                    sizes="(max-width: 900px) 100vw, 280px"
                    className="story-card-image"
                  />
                </div>
                <div className="story-card-body">
                  <h2>{item.name}</h2>
                  <p className="story-pet">{item.pet}</p>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <Footer dict={dict} locale={locale} />
    </main>
  );
}
