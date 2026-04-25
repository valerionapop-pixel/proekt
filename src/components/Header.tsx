"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Dictionary, Locale } from "@/i18n/translations";
import { LanguageSwitcher } from "./LanguageSwitcher";

type HeaderProps = {
  locale: Locale;
  dict: Dictionary;
};

const BRAND_LOGO_SIZE = 104;

export function Header({ locale, dict }: HeaderProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const langValue = searchParams.get("lang") ?? locale;
  const withLang = (path: string) => `${path}?lang=${langValue}`;

  const [menuOpen, setMenuOpen] = useState(false);
  const [loadedThumbs, setLoadedThumbs] = useState<Record<string, boolean>>({});
  const [failedThumbs, setFailedThumbs] = useState<Record<string, boolean>>({});
  const drawerId = useId();
  const navRef = useRef<HTMLElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  useEffect(() => {
    const body = document.body;
    const prevOverflow = body.style.overflow;

    if (menuOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = prevOverflow;
    }

    return () => {
      body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen || !navRef.current) return;

    const nav = navRef.current;
    const menuButton = menuButtonRef.current;
    const selectors =
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusable = Array.from(nav.querySelectorAll<HTMLElement>(selectors)).filter(
      (el) => !el.hasAttribute("disabled")
    );

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || focusable.length === 0) return;

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
        return;
      }

      if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    nav.addEventListener("keydown", onKeyDown);

    return () => {
      nav.removeEventListener("keydown", onKeyDown);
      menuButton?.focus();
    };
  }, [menuOpen]);

  const navItems = [
    {
      href: withLang("/about"),
      label: dict.nav.about,
      image: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=320&q=80",
      thumbClassName: "thumb-about"
    },
    {
      href: withLang("/animals"),
      label: dict.nav.animals,
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=320&q=80",
      thumbClassName: "thumb-animals"
    },
    {
      href: withLang("/adoption"),
      label: dict.nav.adoption,
      image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=320&q=80",
      thumbClassName: "thumb-adoption"
    },
    {
      href: withLang("/help"),
      label: dict.nav.help,
      image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?auto=format&fit=crop&w=320&q=80",
      thumbClassName: "thumb-help"
    },
    {
      href: withLang("/stories"),
      label: dict.nav.stories,
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=320&q=80",
      thumbClassName: "thumb-stories"
    },
    {
      href: withLang("/faq"),
      label: dict.nav.faq,
      image: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=320&q=80",
      thumbClassName: "thumb-faq"
    },
    {
      href: withLang("/contact"),
      label: dict.nav.contact,
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=320&q=80",
      thumbClassName: "thumb-contact"
    },
    {
      href: withLang("/trust"),
      label: dict.nav.trust,
      image: "https://images.unsplash.com/photo-1472491235688-bdc81a63246e?auto=format&fit=crop&w=320&q=80",
      thumbClassName: "thumb-trust"
    },
    {
      href: withLang("/privacy"),
      label: dict.nav.privacy,
      image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=320&q=80",
      thumbClassName: "thumb-privacy"
    }
  ];

  return (
    <>
      <header className="site-header">
        <div className="header-spacer" aria-hidden />

        <Link href={withLang("/")} className="brand" aria-label={dict.brandName}>
          <div className="brand-stack">
            <Image
              src="/images/pawka-logo-light.svg"
              alt=""
              width={BRAND_LOGO_SIZE}
              height={BRAND_LOGO_SIZE}
              priority
            />
            <div className="brand-text">
              <span className="brand-primary">{dict.brandName}</span>
              <span className="brand-tagline">{dict.brandTagline}</span>
            </div>
          </div>
        </Link>

        <div className="header-actions">
          <LanguageSwitcher locale={locale} />
          <button
            ref={menuButtonRef}
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls={drawerId}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="visually-hidden">
              {menuOpen ? dict.nav.menuClose : dict.nav.menuOpen}
            </span>
            <span className="menu-toggle-icon" aria-hidden>
              {menuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
            </span>
          </button>
        </div>
      </header>

      <nav
        ref={navRef}
        id={drawerId}
        className={`nav-drawer${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className={`nav-drawer-backdrop${menuOpen ? " is-open" : ""}`}
          onClick={closeMenu}
          aria-label={dict.nav.menuClose}
          tabIndex={menuOpen ? 0 : -1}
        />
        <ul className="nav-drawer-list">
          {navItems.map(({ href, label, image, thumbClassName }) => {
            const targetPath = href.split("?")[0];
            const isActive = pathname === targetPath;
            const thumbLoaded = loadedThumbs[href];
            const thumbFailed = failedThumbs[href];

            return (
            <li key={href}>
              <Link
                href={href}
                onClick={closeMenu}
                className={`nav-drawer-link${isActive ? " is-active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                <span className="nav-drawer-label">{label}</span>
                <span
                  className={`nav-drawer-thumb${thumbLoaded ? "" : " is-loading"}${
                    thumbFailed ? " is-fallback" : ""
                  }`}
                  aria-hidden
                >
                  {!thumbFailed ? (
                    <Image
                      src={image}
                      alt=""
                      width={184}
                      height={84}
                      sizes="92px"
                      loading="lazy"
                      className={thumbClassName}
                      onLoad={() =>
                        setLoadedThumbs((prev) => ({ ...prev, [href]: true }))
                      }
                      onError={() =>
                        setFailedThumbs((prev) => ({ ...prev, [href]: true }))
                      }
                    />
                  ) : null}
                  {thumbFailed ? <span className="nav-drawer-thumb-fallback">🐾</span> : null}
                </span>
              </Link>
            </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
