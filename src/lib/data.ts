export const model = {
  name: "Sophia Chukwudinma",
  fullName: "Sophia Adaife Chukwudinma",
  firstName: "Sophia",
  role: "Model · Dancer · Actor",
  location: "Delhi, India",
  intro:
    "Model, dancer and actor with over two years in the industry — face, e-commerce, editorial, creative, fashion, glamour and bold-concept work.",
};

/** Sophia's hero portrait — studio shot, in /public/photos */
export const heroImage = "/photos/hero-studio.jpg";

/** Big-number cards under the hero, template-style */
export const statCards: { label: string; value: string }[] = [
  { label: "Height", value: "5′11″" },
  { label: "Measurements", value: "39·30·42" },
  { label: "Age", value: "22" },
  { label: "Years experience", value: "2+" },
];

/** Secondary stats — spec row under the cards */
export const statSpecs: { label: string; value: string }[] = [
  { label: "Shoe", value: "EU 42" },
  { label: "Hair", value: "Dark brown" },
  { label: "Eyes", value: "Black" },
  { label: "Based in", value: "Delhi" },
];

export const trustStrip = {
  left: "Model · Dancer · Actor — brands, editorial and film",
};

export type Work = {
  slug: string;
  /** cover photo in /public/photos */
  src: string;
  category: string;
  title: string;
  client: string;
  date: string;
  location: string;
  description: string;
  credits: { role: string; name: string }[];
  /** detail-page gallery photos in /public/photos */
  gallery: string[];
};

export const works: Work[] = [
  {
    slug: "gilded",
    src: "/photos/studio-01.jpg",
    category: "Editorial",
    title: "Gilded",
    client: "Studio editorial",
    date: "2025",
    location: "Delhi",
    description:
      "A studio series in black and gold — sculptural poses, golden braids and hard rim light. Shot as a three-look editorial in a single session.",
    credits: [{ role: "Full credits", name: "available on request" }],
    gallery: ["/photos/studio-02.jpg", "/photos/studio-03.jpg"],
  },
  {
    slug: "sapphire",
    src: "/photos/lehenga-01.jpg",
    category: "Fashion",
    title: "Sapphire",
    client: "Lehenga series",
    date: "Aug 2024",
    location: "Delhi",
    description:
      "Navy velvet and silver zardozi in motion — a lehenga story shot through stairwells and corridors, dupatta mid-flight.",
    credits: [{ role: "Full credits", name: "available on request" }],
    gallery: ["/photos/lehenga-02.jpg", "/photos/lehenga-03.jpg"],
  },
  {
    slug: "after-hours",
    src: "/photos/night-01.jpg",
    category: "Bold concept",
    title: "After Hours",
    client: "Night editorial",
    date: "Oct 2024",
    location: "Delhi",
    description:
      "Window light and long shadows in an empty hotel room — a bold, quiet editorial about the hour the city goes still.",
    credits: [{ role: "Full credits", name: "available on request" }],
    gallery: ["/photos/night-02.jpg"],
  },
  {
    slug: "blue-room",
    src: "/photos/blueroom-01.jpg",
    category: "Campaign",
    title: "The Blue Room",
    client: "Streetwear campaign",
    date: "Apr 2025",
    location: "Delhi",
    description:
      "An oversized-tee streetwear drop shot in a vintage parlour — chesterfields, chandeliers and gramophones against graphic colour.",
    credits: [{ role: "Full credits", name: "available on request" }],
    gallery: ["/photos/blueroom-02.jpg"],
  },
  {
    slug: "on-set",
    src: "/photos/onset-01.jpg",
    category: "Film",
    title: "On Set",
    client: "Film production",
    date: "Jun 2025",
    location: "Hauz Khas, Delhi",
    description:
      "Night shoot on the streets of Hauz Khas — screen work in front of the camera, acting since a young age and at home on a working set.",
    credits: [
      { role: "Location", name: "Hauz Khas, Delhi" },
      { role: "Showreel", name: "available on request" },
    ],
    gallery: ["/photos/onset-02.jpg"],
  },
];

export function getWork(slug: string) {
  return works.find((w) => w.slug === slug);
}

export const digitals: { src: string; label: string }[] = [
  { src: "/sophia-hero.jpg", label: "Front" },
  { src: "/photos/daylight-01.jpg", label: "Daylight" },
  { src: "/photos/face-01.webp", label: "Face" },
  { src: "/photos/beauty-01.jpg", label: "Beauty" },
];

export const pressIntro =
  "Confidence, versatility and passion — carried across face, fashion and glamour modeling, brand movement work, and film.";

export type PressRow = {
  title: string;
  detail: string;
  pill: string;
  href?: string;
};

export const pressRows: PressRow[] = [
  { title: "Max Clothing", detail: "Dancer — brand campaigns", pill: "Brand work" },
  { title: "Film productions", detail: "Screen performances — acting since a young age", pill: "Actor" },
  { title: "Editorial & creative shoots", detail: "Face, fashion, glamour and bold concept", pill: "2+ years" },
  { title: "E-commerce", detail: "Catalogue, lookbook and campaign work", pill: "Ongoing" },
  { title: "Dance", detail: "Trained performer — stage and commercial", pill: "Performer" },
];

/** Sophia's disciplines — shown as informational cards */
export const disciplines: { title: string; desc: string }[] = [
  {
    title: "Modeling",
    desc: "Face · e-commerce · editorial · fashion · glamour · bold concept",
  },
  {
    title: "Dance & movement",
    desc: "Brand campaigns and performances — previously with Max Clothing",
  },
  {
    title: "Film & acting",
    desc: "Screen roles — performing since a young age",
  },
];
