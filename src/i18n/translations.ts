export type Locale = "en" | "ru";

export type Dictionary = {
  brandName: string;
  brandTagline: string;
  nav: {
    about: string;
    animals: string;
    adoption: string;
    help: string;
    stories: string;
    faq: string;
    contact: string;
    trust: string;
    privacy: string;
    menuOpen: string;
    menuClose: string;
  };
  home: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    formTitle: string;
    formDescription: string;
    namePlaceholder: string;
    cityPlaceholder: string;
    petTypePlaceholder: string;
    phonePlaceholder: string;
    submitLabel: string;
    consentText: string;
    exploreTitle: string;
    exploreSubtitle: string;
  };
  adoption: {
    title: string;
    intro: string;
    stepsTitle: string;
    steps: string[];
    requirementsTitle: string;
    requirements: string[];
    trialTitle: string;
    trialText: string;
  };
  help: {
    title: string;
    intro: string;
    volunteerTitle: string;
    volunteerText: string;
    fosterTitle: string;
    fosterText: string;
    transportTitle: string;
    transportText: string;
    donationsTitle: string;
    donationsText: string;
    partnersTitle: string;
    partnersText: string;
  };
  stories: {
    title: string;
    intro: string;
    items: { name: string; pet: string; text: string; image: string }[];
  };
  faq: {
    title: string;
    intro: string;
    items: { q: string; a: string }[];
  };
  contact: {
    title: string;
    intro: string;
    hoursTitle: string;
    hoursText: string;
    formTitle: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    note: string;
  };
  trust: {
    title: string;
    intro: string;
    orgTitle: string;
    orgText: string;
    transparencyTitle: string;
    transparencyList: string[];
    animalCareTitle: string;
    animalCareList: string[];
  };
  privacy: {
    title: string;
    updated: string;
    sections: { title: string; body: string }[];
  };
  about: {
    title: string;
    missionTitle: string;
    missionText: string;
    historyTitle: string;
    historyText: string;
    valuesTitle: string;
    valuesList: string[];
    helpTitle: string;
    helpText: string;
  };
  animals: {
    title: string;
    subtitle: string;
    all: string;
    cats: string;
    dogs: string;
    breed: string;
    age: string;
    vaccinations: string;
    years: string;
  };
  footer: {
    phoneLabel: string;
    addressLabel: string;
    emailLabel: string;
    rights: string;
    quickLinksTitle: string;
    linkAdoption: string;
    linkHelp: string;
    linkStories: string;
    linkFaq: string;
    linkContact: string;
    linkTrust: string;
    linkPrivacy: string;
  };
  homeExtra: {
    testimonialsTitle: string;
    testimonialsSubtitle: string;
    testimonials: { quote: string; author: string; context: string }[];
    needsTitle: string;
    needsSubtitle: string;
    needs: { label: string; hint: string; href: "help" | "animals" | "trust" }[];
    partnersTitle: string;
    partnersCta: string;
    partners: { name: string; abbr: string }[];
    legalTeaser: string;
    readinessTitle: string;
    readinessSubtitle: string;
    readinessItems: string[];
    readinessCta: string;
    spotlightBadge: string;
    spotlightTitle: string;
    spotlightDate: string;
    spotlightPlace: string;
    spotlightText: string;
    spotlightCta: string;
    videoTitle: string;
    videoSubtitle: string;
    videoCaption: string;
    videoTranscriptNote: string;
    contactBarTitle: string;
    contactBarMessengers: string;
    contactBarHours: string;
    contactBarCta: string;
    mapTitle: string;
    mapOpen: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    brandName: "Pawka",
    brandTagline: "Pawka Shelter",
    nav: {
      about: "About Us",
      animals: "Our Animals",
      adoption: "Adoption",
      help: "Help",
      stories: "Success Stories",
      faq: "FAQ",
      contact: "Contact",
      trust: "Trust",
      privacy: "Privacy",
      menuOpen: "Open menu",
      menuClose: "Close menu"
    },
    home: {
      title: "A warm home for every rescued tail.",
      subtitle:
        "We care, heal, and help abandoned cats and dogs find loving families.",
      ctaPrimary: "See Our Animals",
      ctaSecondary: "About Shelter",
      formTitle: "Tell us about your future friend",
      formDescription: "Get a free adoption consultation from our team.",
      namePlaceholder: "Your name",
      cityPlaceholder: "Your city",
      petTypePlaceholder: "Cat or dog?",
      phonePlaceholder: "Phone number",
      submitLabel: "Open Consultation",
      consentText: "By clicking the button, you agree with the privacy policy.",
      exploreTitle: "Everything you need to adopt or help",
      exploreSubtitle:
        "Clear steps, honest information, and simple ways to support the shelter."
    },
    adoption: {
      title: "Adoption at Pawka",
      intro:
        "We prioritize safety for animals and families. Adoption is a careful match, not a rush.",
      stepsTitle: "How adoption works",
      steps: [
        "Fill out the short form on the home page or contact us with your preferences.",
        "We schedule a call to answer questions and explain responsibilities.",
        "Meet the pet at the shelter or a supervised walk for dogs.",
        "If it is a good match, we sign an adoption agreement and provide medical records.",
        "We stay in touch during the first weeks to help the pet settle in."
      ],
      requirementsTitle: "What we check",
      requirements: [
        "Stable housing and consent of all adults in the household",
        "Time for walks/training (for dogs) and safe indoor space (for cats)",
        "Agreement to follow veterinary recommendations",
        "No history of animal cruelty or neglect"
      ],
      trialTitle: "Trial period",
      trialText:
        "We can agree on a supervised trial stay when it helps both sides feel confident. Conditions depend on the animal’s needs."
    },
    help: {
      title: "Help Pawka without adopting",
      intro:
        "Shelters run on people, logistics, and supplies. Even a few hours a week changes outcomes.",
      volunteerTitle: "Volunteering",
      volunteerText:
        "Cleaning, feeding, socialization, photography, event support — choose what fits your skills.",
      fosterTitle: "Foster care",
      fosterText:
        "Temporary homes free shelter space for emergencies and help shy animals recover faster.",
      transportTitle: "Transport",
      transportText:
        "Trips to the vet, airport pickups for supplies, and moving animals between locations.",
      donationsTitle: "Donations",
      donationsText:
        "Food, carriers, bedding, medicines, and funds for surgeries. We publish periodic needs lists.",
      partnersTitle: "Partnerships",
      partnersText:
        "Veterinary clinics, pet stores, and corporate teams can sponsor events or supply kits."
    },
    stories: {
      title: "Success stories",
      intro: "A few recent families who opened their homes.",
      items: [
        {
          name: "Anna & Mira",
          pet: "Cat Mira",
          text: "Mira was shy for two weeks, then became the queen of the sofa. We are grateful for Pawka’s guidance.",
          image: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=720&q=75"
        },
        {
          name: "Igor & Archi",
          pet: "Dog Archi",
          text: "Archi needed routine and patience. The shelter team helped us build a training plan that worked.",
          image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=720&q=75"
        },
        {
          name: "Elena & Gerda",
          pet: "Dog Gerda",
          text: "Gerda arrived scared of traffic. Now she loves morning walks and neighborhood kids.",
          image: "https://images.unsplash.com/photo-1568572933382-74d440642117?auto=format&fit=crop&w=720&q=75"
        },
        {
          name: "Mark & Toffee",
          pet: "Cat Toffee",
          text: "Toffee used to hide from every sound. In a month, she started greeting guests and sleeping on the windowsill.",
          image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=720&q=75"
        },
        {
          name: "Olga & Marty",
          pet: "Dog Marty",
          text: "Marty had too much energy at first. With routine walks and play sessions, he became calm and focused.",
          image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=720&q=75"
        },
        {
          name: "Denis & Pearl",
          pet: "Cat Pearl",
          text: "Pearl was cautious around people. Step by step, she learned to trust and now follows Denis around the apartment.",
          image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=720&q=75"
        }
      ]
    },
    faq: {
      title: "FAQ",
      intro: "Quick answers to common questions.",
      items: [
        {
          q: "Can I adopt if I rent an apartment?",
          a: "Yes, if your lease allows pets and you can provide a safe environment. We may ask for landlord confirmation."
        },
        {
          q: "Do animals come vaccinated and sterilized?",
          a: "Healthy adults are typically sterilized when medically appropriate. Vaccination status is listed on each profile."
        },
        {
          q: "What if the pet does not fit?",
          a: "We discuss expectations upfront. If a serious mismatch happens, we help find a safe solution for the animal."
        },
        {
          q: "Can I visit without adopting?",
          a: "Yes, by appointment. Visits are scheduled to reduce stress for sensitive animals."
        }
      ]
    },
    contact: {
      title: "Contact",
      intro: "Reach us for adoption questions, volunteering, or partnerships.",
      hoursTitle: "Response hours",
      hoursText: "We reply Mon–Sat, 10:00–18:00 (local time). Urgent cases are triaged separately.",
      formTitle: "Send a message",
      messageLabel: "Message",
      messagePlaceholder: "Tell us what you need help with…",
      submit: "Send (demo)",
      note: "This form is a UI demo — wire it to email/Telegram later."
    },
    trust: {
      title: "Trust & transparency",
      intro:
        "We believe adoption works best when people understand how decisions are made and how resources are used.",
      orgTitle: "Organization (demo details)",
      orgText:
        "Non-profit shelter initiative “Pawka”. Replace this block with your legal entity name, registration number, and bank details.",
      transparencyTitle: "What we publish",
      transparencyList: [
        "Monthly intake/outcome summary (demo)",
        "Major expense categories (food, medicine, vet care)",
        "Adoption agreements templates (on request)"
      ],
      animalCareTitle: "Animal welfare standards",
      animalCareList: [
        "Isolation for newcomers when needed",
        "Veterinary exams before adoption",
        "Behavior assessments for dogs in busy environments"
      ]
    },
    privacy: {
      title: "Privacy policy",
      updated: "Last updated: April 24, 2026",
      sections: [
        {
          title: "What we collect",
          body: "If you submit forms, we may collect your name, city, phone number, and message content."
        },
        {
          title: "Why we collect it",
          body: "To respond to adoption/volunteer requests and coordinate visits."
        },
        {
          title: "How long we keep it",
          body: "Demo site: define your retention policy. Typical range is 6–24 months for inquiries."
        },
        {
          title: "Contact",
          body: "Email hello@pawka-shelter.org for privacy-related requests."
        }
      ]
    },
    about: {
      title: "About Pawka Shelter",
      missionTitle: "Our mission",
      missionText:
        "Pawka is a private non-profit shelter. We rescue street and abandoned pets, provide treatment, socialization, and support adoptions into safe homes.",
      historyTitle: "How it started",
      historyText:
        "The shelter began as a volunteer initiative in 2019 with two foster rooms. Today we host more than 70 animals and run regular city adoption events.",
      valuesTitle: "What we stand for",
      valuesList: [
        "Humane treatment and respect for every life",
        "Transparent rescue and adoption process",
        "Responsible pet ownership education",
        "Long-term support for adopter families"
      ],
      helpTitle: "How you can help",
      helpText:
        "You can adopt a pet, become a volunteer, help with transport, or support us with food and medicine donations."
    },
    animals: {
      title: "Our Animals",
      subtitle: "Meet 23 pets waiting for a loving family.",
      all: "All",
      cats: "Cats",
      dogs: "Dogs",
      breed: "Breed",
      age: "Age",
      vaccinations: "Vaccinations",
      years: "years"
    },
    footer: {
      phoneLabel: "Phone",
      addressLabel: "Address",
      emailLabel: "Email",
      rights: "All rights reserved.",
      quickLinksTitle: "Quick links",
      linkAdoption: "Adoption",
      linkHelp: "Help",
      linkStories: "Success stories",
      linkFaq: "FAQ",
      linkContact: "Contact",
      linkTrust: "Trust",
      linkPrivacy: "Privacy"
    },
    homeExtra: {
      testimonialsTitle: "Adopters say",
      testimonialsSubtitle: "Short notes from families who went through Pawka.",
      testimonials: [
        {
          quote:
            "We were nervous first-time adopters. The team answered every message and helped us prepare the apartment.",
          author: "Kristina L.",
          context: "Adopted a mixed-breed dog, 2025"
        },
        {
          quote:
            "The cat arrived timid; they warned us honestly about timelines. Two months later she rules the bookshelf.",
          author: "Mikhail S.",
          context: "Adopted a senior cat, 2024"
        },
        {
          quote:
            "Clear medical records, no pressure, and practical advice on food and vet visits.",
          author: "Sofia & Dan",
          context: "Fostered, then adopted, 2025"
        },
        {
          quote:
            "Volunteered on photo days — the shelter is clean, calm, and serious about animal welfare.",
          author: "Elvira K.",
          context: "Volunteer since 2023"
        }
      ],
      needsTitle: "Needed right now",
      needsSubtitle: "Concrete items we are collecting this week. Every package frees budget for treatment.",
      needs: [
        {
          label: "Wet food for kittens (pouches)",
          hint: "Drop-off or courier to the shelter",
          href: "help"
        },
        {
          label: "Disposable pads and bandage rolls",
          hint: "See the full list on the Help page",
          href: "help"
        },
        {
          label: "Large transport crates (ISO airline size)",
          hint: "Used in good condition is welcome",
          href: "help"
        },
        {
          label: "Homes for three young dogs from a recent rescue",
          hint: "Browse profiles filtered by urgency",
          href: "animals"
        },
        {
          label: "Monthly donors for the emergency vet fund",
          hint: "Reports on the Trust page",
          href: "trust"
        }
      ],
      partnersTitle: "They stand with us",
      partnersCta: "Partnership details",
      partners: [
        { name: "VetCare Kazan Clinic", abbr: "VC" },
        { name: "ZooPlanet Retail", abbr: "ZP" },
        { name: "Kazan Animal Pharmacy", abbr: "KA" },
        { name: "MetroPrint Studio", abbr: "MP" },
        { name: "SafePaws Transport", abbr: "SP" },
        { name: "Elena Frost Photography", abbr: "EF" }
      ],
      legalTeaser:
        "Demo non-profit initiative «Pawka». Full legal name, INN/OGRN and bank details are published on the Trust page.",
      readinessTitle: "Ready for a pet?",
      readinessSubtitle: "A quick self-check before you book a visit.",
      readinessItems: [
        "All adults in the household agree and no one has a severe allergy you cannot manage.",
        "You can afford food, annual vet visits, and emergencies (or pet insurance).",
        "For dogs: time for walks, training, and toilet breaks every day.",
        "For cats: safe windows, litter box space away from food, and scratching options.",
        "You accept that adaptation can take weeks — patience matters more than «love at first sight».",
        "Renting? Your lease allows pets or you have written landlord consent.",
        "Travel plans: you have a backup carer or boarding option for trips."
      ],
      readinessCta: "Read the full adoption guide",
      spotlightBadge: "Next event",
      spotlightTitle: "Open Shelter Day",
      spotlightDate: "May 12 · 11:00–16:00",
      spotlightPlace: "Pawka Shelter, Kazan",
      spotlightText:
        "Guided tours every hour, calm meet-and-greets for pre-approved visitors, and a short talk on adoption paperwork. Kids welcome; please keep voices low around shy animals.",
      spotlightCta: "Plan your visit",
      videoTitle: "Inside the shelter",
      videoSubtitle: "A short walkthrough (demo clip — replace with your own tour).",
      videoCaption:
        "Placeholder video for layout testing. Swap the embed for your shelter’s YouTube or VK video.",
      videoTranscriptNote: "Prefer text? All steps are also on the Adoption page.",
      contactBarTitle: "Talk to us",
      contactBarMessengers: "Telegram · VK · OK — we call back after your message.",
      contactBarHours: "Mon–Sat, 10:00–18:00 (local). Urgent intake: mark «urgent» in the form.",
      contactBarCta: "Contact form",
      mapTitle: "Map",
      mapOpen: "Open full map"
    }
  },
  ru: {
    brandName: "Лапка",
    brandTagline: "Pawka Shelter",
    nav: {
      about: "О нас",
      animals: "Наши животные",
      adoption: "Пристройство",
      help: "Помощь",
      stories: "Истории",
      faq: "Вопросы",
      contact: "Контакты",
      trust: "Доверие",
      privacy: "Конфиденциальность",
      menuOpen: "Открыть меню",
      menuClose: "Закрыть меню"
    },
    home: {
      title: "Тёплый дом для каждого спасённого хвостика.",
      subtitle:
        "Мы лечим, заботимся и помогаем брошенным кошкам и собакам найти любящую семью.",
      ctaPrimary: "Наши животные",
      ctaSecondary: "О приюте",
      formTitle: "Расскажите о будущем друге",
      formDescription: "Получите бесплатную консультацию по пристройству.",
      namePlaceholder: "Ваше имя",
      cityPlaceholder: "Ваш город",
      petTypePlaceholder: "Кошка или собака?",
      phonePlaceholder: "Номер телефона",
      submitLabel: "Открыть консультацию",
      consentText: "Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.",
      exploreTitle: "Всё, чтобы пристроить или помочь",
      exploreSubtitle:
        "Понятные шаги, честная информация и простые способы поддержать приют."
    },
    adoption: {
      title: "Пристройство в «Лапке»",
      intro:
        "Мы делаем упор на безопасность животного и семьи. Пристройство — это подбор, а не спешка.",
      stepsTitle: "Как проходит пристройство",
      steps: [
        "Заполните короткую форму на главной или напишите нам с пожеланиями.",
        "Созвонимся: ответим на вопросы и расскажем про ответственное содержание.",
        "Знакомство в приюте или выгул под присмотром (для собак).",
        "Если это хорошая пара — оформляем договор и передаём медицинские записи.",
        "На первых неделях остаёмся на связи, чтобы питомцу было легче адаптироваться."
      ],
      requirementsTitle: "Что мы уточняем",
      requirements: [
        "Стабильное жильё и согласие всех взрослых членов семьи",
        "Время на прогулки/дрессировку (собаки) и безопасное место дома (кошки)",
        "Готовность следовать рекомендациям ветеринара",
        "Отсутствие истории жестокого обращения с животными"
      ],
      trialTitle: "Пробный период",
      trialText:
        "При необходимости возможен контролируемый пробный период — условия зависят от состояния и характера животного."
    },
    help: {
      title: "Помощь приюту без пристройства",
      intro:
        "Приют держится на людях, логистике и вещах. Даже несколько часов в неделю реально меняют ситуацию.",
      volunteerTitle: "Волонтёрство",
      volunteerText:
        "Уборка, кормление, социализация, фото, мероприятия — выберите то, что вам по силам.",
      fosterTitle: "Передержка",
      fosterText:
        "Временный дом освобождает место в приюте и помогает пугливым животным быстрее прийти в себя.",
      transportTitle: "Транспорт",
      transportText:
        "Поездки к ветеринару, доставка корма/лекарств, перевозки между локациями.",
      donationsTitle: "Пожертвования",
      donationsText:
        "Корм, переноски, лежанки, лекарства и средства на операции. Мы публикуем списки актуальных нужд.",
      partnersTitle: "Партнёрства",
      partnersText:
        "Клиники, зоомагазины и компании могут спонсировать события или наборы помощи."
    },
    stories: {
      title: "Истории из новых домов",
      intro: "Несколько недавних семей, которые открыли дверь сердца.",
      items: [
        {
          name: "Анна и Мира",
          pet: "Кошка Мира",
          text: "Мира первые две недели пряталась, а потом стала королевой дивана. Спасибо «Лапке» за сопровождение.",
          image: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=720&q=75"
        },
        {
          name: "Игорь и Арчи",
          pet: "Собака Арчи",
          text: "Арчи нуждался в режиме и терпении. Команда приюта помогла выстроить план дрессировки.",
          image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=720&q=75"
        },
        {
          name: "Елена и Герда",
          pet: "Собака Герда",
          text: "Герда боялась транспорта. Теперь любит утренние прогулки и соседских детей.",
          image: "https://images.unsplash.com/photo-1568572933382-74d440642117?auto=format&fit=crop&w=720&q=75"
        },
        {
          name: "Марк и Тоффи",
          pet: "Кошка Тоффи",
          text: "Тоффи раньше пряталась от каждого звука. Через месяц начала встречать гостей и спать на подоконнике.",
          image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=720&q=75"
        },
        {
          name: "Ольга и Марти",
          pet: "Собака Марти",
          text: "У Марти вначале было слишком много энергии. Режим прогулок и игр помог ему стать спокойнее и увереннее.",
          image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=720&q=75"
        },
        {
          name: "Денис и Перл",
          pet: "Кошка Перл",
          text: "Перл настороженно относилась к людям. Постепенно научилась доверять и теперь ходит за Денисом по всей квартире.",
          image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=720&q=75"
        }
      ]
    },
    faq: {
      title: "Частые вопросы",
      intro: "Короткие ответы на самые популярные вопросы.",
      items: [
        {
          q: "Можно ли пристроить, если я снимаю квартиру?",
          a: "Да, если договор позволяет животных и вы можете обеспечить безопасные условия. Иногда попросим подтверждение у арендодателя."
        },
        {
          q: "Животные привиты и стерилизованы?",
          a: "У взрослых животных стерилизация — по медицинским показаниям и плану. Статус прививок указан в карточке."
        },
        {
          q: "Что если питомец не подойдёт?",
          a: "Мы заранее обсуждаем ожидания. Если серьёзное несоответствие — ищем безопасное решение для животного."
        },
        {
          q: "Можно ли приехать просто познакомиться?",
          a: "Да, по записи. Визиты планируются, чтобы не стрессовать чувствительных животных."
        }
      ]
    },
    contact: {
      title: "Контакты",
      intro: "Напишите по вопросам пристройства, волонтёрства или партнёрства.",
      hoursTitle: "Время ответа",
      hoursText: "Отвечаем пн–сб, 10:00–18:00 (местное время). Срочные случае обрабатываем отдельно.",
      formTitle: "Сообщение",
      messageLabel: "Текст",
      messagePlaceholder: "Опишите, чем мы можем помочь…",
      submit: "Отправить (демо)",
      note: "Это демо-форма — позже подключим почту/Telegram."
    },
    trust: {
      title: "Доверие и прозрачность",
      intro:
        "Пристройство работает лучше, когда понятно, как принимаются решения и куда уходят ресурсы.",
      orgTitle: "Организация (демо-данные)",
      orgText:
        "Некоммерческая инициатива приюта «Лапка». Замените блок на реквизиты: юрлицо, ИНН/ОГРН (если есть), расчётный счёт.",
      transparencyTitle: "Что мы публикуем",
      transparencyList: [
        "Ежемесячная сводка приём/исход (демо)",
        "Крупные статьи расходов: корм, лекарства, ветеринария",
        "Шаблоны договоров пристройства (по запросу)"
      ],
      animalCareTitle: "Стандарты содержания",
      animalCareList: [
        "Изоляция новичков при необходимости",
        "Ветосмотр перед передачей в семью",
        "Оценка поведения собак в шумной среде"
      ]
    },
    privacy: {
      title: "Политика конфиденциальности",
      updated: "Обновлено: 24 апреля 2026",
      sections: [
        {
          title: "Какие данные мы собираем",
          body: "Если вы отправляете формы, мы можем получить имя, город, телефон и текст сообщения."
        },
        {
          title: "Зачем это нужно",
          body: "Чтобы ответить на заявку, согласовать визит или волонтёрство."
        },
        {
          title: "Как долго храним",
          body: "На демо-сайте укажите свою политику. Обычно обращения хранят 6–24 месяца."
        },
        {
          title: "Контакты",
          body: "По вопросам данных: hello@pawka-shelter.org"
        }
      ]
    },
    about: {
      title: "О приюте «Лапка»",
      missionTitle: "Наша миссия",
      missionText:
        "«Лапка» — частный некоммерческий приют. Мы спасаем бездомных и оставленных животных, лечим, социализируем и помогаем найти им безопасный дом.",
      historyTitle: "Как всё началось",
      historyText:
        "Приют вырос из волонтёрской инициативы в 2019 году с двух передержек. Сегодня у нас более 70 животных и регулярные городские дни пристройства.",
      valuesTitle: "Наши ценности",
      valuesList: [
        "Гуманное отношение и уважение к каждой жизни",
        "Прозрачный процесс спасения и пристройства",
        "Просвещение по ответственному содержанию",
        "Поддержка семей после усыновления"
      ],
      helpTitle: "Как помочь",
      helpText:
        "Вы можете взять питомца домой, стать волонтёром, помочь с перевозкой или поддержать приют кормом и лекарствами."
    },
    animals: {
      title: "Наши животные",
      subtitle: "Познакомьтесь с 23 питомцами, которые ждут семью.",
      all: "Все",
      cats: "Кошки",
      dogs: "Собаки",
      breed: "Порода",
      age: "Возраст",
      vaccinations: "Прививки",
      years: "лет"
    },
    footer: {
      phoneLabel: "Телефон",
      addressLabel: "Адрес",
      emailLabel: "Почта",
      rights: "Все права защищены.",
      quickLinksTitle: "Быстрые ссылки",
      linkAdoption: "Пристройство",
      linkHelp: "Помощь",
      linkStories: "Истории",
      linkFaq: "Вопросы",
      linkContact: "Контакты",
      linkTrust: "Доверие",
      linkPrivacy: "Конфиденциальность"
    },
    homeExtra: {
      testimonialsTitle: "Что говорят усыновители",
      testimonialsSubtitle: "Короткие отзывы тех, кто прошёл путь вместе с «Лапкой».",
      testimonials: [
        {
          quote:
            "Мы волновались как новички. Команда ответила на каждое сообщение и помогла подготовить квартиру.",
          author: "Кристина Л.",
          context: "Собака метис, 2025"
        },
        {
          quote:
            "Честно предупредили, что кошка будет прятаться. Через два месяца она хозяйка книжной полки.",
          author: "Михаил С.",
          context: "Пожилая кошка, 2024"
        },
        {
          quote:
            "Понятные медкарты, без давления и с практичными советами по корму и ветеринару.",
          author: "София и Дан",
          context: "Сначала передержка, затем пристройство, 2025"
        },
        {
          quote:
            "Волонтерила на фотоднях: чисто, спокойно, серьёзно относятся к благополучию животных.",
          author: "Эльвира К.",
          context: "Волонтёр с 2023 года"
        }
      ],
      needsTitle: "Сейчас нужно",
      needsSubtitle: "Конкретный список на эту неделю. Каждая посылка освобождает бюджет на лечение.",
      needs: [
        {
          label: "Влажный корм для котят (паучи)",
          hint: "Привезти или отправить курьером на адрес приюта",
          href: "help"
        },
        {
          label: "Пелёнки и бинты одноразовые",
          hint: "Полный список — на странице «Помощь»",
          href: "help"
        },
        {
          label: "Большие переноски (авиа-размер)",
          hint: "Б/у в хорошем состоянии приветствуется",
          href: "help"
        },
        {
          label: "Дом для трёх молодых собак после недавнего забора",
          hint: "Смотрите анкеты с отметкой срочности",
          href: "animals"
        },
        {
          label: "Ежемесячные доноры в ветеринарный резерв",
          hint: "Отчёты — на странице «Доверие»",
          href: "trust"
        }
      ],
      partnersTitle: "Нам доверяют",
      partnersCta: "Как стать партнёром",
      partners: [
        { name: "Ветклиника «ВетКаре Казань»", abbr: "ВК" },
        { name: "Сеть ZooPlanet", abbr: "ZP" },
        { name: "Аптека «Казань Зоо»", abbr: "КЗ" },
        { name: "Студия MetroPrint", abbr: "MP" },
        { name: "Перевозки SafePaws", abbr: "SP" },
        { name: "Фотограф Елена Фрост", abbr: "ЕФ" }
      ],
      legalTeaser:
        "Демо-инициатива НКО «Лапка». Полное наименование, ИНН/ОГРН и реквизиты — на странице «Доверие».",
      readinessTitle: "Готовы к питомцу?",
      readinessSubtitle: "Быстрый самоопрос перед записью на визит.",
      readinessItems: [
        "Все взрослые в доме согласны, аллергии нет или она под контролем.",
        "Есть бюджет на корм, профилактику у ветеринара и непредвиденные расходы (или страховка).",
        "Для собак: время на прогулки, дрессировку и туалет несколько раз в день.",
        "Для кошек: безопасные окна, место для лотка подальше от миски, когтеточка.",
        "Вы понимаете, что адаптация может занять недели — важнее терпение, чем «любовь с первого взгляда».",
        "Снимаете жильё? В договоре разрешены животные или есть письмо от арендодателя.",
        "Есть запасной вариант передержки или зоогостиницы на время отъездов."
      ],
      readinessCta: "Полный гид по пристройству",
      spotlightBadge: "Ближайшее событие",
      spotlightTitle: "День открытых дверей",
      spotlightDate: "12 мая · 11:00–16:00",
      spotlightPlace: "Приют «Лапка», Казань",
      spotlightText:
        "Экскурсии каждый час, спокойные знакомства для заранее записавшихся и коротко о документах. Дети добро пожалуйста — просим не повышать голос возле робких животных.",
      spotlightCta: "Как записаться",
      videoTitle: "Как устроен приют",
      videoSubtitle: "Короткая экскурсия (демо-ролик — замените на свой тур).",
      videoCaption:
        "Видео-заглушка для вёрстки. Замените встраивание на ролик приюта на YouTube или ВК.",
      videoTranscriptNote: "Предпочитаете текст? Все шаги есть на странице «Пристройство».",
      contactBarTitle: "Связаться",
      contactBarMessengers: "Telegram · ВКонтакте · Одноклассники — перезвоним после заявки.",
      contactBarHours: "Пн–сб, 10:00–18:00 (местное). Срочный забор: отметьте «срочно» в форме.",
      contactBarCta: "Форма связи",
      mapTitle: "Карта",
      mapOpen: "Открыть карту целиком"
    }
  }
};

export const fallbackLocale: Locale = "en";

export function resolveLocale(lang?: string | null): Locale {
  return lang === "ru" ? "ru" : fallbackLocale;
}
