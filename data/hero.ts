export const heroData = {
  greeting: "Hi! I'm",
  name: "Hasta",
  title: "I'm a Software Engineer.",
  description:
    "This is my personal space where I share my work, ideas, and things I enjoy building in the digital space.",
};

export const jsonLines = [
  { type: "brace", text: "{" },
  { type: "property", key: "name", value: "Hasta Budiawan" },
  { type: "property", key: "role", value: "Software Engineer" },
  { type: "array-start", key: "skills" },
  {
    type: "array-items",
    items: [
      "JavaScript",
      "Golang",
      "PHP",
      ".NET",
      "React",
      "Vue.js",
      "Laravel",
      "Express.js",
      "PostgreSQL",
      "MySQL",
      "Supabase",
    ],
  },
  { type: "array-end" },
  { type: "brace", text: "}" },
];
