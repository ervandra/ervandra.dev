export interface SocialLink {
  id: string;
  icon: string;
  url: string;
}

export interface Promotion {
  title: string;
  year: string;
  summary: string[];
}

export interface Experience {
  company: string;
  promotions: Promotion[];
}

export interface Education {
  title: string;
  school: string;
  year: string;
}

export interface Testimonial {
  name: string;
  role: string;
  photo: string;
  text: string;
  source: {
    url: string;
    text: string;
  };
}

export interface Service {
  title: string;
  description: string;
  items: string[];
  icon: string;
}

export interface Profile {
  name: string;
  title: string;
  mission: string;
  email: string;
  phone: string;
  website: string;
  photo: string;
  about: string;
  intro: string;
  color: string;
  socialLinks: SocialLink[];
  experiences: Experience[];
  education: Education[];
  recentSkills: string[];
  allSkills: string[];
  professionalSkills: string[];
  personalSkills: string[];
  testimonials: Testimonial[];
  services: Service[];
}

const profile: Profile = {
  name: "Ervandra Halim",
  title: "Technology Lead",
  mission: "Tech Expert · 15+ Years · CPTO & Founder · Cost-Effective AI for SMEs",
  email: "hi@ervandra.com",
  phone: "+6287708770800",
  website: "www.ervandra.dev",
  photo: "/images/ervan.png",
  about: "I'm Ervandra Halim, a Technology Enthusiast. Throughout my entire career, I realize that I love most to conceptualize a website or web applications, write technical specifications and develop it with my team into high-quality applications that are feasible, scalable, testable and measurable that will also meet business requirements.",
  intro: "Tech expert and builder (15+ years). CPTO and solo founder helping people and SMEs implement cost-effective AI automation and AI solutions that deliver speed, accuracy, and visible results.",
  color: "ae2b26",

  socialLinks: [
    { id: "github", icon: "github", url: "https://github.com/ervandra" },
    { id: "linkedin", icon: "linkedin", url: "https://linkedin.com/in/ervandra" },
  ],

  services: [
    {
      title: "Digital Transformation",
      description: "Assess, architect, and deliver systems that reduce operational friction and increase velocity.",
      items: ["Process mapping & prioritization", "Architecture & roadmap", "Change management & enablement"],
      icon: "layers",
    },
    {
      title: "AI Automation",
      description: "Automate repetitive workflows with AI agents and integrations — speed and accuracy by design.",
      items: ["Agent workflows & approvals", "RPA + API integrations", "Human-in-the-loop safety"],
      icon: "cpu",
    },
    {
      title: "AI Implementation",
      description: "Embed AI safely into products and processes with a focus on security, reliability, and ROI.",
      items: ["Use-case discovery & pilots", "Model selection & evaluation", "Security, governance, and cost"],
      icon: "brain",
    },
  ],

  experiences: [
    {
      company: "Syntax Solution",
      promotions: [
        {
          title: "Chief Product & Technology Officer (CPTO)",
          year: "May 2025 – Present",
          summary: [
            "Hybrid role as co-founder and CPTO overseeing product strategy and technology execution.",
            "Owns roadmap, architecture, security, delivery, and measurable outcomes for clients and ventures.",
            "Leads AI automation and implementation initiatives across SMEs to streamline operations and increase ROI.",
          ],
        },
        {
          title: "VP of Engineering & Product",
          year: "Jan 2024 – Apr 2025",
          summary: [
            "Co-founded and leading Syntax Solution to bring strategic initiatives in tailored software development and digital transformation.",
            "Strategic planning, business development, and identifying growth opportunities.",
            "Financial management: overseeing budgeting, financial performance, and resource allocation.",
            "Team leadership: recruiting, mentoring, and managing team members for efficient project execution.",
            "Client relations: building and maintaining strong client relationships.",
          ],
        },
        {
          title: "Head of Engineering & Product",
          year: "May 2020 – Dec 2023",
          summary: [
            "Project management: coordinating client projects, managing timelines and budgets.",
            "Technical decision-making: guiding team on technology choices.",
            "Client relations and risk management.",
            "Quality assurance: ensuring high-quality deliverables.",
          ],
        },
        {
          title: "Lead Project Manager",
          year: "Apr 2017 – Apr 2020",
          summary: [
            "Coordinated client projects, managed timelines and budgets.",
            "Led team, delegated tasks, and provided support.",
            "Built strong client relationships and managed risk.",
          ],
        },
      ],
    },
    {
      company: "Komunal Indonesia",
      promotions: [
        {
          title: "Tech Manager",
          year: "Sep 2023 – Feb 2024",
          summary: [
            "Led a team of 4-5 individuals, guiding them towards becoming proficient full-stack developers.",
            "Set the standard for code quality by writing clean, highly readable code.",
            "Implemented CI/CD pipelines for efficient and reliable software delivery.",
            "Applied agile methodologies to drive project success.",
          ],
        },
      ],
    },
    {
      company: "Yoona",
      promotions: [
        {
          title: "Engineering Manager",
          year: "Jan 2023 – Aug 2023",
          summary: [
            "Technical decision making and architecture design.",
            "Resource management and Agile planning and execution.",
            "Hands-on for MVP and complex features (Full stack).",
            "Hiring, talent management, and budgeting.",
            "Stakeholder management between CTO, CEO, and CCO.",
          ],
        },
        {
          title: "Lead Engineer",
          year: "Feb 2022 – Dec 2022",
          summary: [
            "Technology consultant for the company (directly to CTO and stakeholders).",
            "Creating and implementing high-quality technology solutions.",
            "Developing technical best practices for all Yoona products.",
          ],
        },
      ],
    },
    {
      company: "R/GA",
      promotions: [
        {
          title: "Technology Lead",
          year: "May 2022 – Dec 2022",
          summary: [
            "Managed APAC (Indonesia Office) Technology Team.",
            "Worked with R/GA teams across multiple offices and disciplines.",
            "Evaluated and recommended technology solutions for project requirements.",
            "Led by example, mentoring junior members on best practices.",
          ],
        },
        {
          title: "Senior Software Engineer, Web Platforms",
          year: "May 2021 – Apr 2022",
          summary: [
            "Built and delivered successful digital experiences with technical solutions.",
            "Assisted teams on technical feasibility, risk and effort estimation.",
            "Wrote clean, modern, secure, and well-performing code to world-class standards.",
          ],
        },
      ],
    },
    {
      company: "CIAYO",
      promotions: [
        {
          title: "Lead Frontend Developer",
          year: "Dec 2016 – Jul 2020",
          summary: [
            "Wrote technical specifications and helped team meet business requirements.",
            "Created blueprint projects and scaled the apps.",
            "Planned deployments, managed releases and implemented CI/CD.",
          ],
        },
        {
          title: "Senior Frontend Developer",
          year: "Jun 2015 – Dec 2016",
          summary: [
            "Co-Founder contributing insights on web technologies.",
            "Led development of CIAYO Comics with React.js.",
            "Recoded web apps using Nuxt.js and later Next.js.",
          ],
        },
      ],
    },
    {
      company: "Cakra Studio",
      promotions: [
        {
          title: "Senior Web Analyst & Developer",
          year: "Jul 2012 – Jun 2015",
          summary: [
            "Managed client discussions and created technical estimations.",
            "Led and managed Web Development Team.",
            "Created standardized Web Services and WordPress templates.",
          ],
        },
      ],
    },
  ],

  education: [
    {
      title: "Bachelor of Computer Science (Interactive Multimedia)",
      school: "Bina Nusantara University",
      year: "2008 – 2012",
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
    "React.js", "Next.js", "TailwindCSS", "TypeScript", "Vue.js", "Nuxt.js",
    "Angular", "React Native", "Flutter", "Node.js",
    "Firebase", "Google Cloud", "AWS", "Serverless",
    "Figma", "CI/CD", "Vercel", "WordPress",
    "Contentful", "Sanity", "GraphCMS",
    "Technical Architecture", "Team Management", "Project Management",
  ],

  professionalSkills: [
    "Front-End Development",
    "HTML & CSS (SASS)",
    "React.js - Next.js",
    "Styled Components",
    "Figma / Sketch",
    "GIT / SVN",
    "CI / CD (Deployment)",
    "Responsive Web Design",
    "Business-To-Technical Specifications",
  ],

  personalSkills: [
    "Critical Thinking",
    "Reliable & Professional",
    "Organized & Analytical",
    "Time Management",
    "Fast Learning",
    "Problem Solver",
    "Team Building",
  ],

  testimonials: [
    {
      name: "David Alfa Sunarna",
      role: "Associate Technology Director — R/GA",
      photo: "/images/testimonials/david.jpeg",
      text: "When I first meet Ervan, I know he will be a leader in engineering team someday. And it is happening now, im moving from R/GA and now Ervan replacing me to lead a world-class team in R/GA. As an engineer, Ervan's skill is no doubt. He deliver world-class technology solution for client and working with people from around the globe.",
      source: { url: "https://linkedin.com/in/ervandra", text: "LinkedIn" },
    },
    {
      name: "Eko Purnomo",
      role: "VP of Technology — Komunal Indonesia",
      photo: "/images/testimonials/eko.jpeg",
      text: "When I was at R/GA Ervan helps me a lot when doing things, I never find it difficult to work with him and he was always on time for delivery. His technical skills in front-end development are unquestionable, I can trust him to deliver without any supervision whatsoever.",
      source: { url: "https://linkedin.com/in/ervandra", text: "LinkedIn" },
    },
    {
      name: "Donny Riantori",
      role: "VP Engineering — DDTC",
      photo: "/images/testimonials/donny-riantori.jpg",
      text: "Ervandra is an extraordinary software engineer, he always comes with a great solution, practical and impactful for any result of his project. You will find 'engineering thinking' lives on this very talented guy.",
      source: { url: "https://linkedin.com/in/ervandra", text: "LinkedIn" },
    },
    {
      name: "Erick Liemarga",
      role: "Chief Product Officer — LABABOOK",
      photo: "/images/testimonials/erick-liemarga.jpg",
      text: "If you're looking for a versatile frontend web developer I'll definitely recommend Ervandra right away. Several qualities: open minded, critical thinking, resourceful and always look for improvement.",
      source: { url: "https://linkedin.com/in/ervandra", text: "LinkedIn" },
    },
    {
      name: "Jussi Hurmola",
      role: "CEO — LifeLearn Holdings Pte Ltd",
      photo: "/images/testimonials/jussi-hurmola.jpg",
      text: "Ervandra is a very special person for us. He always overdeliver his services, even without being asked. He saved us multiple times due to our primitive and outdated backend system, he provide quick and working solutions.",
      source: { url: "https://linkedin.com/in/ervandra", text: "LinkedIn" },
    },
    {
      name: "Effene Henry",
      role: "Lead Squad Engineer — Paper.id",
      photo: "/images/testimonials/effene.jpeg",
      text: "I've been working with Ervandra in CIAYO Comics for over 2 years and I was amazed by his skill. He is a highly focused person as well as analytical. His energy to make things happen was contagious and it helped us achieve great goals.",
      source: { url: "https://linkedin.com/in/ervandra", text: "LinkedIn" },
    },
    {
      name: "Fran Sisco",
      role: "Android Developer — Bank MNC Internasional",
      photo: "/images/testimonials/sisco.jpeg",
      text: "Ervandra is a great developer. He can bring delightful experiences and interactions to the UI, his work always amazes me. One of the best front end web developer I know.",
      source: { url: "https://linkedin.com/in/ervandra", text: "LinkedIn" },
    },
  ],
};

export default profile;
