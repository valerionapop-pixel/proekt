export type AnimalKind = "cat" | "dog";

export type AnimalCard = {
  id: string;
  name: string;
  kind: AnimalKind;
  breedEn: string;
  breedRu: string;
  ageYears: number;
  vaccinations: string[];
  imageUrl: string;
};

const coreVaccines = [
  "Rabies",
  "DHPPi",
  "Leptospirosis",
  "Bordetella",
  "Panleukopenia"
];

export const animals: AnimalCard[] = [
  {
    id: "cat-1",
    name: "Mira",
    kind: "cat",
    breedEn: "Siberian",
    breedRu: "Сибирская",
    ageYears: 2,
    vaccinations: [coreVaccines[0], coreVaccines[4]],
    imageUrl: "https://cataas.com/cat?width=600&height=420&id=1"
  },
  {
    id: "cat-2",
    name: "Toffee",
    kind: "cat",
    breedEn: "British Shorthair",
    breedRu: "Британская короткошерстная",
    ageYears: 3,
    vaccinations: [coreVaccines[0], coreVaccines[4]],
    imageUrl: "https://cataas.com/cat?width=600&height=420&id=2"
  },
  {
    id: "cat-3",
    name: "Luna",
    kind: "cat",
    breedEn: "Maine Coon",
    breedRu: "Мейн-кун",
    ageYears: 4,
    vaccinations: [coreVaccines[0], coreVaccines[4]],
    imageUrl: "https://cataas.com/cat?width=600&height=420&id=3"
  },
  {
    id: "cat-4",
    name: "Nika",
    kind: "cat",
    breedEn: "Scottish Fold",
    breedRu: "Шотландская вислоухая",
    ageYears: 1,
    vaccinations: [coreVaccines[0], coreVaccines[4]],
    imageUrl: "https://cataas.com/cat?width=600&height=420&id=4"
  },
  {
    id: "cat-5",
    name: "Busya",
    kind: "cat",
    breedEn: "Russian Blue",
    breedRu: "Русская голубая",
    ageYears: 2,
    vaccinations: [coreVaccines[0], coreVaccines[4]],
    imageUrl: "https://cataas.com/cat?width=600&height=420&id=5"
  },
  {
    id: "cat-6",
    name: "Vesta",
    kind: "cat",
    breedEn: "Bengal",
    breedRu: "Бенгальская",
    ageYears: 3,
    vaccinations: [coreVaccines[0], coreVaccines[4]],
    imageUrl: "https://cataas.com/cat?width=600&height=420&id=6"
  },
  {
    id: "cat-7",
    name: "Pearl",
    kind: "cat",
    breedEn: "Oriental",
    breedRu: "Ориентальная",
    ageYears: 5,
    vaccinations: [coreVaccines[0], coreVaccines[4]],
    imageUrl: "https://cataas.com/cat?width=600&height=420&id=7"
  },
  {
    id: "cat-8",
    name: "Sima",
    kind: "cat",
    breedEn: "Norwegian Forest",
    breedRu: "Норвежская лесная",
    ageYears: 2,
    vaccinations: [coreVaccines[0], coreVaccines[4]],
    imageUrl: "https://cataas.com/cat?width=600&height=420&id=8"
  },
  {
    id: "cat-9",
    name: "Roxy",
    kind: "cat",
    breedEn: "Abyssinian",
    breedRu: "Абиссинская",
    ageYears: 1,
    vaccinations: [coreVaccines[0], coreVaccines[4]],
    imageUrl: "https://cataas.com/cat?width=600&height=420&id=9"
  },
  {
    id: "cat-10",
    name: "Loki",
    kind: "cat",
    breedEn: "European Shorthair",
    breedRu: "Европейская короткошерстная",
    ageYears: 6,
    vaccinations: [coreVaccines[0], coreVaccines[4]],
    imageUrl: "https://cataas.com/cat?width=600&height=420&id=10"
  },
  {
    id: "cat-11",
    name: "Astra",
    kind: "cat",
    breedEn: "Turkish Angora",
    breedRu: "Турецкая ангора",
    ageYears: 3,
    vaccinations: [coreVaccines[0], coreVaccines[4]],
    imageUrl: "https://cataas.com/cat?width=600&height=420&id=11"
  },
  {
    id: "dog-1",
    name: "Archi",
    kind: "dog",
    breedEn: "Labrador Retriever",
    breedRu: "Лабрадор-ретривер",
    ageYears: 2,
    vaccinations: [coreVaccines[0], coreVaccines[1], coreVaccines[2], coreVaccines[3]],
    imageUrl: "https://placedog.net/600/420?id=21"
  },
  {
    id: "dog-2",
    name: "Gerda",
    kind: "dog",
    breedEn: "German Shepherd",
    breedRu: "Немецкая овчарка",
    ageYears: 4,
    vaccinations: [coreVaccines[0], coreVaccines[1], coreVaccines[2]],
    imageUrl: "https://placedog.net/600/420?id=22"
  },
  {
    id: "dog-3",
    name: "Marty",
    kind: "dog",
    breedEn: "Beagle",
    breedRu: "Бигль",
    ageYears: 3,
    vaccinations: [coreVaccines[0], coreVaccines[1], coreVaccines[3]],
    imageUrl: "https://placedog.net/600/420?id=23"
  },
  {
    id: "dog-4",
    name: "Rina",
    kind: "dog",
    breedEn: "Corgi",
    breedRu: "Корги",
    ageYears: 2,
    vaccinations: [coreVaccines[0], coreVaccines[1], coreVaccines[2]],
    imageUrl: "https://placedog.net/600/420?id=24"
  },
  {
    id: "dog-5",
    name: "Skye",
    kind: "dog",
    breedEn: "Husky",
    breedRu: "Хаски",
    ageYears: 5,
    vaccinations: [coreVaccines[0], coreVaccines[1], coreVaccines[2], coreVaccines[3]],
    imageUrl: "https://placedog.net/600/420?id=25"
  },
  {
    id: "dog-6",
    name: "Bailey",
    kind: "dog",
    breedEn: "Golden Retriever",
    breedRu: "Золотистый ретривер",
    ageYears: 1,
    vaccinations: [coreVaccines[0], coreVaccines[1], coreVaccines[3]],
    imageUrl: "https://placedog.net/600/420?id=26"
  },
  {
    id: "dog-7",
    name: "Troy",
    kind: "dog",
    breedEn: "Dalmatian",
    breedRu: "Далматин",
    ageYears: 3,
    vaccinations: [coreVaccines[0], coreVaccines[1], coreVaccines[2]],
    imageUrl: "https://placedog.net/600/420?id=27"
  },
  {
    id: "dog-8",
    name: "Dexter",
    kind: "dog",
    breedEn: "Border Collie",
    breedRu: "Бордер-колли",
    ageYears: 4,
    vaccinations: [coreVaccines[0], coreVaccines[1], coreVaccines[2], coreVaccines[3]],
    imageUrl: "https://placedog.net/600/420?id=28"
  },
  {
    id: "dog-9",
    name: "Molly",
    kind: "dog",
    breedEn: "Shiba Inu",
    breedRu: "Сиба-ину",
    ageYears: 2,
    vaccinations: [coreVaccines[0], coreVaccines[1], coreVaccines[2]],
    imageUrl: "https://placedog.net/600/420?id=29"
  },
  {
    id: "dog-10",
    name: "Rocky",
    kind: "dog",
    breedEn: "Boxer",
    breedRu: "Боксёр",
    ageYears: 6,
    vaccinations: [coreVaccines[0], coreVaccines[1], coreVaccines[3]],
    imageUrl: "https://placedog.net/600/420?id=30"
  },
  {
    id: "dog-11",
    name: "Mika",
    kind: "dog",
    breedEn: "Samoyed",
    breedRu: "Самоед",
    ageYears: 3,
    vaccinations: [coreVaccines[0], coreVaccines[1], coreVaccines[2]],
    imageUrl: "https://placedog.net/600/420?id=31"
  },
  {
    id: "dog-12",
    name: "Oscar",
    kind: "dog",
    breedEn: "Mixed Breed",
    breedRu: "Метис",
    ageYears: 2,
    vaccinations: [coreVaccines[0], coreVaccines[1], coreVaccines[2], coreVaccines[3]],
    imageUrl: "https://placedog.net/600/420?id=32"
  }
];
