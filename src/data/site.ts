/** Demo site identity — single source for footer, JSON-LD, and contact strips. */
export const siteUrl = "https://pawka-shelter.example";

export const siteContacts = {
  phoneDisplay: "+7 (901) 555-23-11",
  phoneTel: "+79015552311",
  email: "hello@pawka-shelter.org",
  addressEn: "16 Beregovaya St, Kazan",
  addressRu: "Казань, ул. Береговая, 16"
} as const;

/** OpenStreetMap embed (Kazan area, demo). Replace bbox with your coordinates. */
export const mapEmbedUrl =
  "https://www.openstreetmap.org/export/embed.html?bbox=49.086%2C55.772%2C49.132%2C55.802&layer=mapnik&marker=55.787%2C49.109";

/** Demo YouTube embed (replace with a real shelter tour). */
export const demoShelterVideoId = "YE7VzlLtp-4";
