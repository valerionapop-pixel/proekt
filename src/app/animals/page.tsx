import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { animals } from "@/data/animals";
import { dictionaries, resolveLocale } from "@/i18n/translations";

type AnimalsPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

type Filter = "all" | "cat" | "dog";

export default async function AnimalsPage({ searchParams }: AnimalsPageProps) {
  const params = await searchParams;
  const lang = Array.isArray(params.lang) ? params.lang[0] : params.lang;
  const kind = Array.isArray(params.kind) ? params.kind[0] : params.kind;

  const locale = resolveLocale(lang);
  const dict = dictionaries[locale];
  const filter: Filter = kind === "cat" || kind === "dog" ? kind : "all";

  const filteredAnimals =
    filter === "all" ? animals : animals.filter((animal) => animal.kind === filter);

  const linkWith = (targetFilter: Filter) =>
    `/animals?lang=${locale}&kind=${targetFilter}`;

  return (
    <main className="content-page">
      <div className="page-shell">
        <Header locale={locale} dict={dict} />

        <section className="animals-header">
          <h1>{dict.animals.title}</h1>
          <p>{dict.animals.subtitle}</p>

          <div className="filters">
            <Link href={linkWith("all")} className={filter === "all" ? "active" : ""}>
              {dict.animals.all}
            </Link>
            <Link href={linkWith("cat")} className={filter === "cat" ? "active" : ""}>
              {dict.animals.cats}
            </Link>
            <Link href={linkWith("dog")} className={filter === "dog" ? "active" : ""}>
              {dict.animals.dogs}
            </Link>
          </div>
        </section>

        <section className="animals-grid">
          {filteredAnimals.map((animal) => (
            <article key={animal.id} className="animal-card">
              <Image
                src={animal.imageUrl}
                alt={animal.name}
                width={420}
                height={280}
                sizes="(max-width: 720px) 100vw, 280px"
                loading="lazy"
              />

              <div className="animal-info">
                <h3>{animal.name}</h3>
                <p>
                  <strong>{dict.animals.breed}:</strong>{" "}
                  {locale === "ru" ? animal.breedRu : animal.breedEn}
                </p>
                <p>
                  <strong>{dict.animals.age}:</strong> {animal.ageYears} {dict.animals.years}
                </p>
                <p>
                  <strong>{dict.animals.vaccinations}:</strong>{" "}
                  {animal.vaccinations.join(", ")}
                </p>
              </div>
            </article>
          ))}
        </section>
      </div>

      <Footer dict={dict} locale={locale} />
    </main>
  );
}
