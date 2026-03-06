export interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  tags: string[];
  image?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: "magnificat",
    title: "Magnificat.id",
    client: "Magnificat",
    description:
      "End-to-end digital platform development for a growing Indonesian brand, from concept to production.",
    tags: ["Web App", "E-Commerce", "Full Stack"],
    featured: true,
  },
  {
    id: "mtf-projects",
    title: "MTF Projects",
    client: "MTF",
    description:
      "Technical architecture and development for multi-platform digital initiatives driving operational efficiency.",
    tags: ["Architecture", "Digital Transformation", "Integration"],
    featured: true,
  },
  {
    id: "rga-global",
    title: "Global Brand Experiences",
    client: "R/GA",
    description:
      "Led technology for world-class digital experiences, collaborating across APAC and global offices for enterprise clients.",
    tags: ["Enterprise", "Global", "Technology Lead"],
    featured: true,
  },
  {
    id: "komunal-fintech",
    title: "Fintech Platform Engineering",
    client: "Komunal",
    description:
      "Technical leadership and team mentorship for a growing fintech platform, establishing engineering standards and CI/CD practices.",
    tags: ["Fintech", "Team Leadership", "CI/CD"],
    featured: true,
  },
  {
    id: "yoona-ecommerce",
    title: "E-Commerce Platform",
    client: "Yoona",
    description:
      "Built the technical foundation from MVP to production-scale e-commerce, including architecture, hiring, and stakeholder management.",
    tags: ["E-Commerce", "MVP", "Full Stack"],
    featured: false,
  },
  {
    id: "google-projects",
    title: "Google Projects",
    client: "Google (via R/GA)",
    description:
      "Contributed to high-profile Google digital projects with world-class engineering standards and global team collaboration.",
    tags: ["Enterprise", "Global", "Web Platform"],
    featured: false,
  },
];

export default projects;
