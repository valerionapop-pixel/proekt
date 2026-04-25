import Link from "next/link";
import { SiOdnoklassniki, SiTelegram, SiVk } from "react-icons/si";
import { siteContacts } from "@/data/site";
import { Dictionary, Locale } from "@/i18n/translations";

type FooterProps = {
  dict: Dictionary;
  locale: Locale;
};

export function Footer({ dict, locale }: FooterProps) {
  const langQuery = `?lang=${locale}`;

  return (
    <footer className="site-footer">
      <div className="social-links">
        <Link href="#" aria-label="Telegram">
          <SiTelegram size={18} aria-hidden />
        </Link>
        <Link href="#" aria-label="VK">
          <SiVk size={18} aria-hidden />
        </Link>
        <Link href="#" aria-label="Odnoklassniki">
          <SiOdnoklassniki size={18} aria-hidden />
        </Link>
      </div>

      <div className="footer-links">
        <p className="footer-links-title">{dict.footer.quickLinksTitle}</p>
        <div className="footer-links-grid">
          <Link href={`/adoption${langQuery}`}>{dict.footer.linkAdoption}</Link>
          <Link href={`/help${langQuery}`}>{dict.footer.linkHelp}</Link>
          <Link href={`/stories${langQuery}`}>{dict.footer.linkStories}</Link>
          <Link href={`/faq${langQuery}`}>{dict.footer.linkFaq}</Link>
          <Link href={`/contact${langQuery}`}>{dict.footer.linkContact}</Link>
          <Link href={`/trust${langQuery}`}>{dict.footer.linkTrust}</Link>
          <Link href={`/privacy${langQuery}`}>{dict.footer.linkPrivacy}</Link>
        </div>
      </div>

      <div className="footer-contacts">
        <p>
          <strong>{dict.footer.phoneLabel}:</strong> {siteContacts.phoneDisplay}
        </p>
        <p>
          <strong>{dict.footer.addressLabel}:</strong>{" "}
          {locale === "ru" ? siteContacts.addressRu : siteContacts.addressEn}
        </p>
        <p>
          <strong>{dict.footer.emailLabel}:</strong> {siteContacts.email}
        </p>
      </div>

      <p className="footer-rights">
        {new Date().getFullYear()} Pawka. {dict.footer.rights}
      </p>
    </footer>
  );
}
