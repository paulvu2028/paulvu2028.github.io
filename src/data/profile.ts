export interface Profile {
  name: string;
  role: string;
  heroSubline: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  languages: string[];
  heroBlurb: string;
}

export const profile: Profile = {
  name: "Paul Vu",
  role: "Software Engineer",
  heroSubline: "Fintech delivery - AI-first workflow - game programmer on the side",
  location: "Auckland, New Zealand",
  email: "paulvu2028@gmail.com",
  linkedin: "https://www.linkedin.com/in/paul-vu-6399561bb/",
  github: "https://github.com/paulvu2028",
  languages: ["English", "Vietnamese"],
  heroBlurb:
    "Three years delivering billing and customer-system software for utility clients across Australia and New Zealand. I work AI-first: agents, tools, and prompt engineering are part of my daily workflow - and I build with AI directly. On the side, I make games.",
};
