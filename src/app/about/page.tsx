import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { dictionaries, resolveLocale } from "@/i18n/translations";

type AboutPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function AboutPage({ searchParams }: AboutPageProps) {
  const params = await searchParams;
  const lang = Array.isArray(params.lang) ? params.lang[0] : params.lang;
  const locale = resolveLocale(lang);
  const dict = dictionaries[locale];
  const aboutItems = [
    {
      title: dict.about.missionTitle,
      body: <p>{dict.about.missionText}</p>,
      image:
        "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=75"
    },
    {
      title: dict.about.historyTitle,
      body: <p>{dict.about.historyText}</p>,
      image:
        "https://images.unsplash.com/photo-1615789591457-74a63395c990?auto=format&fit=crop&w=800&q=75",
      imageClassName: "about-image-history"
    },
    {
      title: dict.about.valuesTitle,
      body: (
        <ul>
          {dict.about.valuesList.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      ),
      image:
        "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=800&q=75"
    },
    {
      title: dict.about.helpTitle,
      body: <p>{dict.about.helpText}</p>,
      image:
        "https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?auto=format&fit=crop&w=800&q=75"
    }
  ];

  return (
    <main className="content-page">
      <div className="page-shell">
        <Header locale={locale} dict={dict} />

        <section className="content-card about-card">
          <h1>{dict.about.title}</h1>

          {aboutItems.map((item) => (
            <article className="about-item" key={item.title}>
              <div className="about-item-copy">
                <h2>{item.title}</h2>
                {item.body}
              </div>
              <div className="about-item-media">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={533}
                  sizes="(max-width: 900px) 100vw, 480px"
                  loading="lazy"
                  className={item.imageClassName}
                />
              </div>
            </article>
          ))}
        </section>
      </div>

      <Footer dict={dict} locale={locale} />
    </main>
  );
}
