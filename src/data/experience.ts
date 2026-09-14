export interface Experience {
  period: string;
  role: string;
  org?: string;
  description: string;
}

export const experience: Experience[] = [
  {
    period: "2023 - Present",
    role: "Software Engineer",
    org: "Gentrack - Delivery Engineering",
    description:
      "Joined as a graduate engineer on a delivery team serving prominent utility clients across Australia and New Zealand. Promoted to software engineer within five months. Three years crafting tailored solutions aligned with the organisation's flagship billing and customer-management platform.",
  },
  {
    period: "2020 - 2022",
    role: "Freelance Web and Design",
    description:
      "Designed and built websites, posters, and pamphlets for family-run businesses: barber shops, beauty salons, and bakeries. Sharpened my HTML and CSS fundamentals and learned online advertising.",
  },
  {
    period: "2019 - 2022",
    role: "Bachelor of Computer and Information Sciences",
    org: "Auckland University of Technology",
    description:
      "Final-year R&D project with industry client Babcock International; game programming paper building a custom C++ engine.",
  },
  {
    period: "2018 - 2019",
    role: "Warehouse and Delivery",
    org: "Fisher and Paykel Healthcare",
    description:
      "Full-time role in a large corporation's supply chain. Teamwork, communication, and how a professional operation runs.",
  },
];
