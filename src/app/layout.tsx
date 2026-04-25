import type { Metadata } from "next";
import { AnalyticsEvents } from "@/components/AnalyticsEvents";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pawka-shelter.example"),
  title: {
    default: "Pawka / Лапка Shelter",
    template: "%s | Pawka / Лапка"
  },
  description:
    "Bilingual shelter website: adoption steps, help options, stories, FAQ, and contact.",
  applicationName: "Pawka Shelter",
  alternates: {
    languages: {
      en: "/?lang=en",
      ru: "/?lang=ru"
    }
  },
  openGraph: {
    type: "website",
    title: "Pawka / Лапка Shelter",
    description:
      "Adopt a pet, volunteer, or support Pawka shelter. Clear information in English and Russian.",
    siteName: "Pawka / Лапка",
    locale: "en_US",
    alternateLocale: ["ru_RU"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pawka / Лапка Shelter",
    description:
      "Adopt a pet, volunteer, or support Pawka shelter. Clear information in English and Russian."
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AnalyticsEvents />
        {children}
      </body>
    </html>
  );
}
