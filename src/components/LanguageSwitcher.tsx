"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Locale } from "@/i18n/translations";

type LanguageSwitcherProps = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const params = useSearchParams();

  const buildLink = (targetLocale: Locale) => {
    const nextParams = new URLSearchParams(params.toString());
    nextParams.set("lang", targetLocale);
    return `${pathname}?${nextParams.toString()}`;
  };

  return (
    <div className="lang-switcher" aria-label="Language switcher">
      <Link href={buildLink("en")} className={locale === "en" ? "active" : ""}>
        EN
      </Link>
      <span>/</span>
      <Link href={buildLink("ru")} className={locale === "ru" ? "active" : ""}>
        RU
      </Link>
    </div>
  );
}
