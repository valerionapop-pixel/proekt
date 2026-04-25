import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HomePetQuiz } from "@/components/HomePetQuiz";
import { HomeVkNews } from "@/components/HomeVkNews";
import { SafeImage } from "@/components/SafeImage";
import { animals } from "@/data/animals";
import { demoShelterVideoId, mapEmbedUrl, siteContacts, siteUrl } from "@/data/site";
import { dictionaries, resolveLocale } from "@/i18n/translations";

const ogImageUrl = new URL("/images/pawka-logo-dark.svg", siteUrl).href;

type HomePageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({ searchParams }: HomePageProps): Promise<Metadata> {
  const params = await searchParams;
  const lang = Array.isArray(params.lang) ? params.lang[0] : params.lang;
  const locale = resolveLocale(lang);
  const title = locale === "ru" ? "Главная — приют «Лапка»" : "Home — Pawka Shelter";
  const description =
    locale === "ru"
      ? "Пристройство кошек и собак, помощь приюту, истории усыновления, FAQ и контакты. Демо-сайт Pawka / Лапка."
      : "Adopt cats and dogs, help the shelter, read adoption stories, FAQ, and contacts. Pawka / Lapka demo site.";
  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/?lang=${locale}`
    },
    openGraph: {
      type: "website",
      url: `${siteUrl}/?lang=${locale}`,
      title,
      description,
      siteName: locale === "ru" ? "Лапка" : "Pawka Shelter",
      locale: locale === "ru" ? "ru_RU" : "en_US",
      images: [{ url: ogImageUrl, alt: title }]
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [ogImageUrl]
    }
  };
}

function needPath(href: "help" | "animals" | "trust", langQuery: string) {
  const paths = { help: "/help", animals: "/animals", trust: "/trust" } as const;
  return `${paths[href]}${langQuery}`;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const lang = Array.isArray(params.lang) ? params.lang[0] : params.lang;
  const locale = resolveLocale(lang);
  const dict = dictionaries[locale];
  const langQuery = `?lang=${locale}`;
  const urgentPets = animals.slice(0, 8);
  const featuredPet = animals[8];
  const animalsUtm = `${langQuery}&utm_source=home&utm_medium=cta&utm_campaign=adopt`;
  const helpUtm = `${langQuery}&utm_source=home&utm_medium=cta&utm_campaign=help`;
  const homeMeta =
    locale === "ru"
      ? {
          urgentTitle: "Срочно ищут дом",
          urgentSubtitle: "Этим хвостикам особенно важно найти семью в ближайшее время.",
          trustTitle: "Доверие в цифрах",
          trustSubtitle: "Коротко о том, как работает приют сегодня.",
          eventsTitle: "Ближайшие события",
          eventsSubtitle: "Приходите знакомиться с питомцами и командой.",
          quickHelpTitle: "Быстро помочь в 1 клик",
          quickHelpSubtitle: "Выберите удобный формат поддержки прямо сейчас.",
          pickerTitle: "Подберите питомца за 30 секунд",
          pickerSubtitle: "Выберите параметры и перейдите к подходящим анкетам.",
          pickerType: "Тип питомца",
          pickerAge: "Возраст",
          pickerTemper: "Характер",
          pickerFind: "Подобрать",
          storiesTitle: "Истории из новых домов",
          storiesSubtitle: "Реальные результаты пристройства и адаптации.",
          vkTitle: "Новости из ВКонтакте",
          vkSubtitle: "Свежие фото и короткие апдейты из жизни приюта.",
          meetPet: "Познакомиться",
          statRescued: "спасено в этом году",
          statAdopted: "уже в семьях",
          statOnCare: "на лечении",
          statVolunteers: "активных волонтеров",
          events: [
            { date: "12 мая", title: "День открытых дверей", place: "Приют «Лапка»" },
            { date: "18 мая", title: "Выездная выставка-пристройство", place: "ТРЦ Central Mall" },
            { date: "25 мая", title: "Волонтёрская смена", place: "Площадка приюта" }
          ],
          quickActions: [
            { title: "Корм", desc: "Закрыть недельную норму корма", href: `/help${langQuery}` },
            { title: "Лекарства", desc: "Поддержать лечение и прививки", href: `/help${langQuery}` },
            { title: "Транспорт", desc: "Оплатить поездки к ветеринару", href: `/help${langQuery}` },
            { title: "Донат", desc: "Любая сумма на срочные нужды", href: `/trust${langQuery}` }
          ],
          vkPosts: [
            {
              date: "03 мая",
              text: "Три щенка прошли первую вакцинацию и переехали в тёплый блок.",
              image: "https://placedog.net/640/427?id=71"
            },
            {
              date: "01 мая",
              text: "Кошка Ника после лечения вернулась в игровую комнату и отлично ест.",
              image: "https://cataas.com/cat?width=640&height=427&id=41"
            },
            {
              date: "28 апр",
              text: "Субботник в приюте: волонтёры обновили вольеры и собрали корм.",
              image: "https://placedog.net/640/427?id=57"
            },
            {
              date: "25 апр",
              text: "Установили новые когтеточки и лежанки в кошачьем блоке.",
              image: "https://cataas.com/cat?width=640&height=427&id=42"
            },
            {
              date: "22 апр",
              text: "Пёс Арчи завершил курс занятий с кинологом и готов к знакомству с семьёй.",
              image: "https://placedog.net/640/427?id=72"
            },
            {
              date: "19 апр",
              text: "Получили большую поставку корма и ветеринарных расходников от партнёров.",
              image: "https://placedog.net/640/427?id=73"
            },
            {
              date: "16 апр",
              text: "Волонтёры провели фотодень для новых анкет питомцев.",
              image: "https://placedog.net/640/427?id=74"
            },
            {
              date: "12 апр",
              text: "Две кошки уехали на домашнюю передержку — спасибо участникам программы!",
              image: "https://cataas.com/cat?width=640&height=427&id=43"
            }
          ]
        }
      : {
          urgentTitle: "Urgent: Need a Home",
          urgentSubtitle: "These pets need a family as soon as possible.",
          trustTitle: "Trust in Numbers",
          trustSubtitle: "A quick snapshot of shelter impact.",
          eventsTitle: "Upcoming Events",
          eventsSubtitle: "Meet our team and pets in person.",
          quickHelpTitle: "Help in One Click",
          quickHelpSubtitle: "Choose a simple way to support right now.",
          pickerTitle: "Find a pet in 30 seconds",
          pickerSubtitle: "Choose a few filters and open matching profiles.",
          pickerType: "Pet type",
          pickerAge: "Age",
          pickerTemper: "Temper",
          pickerFind: "Find pets",
          storiesTitle: "Stories from New Homes",
          storiesSubtitle: "Real adoption outcomes and happy endings.",
          vkTitle: "News from VKontakte",
          vkSubtitle: "Fresh photos and short updates from shelter life.",
          meetPet: "Meet this pet",
          statRescued: "rescued this year",
          statAdopted: "already in homes",
          statOnCare: "currently on treatment",
          statVolunteers: "active volunteers",
          events: [
            { date: "May 12", title: "Open Shelter Day", place: "Pawka Shelter" },
            { date: "May 18", title: "Adoption Pop-up Event", place: "Central Mall" },
            { date: "May 25", title: "Volunteer Shift", place: "Shelter Yard" }
          ],
          quickActions: [
            { title: "Food", desc: "Cover one week of pet food", href: `/help${helpUtm}` },
            { title: "Medicine", desc: "Support treatment and vaccines", href: `/help${helpUtm}` },
            { title: "Transport", desc: "Pay for vet trips and logistics", href: `/help${helpUtm}` },
            { title: "Donate", desc: "Any amount for urgent needs", href: `/trust${helpUtm}` }
          ],
          vkPosts: [
            {
              date: "May 03",
              text: "Three puppies completed their first vaccination and moved to a warm block.",
              image: "https://placedog.net/640/427?id=71"
            },
            {
              date: "May 01",
              text: "Nika the cat finished treatment and is back in the play room.",
              image: "https://cataas.com/cat?width=640&height=427&id=41"
            },
            {
              date: "Apr 28",
              text: "Volunteer cleanup day: refreshed kennels and stocked food supplies.",
              image: "https://placedog.net/640/427?id=57"
            },
            {
              date: "Apr 25",
              text: "New scratch posts and cozy beds installed in the cat area.",
              image: "https://cataas.com/cat?width=640&height=427&id=42"
            },
            {
              date: "Apr 22",
              text: "Archi completed his training sessions and is ready to meet adopters.",
              image: "https://placedog.net/640/427?id=72"
            },
            {
              date: "Apr 19",
              text: "We received a large delivery of food and veterinary supplies from partners.",
              image: "https://placedog.net/640/427?id=73"
            },
            {
              date: "Apr 16",
              text: "Volunteers held a photo day for new pet profiles.",
              image: "https://placedog.net/640/427?id=74"
            },
            {
              date: "Apr 12",
              text: "Two cats moved to temporary foster homes — thanks to everyone involved!",
              image: "https://cataas.com/cat?width=640&height=427&id=43"
            }
          ]
        };
  const adoptionSteps = dict.adoption.steps.slice(0, 3);
  const homeFaq = dict.faq.items.slice(0, 3);
  const subscribeMeta =
    locale === "ru"
      ? {
          featuredTitle: "Питомец дня",
          featuredSubtitle:
            "Сегодня в центре внимания — друг, с которым особенно хочется познакомиться.",
          featuredRibbon: "Ищет дом",
          adoptionHowTitle: "Как проходит пристройство",
          faqTitle: "Частые вопросы перед знакомством",
          subscribeTitle: "Подписка на новости приюта",
          subscribeText: "Получайте 1-2 письма в месяц с историями, событиями и срочными сборами.",
          emailPlaceholder: "Ваш e-mail",
          subscribeBtn: "Подписаться",
          alertText: "Срочно нужен корм и лекарства для 12 новых животных.",
          alertBtn: "Помочь сейчас",
          urgentFundTitle: "Срочный сбор",
          urgentFundText: "Собираем на лечение и питание новых питомцев, которых привезли после эвакуации.",
          calculatorTitle: "Калькулятор помощи",
          calculatorRows: [
            "500 ₽ = корм на 2 дня",
            "1500 ₽ = базовый осмотр и анализы",
            "3000 ₽ = вакцинация + обработка от паразитов",
            "7000 ₽ = часть оплаты сложного лечения"
          ],
          compareTitle: "Какой формат помощи вам подходит?",
          compareItems: [
            {
              title: "Взять питомца",
              text: "Если готовы к долгосрочной ответственности и ежедневному уходу.",
              href: `/animals${animalsUtm}`
            },
            {
              title: "Волонтёрство",
              text: "Если хотите помогать руками: выгул, фото, транспорт, события.",
              href: `/help${helpUtm}`
            },
            {
              title: "Донат",
              text: "Если хотите быстро поддержать лечение, корм и экстренные нужды.",
              href: `/trust${helpUtm}`
            }
          ],
          nearbyTitle: "Мы рядом",
          nearbyText: "Приют открыт для знакомств по записи. Удобно добраться на машине и общественном транспорте.",
          nearbyAddress: "Казань, ул. Примерная, 12 (демо-адрес)"
        }
      : {
          featuredTitle: "Pet of the Day",
          featuredSubtitle: "Today's spotlight — a friend we're excited for you to meet.",
          featuredRibbon: "Looking for home",
          adoptionHowTitle: "How Adoption Works",
          faqTitle: "Common Questions Before You Visit",
          subscribeTitle: "Shelter News Subscription",
          subscribeText: "Get 1-2 emails per month with stories, events, and urgent needs.",
          emailPlaceholder: "Your e-mail",
          subscribeBtn: "Subscribe",
          alertText: "Urgent need: food and medicine for 12 newly rescued animals.",
          alertBtn: "Help now",
          urgentFundTitle: "Urgent Fundraiser",
          urgentFundText: "We are raising funds for treatment and food for new pets rescued this week.",
          calculatorTitle: "Help Calculator",
          calculatorRows: [
            "$6 = food for 2 days",
            "$18 = basic vet check and tests",
            "$35 = vaccination + parasite treatment",
            "$80 = part of complex treatment costs"
          ],
          compareTitle: "Which way of helping fits you best?",
          compareItems: [
            {
              title: "Adopt",
              text: "Best if you're ready for long-term daily care and responsibility.",
              href: `/animals${animalsUtm}`
            },
            {
              title: "Volunteer",
              text: "Great if you want to help with walks, photos, transport, and events.",
              href: `/help${helpUtm}`
            },
            {
              title: "Donate",
              text: "Fast way to support treatment, food, and urgent shelter needs.",
              href: `/trust${helpUtm}`
            }
          ],
          nearbyTitle: "We Are Nearby",
          nearbyText: "Visits are available by appointment. Easy access by car and public transport.",
          nearbyAddress: "Kazan, Example st. 12 (demo address)"
        };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: locale === "ru" ? "НКО «Лапка» (Pawka Shelter)" : "Pawka Shelter (Lapka NGO)",
    alternateName: locale === "ru" ? "Pawka Shelter" : "Лапка",
    url: `${siteUrl}/?lang=${locale}`,
    description:
      locale === "ru"
        ? "Приют для кошек и собак: пристройство, помощь, прозрачность."
        : "Cat and dog shelter: adoption, help, and transparency.",
    telephone: siteContacts.phoneTel,
    email: siteContacts.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kazan",
      streetAddress: locale === "ru" ? "ул. Береговая, 16" : "16 Beregovaya St",
      addressCountry: "RU"
    },
    sameAs: ["https://vk.com/", "https://t.me/"]
  };

  return (
    <main className="home-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <section className="home-alert">
        <div className="page-shell home-alert-inner">
          <p>{subscribeMeta.alertText}</p>
          <Link href={`/help${helpUtm}`} className="btn btn-primary btn-compact" data-analytics="home_alert_help">
            {subscribeMeta.alertBtn}
          </Link>
        </div>
      </section>

      <section className="hero">
        <div className="page-shell">
          <Header locale={locale} dict={dict} />

          <div className="hero-grid">
            <div className="hero-copy">
              <h1>{dict.home.title}</h1>
              <p>{dict.home.subtitle}</p>
              <div className="hero-actions">
                <Link href={`/animals${langQuery}`} className="btn btn-primary">
                  {dict.home.ctaPrimary}
                </Link>
                <Link href={`/about${langQuery}`} className="btn btn-secondary">
                  {dict.home.ctaSecondary}
                </Link>
              </div>
            </div>

            <aside className="hero-form-card">
              <h2>{dict.home.formTitle}</h2>
              <p>{dict.home.formDescription}</p>
              <form>
                <input type="text" placeholder={dict.home.namePlaceholder} />
                <input type="text" placeholder={dict.home.cityPlaceholder} />
                <input type="text" placeholder={dict.home.petTypePlaceholder} />
                <input type="tel" placeholder={dict.home.phonePlaceholder} />
                <button type="button" className="btn btn-primary full">
                  {dict.home.submitLabel}
                </button>
              </form>
              <small>{dict.home.consentText}</small>
            </aside>
          </div>
        </div>
      </section>

      <HomePetQuiz locale={locale} />

      <section className="home-section">
        <div className="page-shell">
          <div className="section-head">
            <h2>{homeMeta.urgentTitle}</h2>
            <p>{homeMeta.urgentSubtitle}</p>
          </div>
          <div className="urgent-grid">
            {urgentPets.map((pet) => (
              <article key={pet.id} className="urgent-card">
                <SafeImage src={pet.imageUrl} alt={pet.name} />
                <div className="urgent-body">
                  <h3>{pet.name}</h3>
                  <p>
                    {locale === "ru" ? pet.breedRu : pet.breedEn} • {pet.ageYears}{" "}
                    {dict.animals.years}
                  </p>
                  <div className="health-badges">
                    <span>✓ {locale === "ru" ? "Привит" : "Vaccinated"}</span>
                    <span>✓ {locale === "ru" ? "Стерилизован" : "Sterilized"}</span>
                    <span>✓ {locale === "ru" ? "Готов к дому" : "Ready for home"}</span>
                  </div>
                  <Link
                    href={`/animals${animalsUtm}`}
                    className="btn btn-primary btn-compact"
                    data-analytics="home_urgent_meet_pet"
                  >
                    {homeMeta.meetPet}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section-alt">
        <div className="page-shell">
          <div className="section-head">
            <h2>{homeMeta.trustTitle}</h2>
            <p>{homeMeta.trustSubtitle}</p>
          </div>
          <div className="stats-grid">
            <article className="stat-card">
              <strong>187</strong>
              <span>{homeMeta.statRescued}</span>
            </article>
            <article className="stat-card">
              <strong>142</strong>
              <span>{homeMeta.statAdopted}</span>
            </article>
            <article className="stat-card">
              <strong>29</strong>
              <span>{homeMeta.statOnCare}</span>
            </article>
            <article className="stat-card">
              <strong>46</strong>
              <span>{homeMeta.statVolunteers}</span>
            </article>
          </div>
        </div>
      </section>

      <section className="home-section home-partners" aria-labelledby="partners-heading">
        <div className="page-shell">
          <div className="section-head section-head-row">
            <h2 id="partners-heading">{dict.homeExtra.partnersTitle}</h2>
            <Link href={`/trust${langQuery}`} className="btn btn-secondary btn-compact">
              {dict.homeExtra.partnersCta}
            </Link>
          </div>
          <ul className="partners-grid">
            {dict.homeExtra.partners.map((p) => (
              <li key={p.abbr} className="partner-pill" title={p.name}>
                <span className="partner-abbr" aria-hidden>
                  {p.abbr}
                </span>
                <span className="partner-name">{p.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="legal-teaser-wrap">
        <div className="page-shell">
          <p className="legal-teaser">
            <Link href={`/trust${langQuery}`}>{dict.homeExtra.legalTeaser}</Link>
          </p>
        </div>
      </div>

      <section className="home-section">
        <div className="page-shell">
          <div className="section-head">
            <h2>{subscribeMeta.compareTitle}</h2>
          </div>
          <div className="compare-grid">
            {subscribeMeta.compareItems.map((item) => (
              <Link key={item.title} href={item.href} className="compare-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section-alt home-needs">
        <div className="page-shell">
          <div className="section-head">
            <h2>{dict.homeExtra.needsTitle}</h2>
            <p>{dict.homeExtra.needsSubtitle}</p>
          </div>
          <ul className="needs-list">
            {dict.homeExtra.needs.map((n) => (
              <li key={n.label}>
                <Link href={needPath(n.href, langQuery)} className="needs-item">
                  <strong>{n.label}</strong>
                  <span>{n.hint}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="home-section home-section-alt">
        <div className="page-shell">
          <div className="section-head">
            <h2>{subscribeMeta.nearbyTitle}</h2>
            <p>{subscribeMeta.nearbyText}</p>
          </div>
          <div className="nearby-card">
            <div className="nearby-map-embed">
              <iframe title={dict.homeExtra.mapTitle} src={mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              <a
                href="https://www.openstreetmap.org/?mlat=55.787&mlon=49.109#map=15/55.787/49.109"
                className="map-external-link"
                target="_blank"
                rel="noreferrer"
              >
                {dict.homeExtra.mapOpen}
              </a>
            </div>
            <div className="nearby-info">
              <strong>{subscribeMeta.nearbyAddress}</strong>
              <p>{locale === "ru" ? "Ежедневно по записи, 10:00-18:00." : "Daily by appointment, 10:00-18:00."}</p>
              <Link href={`/contact${langQuery}`} className="btn btn-primary btn-compact">
                {locale === "ru" ? "Как добраться" : "How to get there"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-spotlight">
        <div className="page-shell">
          <article className="spotlight-card">
            <span className="spotlight-badge">{dict.homeExtra.spotlightBadge}</span>
            <h2>{dict.homeExtra.spotlightTitle}</h2>
            <p className="spotlight-meta">
              {dict.homeExtra.spotlightDate} · {dict.homeExtra.spotlightPlace}
            </p>
            <p className="spotlight-lead">{dict.homeExtra.spotlightText}</p>
            <Link href={`/contact${langQuery}`} className="btn btn-primary">
              {dict.homeExtra.spotlightCta}
            </Link>
          </article>
        </div>
      </section>

      <section className="home-section">
        <div className="page-shell events-help-layout">
          <div>
            <div className="section-head">
              <h2>{homeMeta.eventsTitle}</h2>
              <p>{homeMeta.eventsSubtitle}</p>
            </div>
            <div className="events-list">
              {homeMeta.events.map((event) => (
                <article key={event.title} className="event-card">
                  <span>{event.date}</span>
                  <h3>{event.title}</h3>
                  <p>{event.place}</p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <div className="section-head">
              <h2>{homeMeta.quickHelpTitle}</h2>
              <p>{homeMeta.quickHelpSubtitle}</p>
            </div>
            <div className="quick-help-grid">
              {homeMeta.quickActions.map((action) => (
                <Link key={action.title} href={action.href} className="quick-help-card">
                  <h3>{action.title}</h3>
                  <p>{action.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-featured" aria-labelledby="home-featured-heading">
        <div className="page-shell">
          <div className="section-head home-featured-head">
            <h2 id="home-featured-heading">{subscribeMeta.featuredTitle}</h2>
            <p className="featured-intro">{subscribeMeta.featuredSubtitle}</p>
          </div>
          <article className="featured-card">
            <div className="featured-media">
              <span className="featured-ribbon">{subscribeMeta.featuredRibbon}</span>
              <SafeImage src={featuredPet.imageUrl} alt={featuredPet.name} />
            </div>
            <div className="featured-body">
              <h3>{featuredPet.name}</h3>
              <p className="featured-meta">
                {locale === "ru" ? featuredPet.breedRu : featuredPet.breedEn} • {featuredPet.ageYears}{" "}
                {dict.animals.years}
              </p>
              <p className="featured-lead">
                {locale === "ru"
                  ? "Спокойный и контактный питомец, хорошо адаптируется в домашней среде."
                  : "Calm and social pet with great home adaptation potential."}
              </p>
              <div className="health-badges featured-health">
                <span>✓ {locale === "ru" ? "Привит" : "Vaccinated"}</span>
                <span>✓ {locale === "ru" ? "Стерилизован" : "Sterilized"}</span>
                <span>✓ {locale === "ru" ? "Готов к дому" : "Ready for home"}</span>
              </div>
              <Link
                href={`/animals${animalsUtm}`}
                className="btn btn-primary featured-cta"
                data-analytics="home_featured_meet_pet"
              >
                {homeMeta.meetPet}
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="home-section home-picker">
        <div className="page-shell">
          <div className="section-head">
            <h2>{homeMeta.pickerTitle}</h2>
            <p>{homeMeta.pickerSubtitle}</p>
          </div>
          <form className="picker-form" action="/animals" method="get">
            <input type="hidden" name="lang" value={locale} />
            <input type="hidden" name="utm_source" value="home" />
            <input type="hidden" name="utm_medium" value="picker" />
            <input type="hidden" name="utm_campaign" value="match" />
            <label>
              {homeMeta.pickerType}
              <select name="kind" defaultValue="all">
                <option value="all">{dict.animals.all}</option>
                <option value="cat">{dict.animals.cats}</option>
                <option value="dog">{dict.animals.dogs}</option>
              </select>
            </label>
            <label>
              {homeMeta.pickerAge}
              <select name="age" defaultValue="any">
                <option value="any">{locale === "ru" ? "Любой" : "Any"}</option>
                <option value="young">{locale === "ru" ? "До 2 лет" : "Up to 2 years"}</option>
                <option value="adult">{locale === "ru" ? "2-5 лет" : "2-5 years"}</option>
                <option value="senior">{locale === "ru" ? "Старше 5 лет" : "5+ years"}</option>
              </select>
            </label>
            <label>
              {homeMeta.pickerTemper}
              <select name="temper" defaultValue="any">
                <option value="any">{locale === "ru" ? "Любой" : "Any"}</option>
                <option value="calm">{locale === "ru" ? "Спокойный" : "Calm"}</option>
                <option value="active">{locale === "ru" ? "Активный" : "Active"}</option>
                <option value="social">{locale === "ru" ? "Контактный" : "Social"}</option>
              </select>
            </label>
            <button type="submit" className="btn btn-primary" data-analytics="home_picker_submit">
              {homeMeta.pickerFind}
            </button>
          </form>
        </div>
      </section>

      <section className="home-section home-readiness home-section-alt">
        <div className="page-shell">
          <div className="section-head">
            <h2>{dict.homeExtra.readinessTitle}</h2>
            <p>{dict.homeExtra.readinessSubtitle}</p>
          </div>
          <ul className="readiness-list">
            {dict.homeExtra.readinessItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link href={`/adoption${langQuery}`} className="btn btn-primary readiness-cta">
            {dict.homeExtra.readinessCta}
          </Link>
        </div>
      </section>

      <HomeVkNews title={homeMeta.vkTitle} subtitle={homeMeta.vkSubtitle} posts={homeMeta.vkPosts} />

      <section className="home-section home-section-alt">
        <div className="page-shell two-col-home">
          <div>
            <div className="section-head">
              <h2>{subscribeMeta.adoptionHowTitle}</h2>
            </div>
            <ol className="adoption-steps">
              {adoptionSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <div className="section-head">
              <h2>{subscribeMeta.faqTitle}</h2>
            </div>
            <div className="mini-faq">
              {homeFaq.map((item) => (
                <details key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-stories-carousel">
        <div className="page-shell">
          <div className="section-head">
            <h2>{homeMeta.storiesTitle}</h2>
            <p>{homeMeta.storiesSubtitle}</p>
          </div>
          <div className="stories-row" role="region" aria-label={homeMeta.storiesTitle}>
            {dict.stories.items.map((story) => (
              <article key={story.name} className="story-slide">
                <Image
                  src={story.image}
                  alt={story.pet}
                  width={720}
                  height={480}
                  sizes="(max-width: 720px) 85vw, 320px"
                  loading="lazy"
                />
                <div className="story-slide-body">
                  <h3>{story.name}</h3>
                  <p>{story.pet}</p>
                  <p>{story.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-testimonials">
        <div className="page-shell">
          <div className="section-head">
            <h2>{dict.homeExtra.testimonialsTitle}</h2>
            <p>{dict.homeExtra.testimonialsSubtitle}</p>
          </div>
          <div className="testimonials-grid">
            {dict.homeExtra.testimonials.map((t) => (
              <blockquote key={t.author} className="testimonial-card">
                <p>“{t.quote}”</p>
                <footer>
                  <cite>{t.author}</cite>
                  <span className="testimonial-context">{t.context}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-subscribe">
        <div className="page-shell">
          <div className="subscribe-card">
            <h2>{subscribeMeta.subscribeTitle}</h2>
            <p>{subscribeMeta.subscribeText}</p>
            <form>
              <input type="email" placeholder={subscribeMeta.emailPlaceholder} />
              <button type="button" className="btn btn-primary">
                {subscribeMeta.subscribeBtn}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="home-section home-video home-section-alt">
        <div className="page-shell">
          <div className="section-head">
            <h2>{dict.homeExtra.videoTitle}</h2>
            <p>{dict.homeExtra.videoSubtitle}</p>
          </div>
          <div className="video-embed-shell">
            <iframe
              title={dict.homeExtra.videoTitle}
              src={`https://www.youtube-nocookie.com/embed/${demoShelterVideoId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <p className="video-caption">{dict.homeExtra.videoCaption}</p>
          <p className="video-transcript-note">
            <Link href={`/adoption${langQuery}`}>{dict.homeExtra.videoTranscriptNote}</Link>
          </p>
        </div>
      </section>

      <section className="home-section home-section-alt">
        <div className="page-shell two-col-home">
          <article className="fundraiser-card">
            <h2>{subscribeMeta.urgentFundTitle}</h2>
            <p>{subscribeMeta.urgentFundText}</p>
            <div className="fund-amounts">
              <strong>{locale === "ru" ? "Собрано: 184 000 ₽" : "Raised: $2,150"}</strong>
              <span>{locale === "ru" ? "Цель: 250 000 ₽" : "Goal: $3,200"}</span>
            </div>
            <div className="fund-progress" aria-hidden>
              <span style={{ width: "74%" }} />
            </div>
            <Link
              href={`/trust${helpUtm}`}
              className="btn btn-primary btn-compact"
              data-analytics="home_fundraiser_help"
            >
              {subscribeMeta.alertBtn}
            </Link>
          </article>

          <article className="calc-card">
            <h2>{subscribeMeta.calculatorTitle}</h2>
            <ul>
              {subscribeMeta.calculatorRows.map((row) => (
                <li key={row}>{row}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="home-section home-contact-bar">
        <div className="page-shell contact-bar-grid">
          <div>
            <h2>{dict.homeExtra.contactBarTitle}</h2>
            <p className="contact-bar-phone">
              <a href={`tel:${siteContacts.phoneTel}`}>{siteContacts.phoneDisplay}</a>
            </p>
            <p className="contact-bar-email">
              <a href={`mailto:${siteContacts.email}`}>{siteContacts.email}</a>
            </p>
            <p className="contact-bar-address">
              {locale === "ru" ? siteContacts.addressRu : siteContacts.addressEn}
            </p>
          </div>
          <div className="contact-bar-aside">
            <p>{dict.homeExtra.contactBarMessengers}</p>
            <p>{dict.homeExtra.contactBarHours}</p>
            <Link href={`/contact${langQuery}`} className="btn btn-primary">
              {dict.homeExtra.contactBarCta}
            </Link>
          </div>
        </div>
      </section>

      <div className="mobile-sticky-cta">
        <Link href={`/animals${animalsUtm}`} className="btn btn-primary" data-analytics="mobile_cta_adopt">
          {locale === "ru" ? "Взять питомца" : "Adopt"}
        </Link>
        <Link href={`/help${helpUtm}`} className="btn btn-secondary" data-analytics="mobile_cta_help">
          {locale === "ru" ? "Помочь приюту" : "Help shelter"}
        </Link>
      </div>

      <div className="sticky-fund-progress" aria-hidden>
        <span>{locale === "ru" ? "Сбор: 74%" : "Fundraiser: 74%"}</span>
        <div className="sticky-fund-bar">
          <i />
        </div>
      </div>

      <Footer dict={dict} locale={locale} />
    </main>
  );
}
