export interface Experience {
  period: string;
  role: string;
  org?: string;
  location?: string;
  description: string;
  highlights?: string[];
  projectSlug?: string;
}

export const experience: Experience[] = [
  {
    period: "2023 - Present",
    role: "Software Engineer",
    org: "Gentrack - Delivery Engineering",
    location: "Auckland, NZ / Melbourne, VIC",
    description:
      "Joined as a graduate engineer on a delivery team serving prominent utility clients across Australia and New Zealand. Promoted to software engineer within five months. Three years crafting tailored solutions aligned with the organisation's flagship billing and customer-management platform.",
    highlights: [
      "Performance testing and scalability analysis for a National Energy Provider POC (25M+ meter points) and a Major AU Energy Retailer pilot (2.5M+ meter points), keeping systems stable under extreme data loads.",
      "Resolved 300+ Jira tickets across five Tier-1 Water and Energy Utility networks, consistently meeting strict SLAs for system reliability and uptime.",
      "Engineered and executed large-scale data fixes and migrations, including a 2M+ record update for a major metropolitan utility provider, maintaining 100% data integrity during production deployments.",
      "Site Lead for key enterprise accounts, owning requirement refinement, triage, and solution design while collaborating directly with stakeholders to align technical delivery with business needs.",
      "Delivered critical software updates for AU/NZ market regulatory changes, ensuring seamless Go-Live cycles across multi-tenant cloud environments.",
      "Optimized core billing web services (C#/.NET) and integrated third-party vendor APIs, improving data flow and installation-status visibility on customer-facing portals.",
    ],
  },
  {
    period: "Feb 2022 - Nov 2022",
    role: "Software Developer (Internship)",
    org: "Babcock International",
    location: "Auckland, NZ",
    description:
      "Ten-month internship building R&D automation tools and business-intelligence systems for a global engineering and defence firm, spanning the final-year AUT industry project.",
    highlights: [
      "Developed specialized R&D tools in C# and SQL, automating complex data extraction processes.",
      "Designed and implemented a central Management Dashboard for real-time KPI visualization, improving executive oversight of operational workflows.",
      "Worked within a high-maturity Scrum framework using TDD and CI/CD pipelines to deliver production-ready code for internal business systems.",
    ],
    projectSlug: "babcock-dashboard",
  },
  {
    period: "2020 - 2022",
    role: "Freelance Web and Design",
    description:
      "Designed and built websites, posters, and pamphlets for family-run businesses: barber shops, beauty salons, and bakeries. Sharpened my HTML and CSS fundamentals and learned online advertising.",
  },
  {
    period: "2019 - 2022",
    role: "Bachelor of Computer and Information Sciences (Software Development)",
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
