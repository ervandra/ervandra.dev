export interface Service {
  id: string;
  title: string;
  description: string;
  outcome: string;
  features: string[];
  icon: string;
}

const services: Service[] = [
  {
    id: "ai-solutions",
    title: "AI-Powered Business Solutions",
    description:
      "Automate workflows, deploy AI agents, and embed intelligence into your operations. Strategy through execution, measured by ROI.",
    outcome: "Reduce manual work by 40-70% with visible, measurable results.",
    features: [
      "AI automation strategy & implementation",
      "Custom AI agent development",
      "AI workflow optimization",
      "ROI measurement & evaluation",
    ],
    icon: "brain",
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    description:
      "Modernize legacy systems, migrate to the cloud, and streamline operations. Architecture-first approach for lasting impact.",
    outcome: "Streamlined operations, reduced tech debt, scalable systems.",
    features: [
      "Legacy system modernization",
      "Cloud migration & infrastructure",
      "Process automation & integration",
      "Technical architecture design",
    ],
    icon: "rocket",
  },
  {
    id: "fractional-cpto",
    title: "Strategic Tech Partnership",
    description:
      "Senior tech leadership without full-time cost. Product strategy, team building, and technical due diligence for growing businesses.",
    outcome: "Senior tech leadership at a fraction of the cost.",
    features: [
      "Product strategy & roadmapping",
      "Technical due diligence",
      "Team building & mentorship",
      "Architecture & security review",
    ],
    icon: "handshake",
  },
  {
    id: "custom-development",
    title: "Custom Software Development",
    description:
      "From MVP to scale. Web applications, e-commerce, APIs, and integrations built with modern standards and shipped on time.",
    outcome: "Production-ready, scalable software delivered on schedule.",
    features: [
      "Web application development",
      "MVP development for startups",
      "E-commerce solutions",
      "API development & integration",
    ],
    icon: "code",
  },
];

export default services;
