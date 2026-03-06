export interface Testimonial {
  name: string;
  role: string;
  photo: string;
  text: string;
  source?: { url: string; text: string };
}

export interface Experience {
  company: string;
  logo?: string;
  promotion: {
    title: string;
    year: string;
    summary: string[];
  }[];
}

export interface SocialLink {
  id: string;
  icon: string;
  link: string;
}

export interface Profile {
  name: string;
  title: string;
  headline: string;
  subheadline: string;
  mission: string;
  email: string;
  phone: string;
  intro: string;
  website: string;
  socialLinks: SocialLink[];
  recentSkills: string[];
  allSkills: string[];
  experiences: Experience[];
  testimonials: Testimonial[];
  education: { title: string; school: string; year: string }[];
}

const profile: Profile = {
  name: "Ervandra Halim",
  title: "Strategic Tech Partner",
  headline: "I help SMEs & professionals build AI-powered businesses that scale.",
  subheadline:
    "Strategic Tech Partner | CPTO & Co-founder | 15+ Years in Tech",
  mission:
    "Strategic Tech Partner for SMEs — 15+ years building, leading, and shipping technology that drives real business results.",
  email: "hi@ervandra.com",
  phone: "+6287708770800",
  intro:
    "Tech expert and builder with 15+ years of experience. CPTO and co-founder helping SMEs and professionals implement cost-effective AI automation and digital transformation that deliver speed, accuracy, and visible results.",
  website: "www.ervandra.dev",
  socialLinks: [
    { id: "github", icon: "github", link: "https://www.github.com/ervandra" },
    {
      id: "linkedin",
      icon: "linkedin",
      link: "https://www.linkedin.com/in/ervandra",
    },
    {
      id: "youtube",
      icon: "youtube",
      link: "https://www.youtube.com/c/ervandra",
    },
  ],
  recentSkills: [
    "Product Strategy & Roadmapping",
    "Solution Architecture",
    "AI Automation & Agents",
    "AI Implementation & Evaluation",
    "Business Intelligence & Analytics",
    "Custom Integrations & APIs",
    "Cloud & Automation",
    "Security & Compliance",
    "Cost Optimization",
  ],
  allSkills: [
    "React.js",
    "Next.js",
    "TailwindCSS",
    "TypeScript",
    "Node.js",
    "Python",
    "Serverless",
    "Google Cloud",
    "AWS",
    "Firebase",
    "Flutter",
    "React Native",
    "Vue.js",
    "Angular",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "CI/CD",
    "Figma",
    "Vercel",
    "Cloudflare",
    "GraphQL",
    "REST APIs",
    "WordPress",
    "Headless CMS",
    "Payment Gateway",
    "Technical Architecture",
    "Team Management",
    "Project Management",
    "Agile / Scrum",
    "MVP Development",
  ],
  experiences: [
    {
      company: "Syntax",
      promotion: [
        {
          title: "Chief Product & Technology Officer (CPTO)",
          year: "May 2025 - Present",
          summary: [
            "Hybrid role as co-founder and CPTO overseeing product strategy and technology execution.",
            "Owns roadmap, architecture, security, delivery, and measurable outcomes for clients and ventures.",
            "Leads AI automation and implementation initiatives across SMEs to streamline operations and increase ROI.",
          ],
        },
        {
          title: "VP of Engineering & Product",
          year: "Jan 2024 - Apr 2025",
          summary: [
            "Co-founded and leading Syntax Solution to bring strategic initiatives in tailored software development and digital transformation.",
            "Strategic planning, business development, financial management, and resource allocation.",
            "Team leadership, project management, and client relations.",
          ],
        },
        {
          title: "Head of Engineering & Product",
          year: "May 2020 - Dec 2023",
          summary: [
            "Project and team management, technical decision-making.",
            "Client relations, risk management, quality assurance.",
            "Fostered continuous improvement and innovation within the team.",
          ],
        },
      ],
    },
    {
      company: "Komunal",
      promotion: [
        {
          title: "Tech Manager",
          year: "Sep 2023 - Feb 2024",
          summary: [
            "Led and mentored a team of 4-5 developers toward full-stack proficiency.",
            "Set code quality standards and implemented CI/CD pipelines.",
            "Applied agile methodologies and fostered cross-functional collaboration.",
          ],
        },
      ],
    },
    {
      company: "Yoona",
      promotion: [
        {
          title: "Engineering Manager",
          year: "Jan 2023 - Aug 2023",
          summary: [
            "Technical decision making and architecture design.",
            "Hands-on MVP development and complex features (Full stack).",
            "Hiring, budgeting, stakeholder management, and 3rd party integrations.",
          ],
        },
        {
          title: "Lead Engineer",
          year: "Feb 2022 - Dec 2022",
          summary: [
            "Technology consultant directly to CTO and stakeholders.",
            "Developed custom e-commerce solutions and technical best practices.",
            "Drove innovative solutions for early-phase Yoona growth.",
          ],
        },
      ],
    },
    {
      company: "R/GA",
      promotion: [
        {
          title: "Technology Lead",
          year: "May 2022 - Dec 2022",
          summary: [
            "Led APAC technology team, collaborating with global offices.",
            "Evaluated and recommended technology solutions for enterprise clients.",
            "Mentored junior engineers on world-class development standards.",
          ],
        },
        {
          title: "Senior Software Engineer",
          year: "May 2021 - Apr 2022",
          summary: [
            "Built digital experiences for global brands across multiple offices.",
            "Technical feasibility assessment, prototyping, and risk mitigation.",
            "Delivered clean, secure, high-performance code to world-class standards.",
          ],
        },
      ],
    },
    {
      company: "CIAYO",
      promotion: [
        {
          title: "Lead Frontend Developer",
          year: "Dec 2016 - Jul 2020",
          summary: [
            "Led frontend team, wrote technical specifications, and managed deployments.",
            "Scaled applications, implemented CI/CD, and optimized performance.",
            "Modernized web apps with React.js and Next.js.",
          ],
        },
        {
          title: "Senior Frontend Developer",
          year: "Jun 2015 - Dec 2016",
          summary: [
            "Co-founded and contributed to virtual social media platform.",
            "Led development of CIAYO Comics with React.js.",
          ],
        },
      ],
    },
    {
      company: "Cakra Studio",
      promotion: [
        {
          title: "Senior Web Analyst & Developer",
          year: "Jul 2012 - Jun 2015",
          summary: [
            "Led web development team and managed client projects.",
            "Created standardized web services and WordPress solutions.",
            "Client discussions, technical estimation, and reporting.",
          ],
        },
      ],
    },
  ],
  testimonials: [
    {
      name: "David Alfa Sunarna",
      role: "Associate Technology Director - R/GA",
      photo: "/images/testimonials/david.jpeg",
      text: "When I first meet Ervan, I know he will be a leader in engineering team someday. And it is happening now. As an engineer, Ervan's skill is no doubt. He deliver world-class technology solution for client and working with people from around the globe.",
      source: { url: "https://linkedin.com/in/ervandra", text: "LinkedIn" },
    },
    {
      name: "Eko Purnomo",
      role: "VP of Technology - Komunal Indonesia",
      photo: "/images/testimonials/eko.jpeg",
      text: "His technical skills in front-end development are unquestionable, I can trust him to deliver without any supervision whatsoever, and he's a dedicated person. I'd like to cross paths again with Ervan in the future.",
      source: { url: "https://linkedin.com/in/ervandra", text: "LinkedIn" },
    },
    {
      name: "Donny Riantori",
      role: "VP Engineering - DDTC",
      photo: "/images/testimonials/donny-riantori.jpg",
      text: "Ervandra is an extraordinary software engineer, he always comes with a great solution, practical and impactful for any result of his project. You will find 'engineering thinking' lives on this very talented guy.",
      source: { url: "https://linkedin.com/in/ervandra", text: "LinkedIn" },
    },
    {
      name: "Jussi Hurmola",
      role: "CEO - LifeLearn Holdings Pte Ltd",
      photo: "/images/testimonials/jussi-hurmola.jpg",
      text: "Ervandra is a very special person for us. He always overdeliver his services, even without being asked. He saved us multiple times. Indeed, our most valuable person regarding technology.",
      source: { url: "https://linkedin.com/in/ervandra", text: "LinkedIn" },
    },
    {
      name: "Erick Liemarga",
      role: "Chief Product Officer - LABABOOK",
      photo: "/images/testimonials/erick-liemarga.jpg",
      text: "If you're looking for a versatile frontend web developer I'll definitely recommend Ervandra right away. Open minded, critical thinking, resourceful and always look for improvement.",
      source: { url: "https://linkedin.com/in/ervandra", text: "LinkedIn" },
    },
    {
      name: "Effene Henry",
      role: "Lead Squad Engineer - Paper.id",
      photo: "/images/testimonials/effene.jpeg",
      text: "I was amazed by Ervandra's skill. He is a highly focused person as well as analytical. His energy to make things happen was contagious and it helped us achieve great goals.",
      source: { url: "https://linkedin.com/in/ervandra", text: "LinkedIn" },
    },
    {
      name: "Fran Sisco",
      role: "Android Developer - Bank MNC",
      photo: "/images/testimonials/sisco.jpeg",
      text: "He is like a witch, because he can bring delightful experiences and interactions to the UI. One of the best front end web developer I know. It was my pleasure to have worked with him.",
      source: { url: "https://linkedin.com/in/ervandra", text: "LinkedIn" },
    },
  ],
  education: [
    {
      title: "Bachelor of Computer Science (Interactive Multimedia)",
      school: "Bina Nusantara University",
      year: "2008 - 2012",
    },
  ],
};

export default profile;
