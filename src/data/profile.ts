export interface Profile {
  name: string;
  role: string;
  heroSubline: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  languages: string[];
  interests: string[];
  heroBlurb: string;
  metaDescription: string;
}

export const profile: Profile = {
  name: "Paul Vu",
  role: "Software Engineer",
  heroSubline: "Fintech delivery and reliability - AI-first workflow - game programmer on the side",
  location: "Melbourne, VIC, Australia",
  phone: "(+61) 414 066 481",
  email: "paulvu2028@gmail.com",
  linkedin: "https://www.linkedin.com/in/paul-vu-6399561bb/",
  github: "https://github.com/paulvu2028",
  languages: ["English", "Vietnamese"],
  interests: [
    "Indie Game Development",
    "TCGs",
    "Fitness",
    "Tennis",
    "Badminton",
    "PC Building",
    "Marketing",
    "Economics",
  ],
  heroBlurb:
    "Three years delivering high-scale B2B SaaS: mission-critical billing engines and complex data logic for regulated energy and utilities markets across Australia and New Zealand. I work AI-first: agents, tools, and prompt engineering are part of my daily workflow - and I build with AI directly. On the side, I make games.",
  metaDescription:
    "Paul Vu is a Software Engineer in Melbourne, Australia, delivering high-scale fintech billing engines, working AI-first, and building games on the side.",
};
