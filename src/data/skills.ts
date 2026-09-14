export interface SkillGroup {
  groupName: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    groupName: "Languages",
    items: ["C++", "C#", ".NET", "JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    groupName: "Fintech and data",
    items: [
      "billing system delivery",
      "SQL",
      "data processing",
      "Excel and Power BI",
      "Power Query",
      "SQLite FTS5",
    ],
  },
  {
    groupName: "Web",
    items: ["React", "MERN stack", "HTML/CSS", "FastAPI"],
  },
  {
    groupName: "Game development",
    items: [
      "Unity",
      "Godot 4",
      "custom engines (SDL, OpenGL, FMOD, IMGUI)",
      "Box2D",
    ],
  },
  {
    groupName: "AI",
    items: [
      "RAG",
      "hybrid retrieval (reciprocal rank fusion)",
      "embeddings",
      "ChromaDB",
      "Ollama",
      "local LLMs",
      "prompt engineering",
      "agentic workflows",
    ],
  },
  {
    groupName: "Practices",
    items: ["Agile and Scrum", "Git and SVN", "unit testing (pytest, GUT)", "team leadership"],
  },
];
