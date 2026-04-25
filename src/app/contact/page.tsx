import type { Metadata } from "next";
import { ContactFormDemo } from "@/components/ContactFormDemo";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { dictionaries, resolveLocale } from "@/i18n/translations";

type ContactPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({
  searchParams
}: ContactPageProps): Promise<Metadata> {
  const params = await searchParams;
  const lang = Array.isArray(params.lang) ? params.lang[0] : params.lang;
  const locale = resolveLocale(lang);
  const dict = dictionaries[locale];

  return {
    title: dict.contact.title,
    description: dict.contact.intro,
    openGraph: {
      title: dict.contact.title,
      description: dict.contact.intro,
      locale: locale === "ru" ? "ru_RU" : "en_US"
    }
  };
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const lang = Array.isArray(params.lang) ? params.lang[0] : params.lang;
  const locale = resolveLocale(lang);
  const dict = dictionaries[locale];

  return (
    <main className="content-page">
      <div className="page-shell">
        <Header locale={locale} dict={dict} />

        <section className="content-card">
          <h1>{dict.contact.title}</h1>
          <p>{dict.contact.intro}</p>

          <article>
            <h2>{dict.contact.hoursTitle}</h2>
            <p>{dict.contact.hoursText}</p>
          </article>

          <article>
            <h2>{dict.contact.formTitle}</h2>
            <ContactFormDemo
              messageLabel={dict.contact.messageLabel}
              messagePlaceholder={dict.contact.messagePlaceholder}
              submitLabel={dict.contact.submit}
              note={dict.contact.note}
            />
          </article>
        </section>
      </div>

      <Footer dict={dict} locale={locale} />
    </main>
  );
}
