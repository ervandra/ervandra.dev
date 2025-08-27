interface SocialLink {
  id: string;
  icon: string;
  url: string;
  link?: string; // Alias for url
  name: string;
}

interface Work {
  year: string;
  company: string;
  title: string;
  summary: string[];
  promotion?: Work[];
}

interface Profile {
  name: string;
  title: string;
  mission: string;
  email: string;
  phone: string;
  photo: string;
  about: string;
  offerIntro: string;
  intro: string;
  professionalSkills: string[];
  personalSkills: string[];
  website: string;
  social: string[];
  socialLinks: SocialLink[];
  education: string;
  works: Work[];
  skills: string[];
  allSkills: string[];
  recentSkills?: string[];
  experiences?: Work[];
}

const profile: Profile = {
  name: 'Ervandra Halim',
  title: 'Technology Lead',
  mission: 'Combining Technology & Creativity For A Greater Impact',
  email: 'hi@ervandra.com',
  phone: '+6287708770800',
  photo: 'https://www.ervandra.com/wp-content/uploads/2020/12/ervan-round.png',
  about:
    "I'm Ervandra Halim, a Technology Enthusiast. Through-out my entire career, i realize that i love the most to conceptualize a website or web applications, write technical specifications and develop it with my team into a high-quality applications that are feasible, scalable, testable and measurable that will also meet with the business requirements.",
  offerIntro:
    'Get my thoughts twice a week in a bite size tech news called the Overcodes, where i cover about latest technologies, programming tips and modern business.',
  intro:
    "I'm a technology lead based in Jakarta, Indonesia specializing in crafting (and occasionally designing) exceptional, highly-effective websites and applications.",
  professionalSkills: [
    'Front-End Development',
    'HTML & CSS (SASS)',
    'React.js - Next.js',
    'Styled Components',
    'Figma / Sketch',
    'GIT / SVN',
    'CI / CD (Deployment)',
    'Responsive Web Design',
    'Business-To-Technical Specifications',
  ],
  personalSkills: [
    'Critical Thinking',
    'Reliable & Professional',
    'Organized & Analytical',
    'Time Management',
    'Fast Learning',
    'Problem Solver',
    'Team Building',
  ],
  website: 'www.ervandra.dev',
  social: [
    'https://linkedin.com/in/ervandra',
    'https://facebook.com/vahnisme',
    'https://github.com/ervandra',
    'https://youtube.com/c/ervandra',
  ],
  socialLinks: [
    {
      id: 'github',
      icon: 'github',
      url: 'https://github.com/ervandra',
      name: 'Github',
    },
    {
      id: 'linkedin',
      icon: 'linkedin',
      url: 'https://linkedin.com/in/ervandra',
      name: 'LinkedIn',
    },
    {
      id: 'twitter',
      icon: 'twitter',
      url: 'https://twitter.com/ervandracom',
      name: 'Twitter',
    },
    {
      id: 'youtube',
      icon: 'youtube',
      url: 'https://youtube.com/c/ervandra',
      name: 'Youtube',
    },
  ],
  education: 'Bachelor of Computer Science',
  works: [
    {
      year: '2020 - Present',
      company: 'PT. Mediatechindo',
      title: 'VP Technology',
      summary: [
        'Leading the technology team and overall technical architecture',
        'Responsible for the overall technology strategy and roadmap',
        'Managing multiple development teams and projects',
        'Implementing best practices and development standards',
      ],
    },
    {
      year: '2018 - 2020',
      company: 'PT. Mediatechindo',
      title: 'Technology Lead',
      summary: [
        'Lead front-end development team',
        'Architect and implement scalable web applications',
        'Mentor junior developers and conduct code reviews',
        'Collaborate with product and design teams',
      ],
    },
    {
      year: '2016 - 2018',
      company: 'Freelance',
      title: 'Full Stack Developer',
      summary: [
        'Developed custom web applications for various clients',
        'Implemented responsive and performant user interfaces',
        'Integrated third-party APIs and services',
        'Managed project timelines and client communications',
      ],
    },
  ],
  skills: [
    'React.js',
    'Next.js',
    'TypeScript',
    'Node.js',
    'TailwindCSS',
    'Styled Components',
    'GraphQL',
    'REST API',
    'Git',
    'CI/CD',
    'AWS',
    'Vercel',
    'Netlify',
    'Firebase',
    'MongoDB',
    'PostgreSQL',
    'Docker',
    'Kubernetes',
    'Microservices',
    'Serverless',
    'JAMstack',
    'Headless CMS',
    'Contentful',
    'Strapi',
    'Sanity',
    'WordPress',
    'Shopify',
    'WooCommerce',
    'Payment Integration',
    'SEO',
    'Web Performance',
    'Accessibility',
    'Progressive Web Apps',
    'React Native',
    'Flutter',
    'Figma',
    'Adobe XD',
    'Sketch',
    'UI/UX Design',
    'Design Systems',
    'Component Libraries',
    'Testing',
    'Jest',
    'Cypress',
    'React Testing Library',
    'Agile',
    'Scrum',
    'Kanban',
    'Project Management',
    'Team Leadership',
    'Technical Writing',
    'Public Speaking',
    'Mentoring',
    'Code Review',
    'Architecture Design',
    'System Design',
    'Performance Optimization',
    'Security Best Practices',
    'DevOps',
    'Monitoring',
    'Analytics',
    'A/B Testing',
    'Growth Hacking',
    'Product Development',
    'Business Analysis',
    'Technical Consulting',
    'GraphCMS',
  ],
  allSkills: [
    'React.js',
    'TailwindCSS',
    'Styled Components',
    'CSS Modules',
    'Atomic Design',
    'Serverless',
    'Google Cloud',
    'Firebase',
    'Firestore',
    'Angular',
    'Vue.js | Nuxt.js',
    'Material UI',
    'React Native',
    'Flutter',
    'Miro',
    'Figma',
    'Sketch',
    'Zeplin',
    'Adobe XD',
    'Go Retro',
    'Jira',
    'Asana',
    'Trello',
    'Slack',
    'Netlify',
    'Vercel',
    'Gatsby',
    'AWS',
    'AWS Lambda',
    'AWS SES',
    'AWS EC2',
    'JAMStack',
    'HeadlessCMS',
    'Uniform',
    'Contentful',
    'GraphCMS',
    'Sanity',
    'CDN',
    'CI/CD',
    'Cloudflare',
    'WordPress',
    'Woocommerce',
    'Payment Gateway',
    'Custom Integration',
    'Custom Software Development',
    'Technical Feasibility',
    'Technical Documentation',
    'Technical Design',
    'Technical Architecture',
    'Team building',
    'Team management',
    'Project management',
    'Protopie',
    'MVP',
    'Balsamiq',
    'Whimsical',
  ],
};

export default profile;
export type { Profile, SocialLink, Work };