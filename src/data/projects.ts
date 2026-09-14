import babcockArchitecture from "../assets/projects/babcock-architecture.avif";
import babcockCard from "../assets/projects/babcock-card.avif";
import babcockFinal from "../assets/projects/babcock-final.avif";
import pitCard from "../assets/projects/pit-card.avif";
import pitDev from "../assets/projects/pit-dev.avif";
import pitFinal from "../assets/projects/pit-final.avif";
import pitPlanning from "../assets/projects/pit-planning.avif";
import serperCard from "../assets/projects/serper.avif";
import side1 from "../assets/projects/side-1.avif";
import skateboardCard from "../assets/projects/skateboard-card.avif";
import skateboardPlanning from "../assets/projects/skateboard-planning.avif";
import skateboardTrick from "../assets/projects/skateboard-trick.avif";

export type ProjectStatus = "Active" | "Shipped";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  detail: string[];
  tags: string[];
  status: ProjectStatus;
  featured: boolean;
  links: ProjectLink[];
  images?: ImageMetadata[];
  sort: number;
}

export const projects: Project[] = [
  {
    slug: "glnavigator",
    title: "Grand Line Navigator",
    summary:
      "An AI assistant for the One Piece Card Game. Ask questions about cards and rules interactions and get answers grounded in the real card database, with citations back to card IDs.",
    detail: [
      "Grand Line Navigator is a retrieval-augmented chat that answers questions about the One Piece Card Game from the full card database. It merges exact keyword search (SQLite FTS5) with semantic search (vector embeddings) using reciprocal rank fusion, so both card-name lookups and conceptual questions work well.",
      "It is local-first: the chat model and embedding models run through Ollama on my machine, no API keys, no cost. The provider layer is swappable, so a cloud model can drop in later without touching the rest of the code.",
      "The stack: Python, FastAPI web UI with streamed answers and clickable card-ID citations, a CLI for ingest, search, chat, and serving, ChromaDB for the vector store, and a pytest suite. Phase 1 of 3 - next up, an agentic deck coach and tournament meta intelligence.",
    ],
    tags: ["AI", "RAG", "Python"],
    status: "Active",
    featured: true,
    links: [{ label: "Source", url: "https://github.com/paulvu2028/glnavigator" }],
    sort: 1,
  },
  {
    slug: "apex-season",
    title: "Apex Season",
    summary:
      "A racing prototype on Godot 4: raycast car physics, procedural tracks with embankments and a finish gantry, AI opponents, and a headless balance simulator.",
    detail: [
      "Apex Season is my current side project: the driving and racing prototype for a longer-term racing sim with a seasonal coach/manager layer and roguelike elements.",
      "The race loop currently supports three AI opponents, a staggered two-wide starting grid, a HUD minimap with race progress, engine and skid audio with smoke effects, and 3D physics interpolation for smooth rendering.",
      "Engineering highlights: all tuning lives in plain-text .tres config files, the car is raycast-based, the track is procedural, and a headless simulation harness runs races and emits JSON results for balance work. GUT unit tests run headless via make.",
    ],
    tags: ["Game Dev", "Godot 4"],
    status: "Active",
    featured: true,
    links: [{ label: "Source", url: "https://github.com/paulvu2028/apex-season" }],
    sort: 2,
  },
  {
    slug: "the-pit",
    title: "The Pit",
    summary:
      "A co-op and PvP arena brawler built on a custom C++ game engine. Survive monster hordes with friends or fight to be the last one standing.",
    detail: [
      "The Pit was a one-month team project for the game programming paper COMP710 at AUT (October 2022), built by five developers on a custom C++ engine using FMOD for sound, IMGUI for debugging and UI, and SDL/OpenGL for rendering.",
      "It has two modes: PvP, a last-one-standing fight with five weapon choices and mobs spawning to interrupt you, and PvE, a five-wave cooperative climb that ends in a final boss.",
      "My contributions ran across the project: player behavior, the enemy AI, and the item and weapon system - where I designed unique identifiers for the item class and unique interactions for every weapon. I also took a leading role in coordinating the team.",
    ],
    tags: ["Game Dev", "C++", "Custom Engine"],
    status: "Shipped",
    featured: false,
    links: [
      {
        label: "Game build (Google Drive)",
        url: "https://drive.google.com/drive/folders/1k1UjlxpZ3xUpNiMRc33u_m5uJPAUN-kF?usp=sharing",
      },
      {
        label: "Game design document",
        url: "https://25cc0c0e-6330-46df-8b50-99e1cd1c2153.filesusr.com/ugd/62d5ca_6a890da4c6e8477bb02557450f51f774.pdf",
      },
      {
        label: "Technical design document",
        url: "https://25cc0c0e-6330-46df-8b50-99e1cd1c2153.filesusr.com/ugd/62d5ca_3edfb763133445f586f6cf0189606056.pdf",
      },
      {
        label: "UML class diagram",
        url: "https://25cc0c0e-6330-46df-8b50-99e1cd1c2153.filesusr.com/ugd/62d5ca_7e2a232d11f84cdbbbce01bb140d9c7b.pdf",
      },
    ],
    images: [pitCard, pitPlanning, pitDev, pitFinal],
    sort: 3,
  },
  {
    slug: "babcock-dashboard",
    title: "Babcock International - Business Management Dashboard",
    summary:
      "A year-long final-year R&D project for industry client Babcock International: an interactive business-intelligence dashboard tracking engineering deliverables against monthly targets.",
    detail: [
      "Babcock International, a naval contracting company doing work for the NZ navy and international transportation, had no way of keeping track of their engineering projects. Our team scoped the problem with their BI analysts and proposed a dashboard displaying relevant performance indicators and tracking deliverables against monthly targets.",
      "We planned a full-stack web application, then pivoted to an Excel and Power BI solution, which is the standard in data analyst practice. The final product contains five dashboards: an overview plus four detailed dashboards tracking different types of engineering tasks in backlog, each tailored with graphs, interactive filters, and buttons.",
      "I stepped up as project leader and was responsible for the data processing: Babcock supplied dummy data similar to their real weekly output, and I built Power Query pipelines that processed hundreds of thousands of rows into weekly sums across the Babcock financial year.",
    ],
    tags: ["Data", "BI", "Leadership"],
    status: "Shipped",
    featured: false,
    links: [
      {
        label: "Product architecture",
        url: "https://25cc0c0e-6330-46df-8b50-99e1cd1c2153.filesusr.com/ugd/62d5ca_b110de23a0dc4bb3a31934d9f4d210fd.pdf",
      },
      {
        label: "Data flow table",
        url: "https://25cc0c0e-6330-46df-8b50-99e1cd1c2153.filesusr.com/ugd/62d5ca_f73b444b76cd4c1fa0e27f78ba9174bf.pdf",
      },
      {
        label: "Project proposal",
        url: "https://25cc0c0e-6330-46df-8b50-99e1cd1c2153.filesusr.com/ugd/62d5ca_c83592eaf11f4a28bad393d9e6a33af0.pdf",
      },
      {
        label: "Project poster",
        url: "https://25cc0c0e-6330-46df-8b50-99e1cd1c2153.filesusr.com/ugd/62d5ca_8a420cb9741d41eba66a704f5aa30efd.pdf",
      },
    ],
    images: [babcockCard, babcockArchitecture, babcockFinal],
    sort: 4,
  },
  {
    slug: "skateboard-time",
    title: "Skateboard Time",
    summary:
      "A 3D open-world skateboarding game: collect pizzas, buy cosmetics, and land kickflips in slow-motion trick sequences.",
    detail: [
      "Skateboard Time was built by a team of three for the AUT software development practice paper in semester 1 of 2020. I served as product owner and developer, implementing the core mechanics, player controls, the in-game shop, collectibles, and the save and load system.",
      "The feature I'm proudest of is the trick system: jump into an air-time bubble and the world slows down, prompting a sequence for the player to beat - succeed in time and the character performs an animated kickflip.",
      "This was my first experience with an agile framework: standups, sprints, and a scrum master keeping us on track.",
    ],
    tags: ["Game Dev", "Unity"],
    status: "Shipped",
    featured: false,
    links: [
      { label: "Play the build (itch.io)", url: "https://smi13.itch.io/skateboard-time-by-p3-gang" },
      {
        label: "Game pitch",
        url: "https://25cc0c0e-6330-46df-8b50-99e1cd1c2153.filesusr.com/ugd/62d5ca_7fb9c5b81b974356a935af7c97e1ff5d.pdf",
      },
      {
        label: "UML class diagram",
        url: "https://25cc0c0e-6330-46df-8b50-99e1cd1c2153.filesusr.com/ugd/62d5ca_11fa9b54bc1e4607bb73a42119062670.pdf",
      },
    ],
    images: [skateboardCard, skateboardPlanning, skateboardTrick],
    sort: 5,
  },
  {
    slug: "totem-toss",
    title: "Totem Toss",
    summary:
      "A hyper-casual mobile game with a twist: pass the totem idol from character to character as the lava rises and destroys the world.",
    detail: [
      "Collect coins along the way and spend them in the in-game store, then save and share your high score. One of the small mobile titles I've published to the Google Play store. Published via MavElite Studios.",
    ],
    tags: ["Game Dev", "Mobile"],
    status: "Shipped",
    featured: false,
    links: [],
    images: [side1],
    sort: 6,
  },
  {
    slug: "serper",
    title: "SERPER",
    summary:
      "A full-stack article search web application for a software engineering course at AUT (2021), built on the MERN stack to display software engineering research articles.",
    detail: [
      "SERPER was a course project for a software engineering paper at AUT in 2021. The team built a full-stack web application on the MERN stack (MongoDB, Express, React, Node) that displayed software engineering research articles, which is also where I first worked with Git in a team setting.",
    ],
    tags: ["Full Stack", "MERN"],
    status: "Shipped",
    featured: false,
    links: [],
    images: [serperCard],
    sort: 7,
  },
];
