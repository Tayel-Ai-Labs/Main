/**
 * All page copy lives here, in one file, in English.
 *
 * Anything marked TODO is a placeholder waiting on the owner — it is written
 * so the layout holds, not so it ships. Grep for TODO before launch.
 */

export const site = {
  name: "Tayel AI Labs",
  tagline:
    "Connecting learning, research, AI development, and intelligent production within one unified, powerful ecosystem.",
  email: "Labs@tayel.net",
  phones: ["+20 103 887 8057", "+20 109 377 4549"],
  social: {
    facebook: "https://www.facebook.com/people/Tayel-Ai-Labs/61589517705098/",
    instagram: "https://www.instagram.com/tayelailabs/",
    linkedin: "https://eg.linkedin.com/company/tayel-ai-labs",
    youtube: "https://www.youtube.com/@TayelAiLabs",
  },
} as const;

export type Product = {
  slug: string;
  index: string;
  name: string;
  blurb: string;
  status: "live" | "coming-soon";
};

export const products: Product[] = [
  {
    slug: "courses",
    index: "01",
    name: "Courses",
    blurb:
      "AI driven learning with an interactive personal tutor built into every lesson.",
    status: "coming-soon",
  },
  {
    slug: "our-life",
    index: "02",
    name: "OurLife",
    blurb:
      "Next generation fashion studio powered by our Beautiful Machine AI model.",
    status: "coming-soon",
  },
  {
    slug: "research",
    index: "03",
    name: "Ai Research Machine",
    blurb:
      "Empowering researchers with deep data engineering and advanced technical insights.",
    status: "coming-soon",
  },
  {
    slug: "mind",
    index: "04",
    name: "Mind",
    blurb:
      "Accelerating enterprise growth through tailored end to end AI transformation.",
    status: "coming-soon",
  },
];

export type Client = {
  slug: string;
  name: string;
  sector: string;
  /** One sentence. What we actually built, in the client's terms. */
  summary: string;
  /** Live URL, or null while it is not public yet. */
  url: string | null;
  /** Shown as a tag row under the summary. */
  work: string[];
};

export const clients: Client[] = [
  {
    slug: "funzo-coffee",
    name: "Funzo Coffee",
    sector: "Hospitality · Egypt",
    summary:
      "A QR menu the customer reads at the table and the owner updates from a spreadsheet — 151 items, bilingual, no app to install and no dashboard to learn.",
    url: null, // TODO: confirm the public URL before launch
    work: ["QR menu", "Bilingual AR/EN", "Zero-dependency build", "Auto price sync"],
  },
  {
    slug: "ezzat-physics-ai",
    name: "Ezzat Physics AI",
    sector: "Education", // TODO: confirm
    summary:
      "TODO — one sentence from the owner on what we built and who it serves.",
    url: null,
    work: [], // TODO
  },
  {
    slug: "visual-scream-ai",
    name: "Visual Scream AI",
    sector: "Creative", // TODO: confirm
    summary:
      "TODO — one sentence from the owner on what we built and who it serves.",
    url: null,
    work: [], // TODO
  },
];

export const focusAreas = [
  {
    q: "How are you driving AI transformation in Egypt?",
    a: "We are committed to empowering Egypt's digital future by integrating cutting edge AI solutions across all key sectors, driving innovation, infrastructure development, and economic growth nationwide.",
  },
  {
    q: "What is your role in Quantum AI research?",
    a: "We actively explore the intersection of quantum computing and artificial intelligence, leveraging Quantum AI to solve complex computational problems and pave the way for next generation intelligence.",
  },
  {
    q: "Why is Neural Data Compression a key research priority?",
    a: "Neural compression is at the forefront of modern AI research. We focus on optimizing deep learning models and data representation to achieve ultra efficient transmission, storage, and processing at scale.",
  },
  {
    q: "How do you support public AI education and literacy?",
    a: "We believe AI knowledge should be accessible to everyone. Through training programs, open resources, and community initiatives, we aim to democratize AI education and build a skilled talent pool for the future.",
  },
];

export const about = {
  who: {
    title: "Who We Are",
    body: "A team of Egyptian artists, engineers, scientists, and philosophers building the future of AGI.",
  },
  vision: {
    title: "Our Vision & Mission",
    body: "To bridge human creativity, science, and engineering to build the next generation of AGI, from Egypt.",
  },
};
