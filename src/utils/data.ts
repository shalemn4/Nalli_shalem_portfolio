// ═══════════════════════════════════════
//  RESUME DATA — Nalli Shalem
//  ✏️  EDIT THIS FILE to update your portfolio
// ═══════════════════════════════════════

export const PERSONAL = {
  name:     'Nalli Shalem',
  email:    'shalemn3@gmail.com',
  phone:    '+91 9958264114',
  location: 'India',
  linkedin: '/shalemnalli',
  github:   '/shalemn4',
} as const

// ─────────────────────────────────────────────────────────
//  SKILLS
//  To add a skill: copy one block, change name and tags
// ─────────────────────────────────────────────────────────
export interface Skill {
  name: string
  tags: string[]
}

export const SKILLS: Skill[] = [
 {
    name: 'React.js',
    tags: ['SPA', 'Hooks', 'Component Architecture', 'UI Dev'],
  },
  {
    name: 'Vue.js',
    tags: ['Vue 3', 'Composition API', 'Reactive UI', 'TypeScript'],
  },
  {
    name: 'Next.js',
    tags: ['SSR', 'SSG', 'App Router', 'Performance'],
  },
  {
    name: 'React Three Fiber',
    tags: ['Three.js', '3D UI', 'WebGL', 'React Integration'],
  },
  {
    name: 'TypeScript',
    tags: ['Static Typing', 'Interfaces', 'Scalable Code'],
  },

  // Backend
  {
    name: 'Node.js',
    tags: ['Backend', 'REST API', 'Server-side', 'JS Runtime'],
  },
  {
    name: 'Express.js',
    tags: ['API Dev', 'Routing', 'Middleware', 'Backend'],
  },
  {
    name: 'Authentication',
    tags: ['JWT', 'RBAC', 'Sessions', 'Security'],
  },
  {
    name: 'Socket.io',
    tags: ['Real-time', 'Live Updates', 'WebSockets', 'Chat Systems'],
  },
  {
    name: 'Python',
    tags: ['Backend', 'Scripting', 'API Development', 'Automation'],
  },

  // Database
  {
    name: 'MongoDB',
    tags: ['NoSQL', 'Document DB', 'CRUD'],
  },
  {
    name: 'MySQL',
    tags: ['SQL', 'Relational DB', 'Data Management'],
  },
  {
    name: 'Redis',
    tags: ['Caching', 'Sessions', 'Performance'],
  },

  // DevOps / Deployment
  {
    name: 'Docker',
    tags: ['Containerization', 'Deployment', 'DevOps'],
  },
  {
    name: 'AWS',
    tags: ['EC2', 'S3', 'Cloud Deploy', 'IAM'],
  },
  {
    name: 'CI/CD',
    tags: ['GitHub Actions', 'Automation', 'Deployment'],
  },
  {
    name: 'Linux',
    tags: ['CLI', 'SSH', 'Server Management'],
  },

  // Testing
  {
    name: 'Testing',
    tags: ['Jest', 'RTL', 'Unit Tests', 'Automation'],
  },
  {
    name: 'E2E Testing',
    tags: ['Playwright', 'Cypress', 'Browser Testing'],
  },

  // UI / Design
  {
    name: 'UI / Design',
    tags: ['Figma', 'Responsive UI', 'Accessibility', 'UX'],
  },
  {
    name: 'Animations',
    tags: ['Framer Motion', 'Micro Interactions', 'Smooth UX'],
  },

  // AI Modern Stack
  {
    name: 'OpenAI API',
    tags: ['GPT', 'AI Integration', 'Generative AI', 'Automation'],
  },
  {
    name: 'AI Tools',
    tags: ['Claude', 'Cursor', 'GitHub Copilot'],
  },
  {
    name: 'Modern AI Stack',
    tags: ['LangChain', 'RAG', 'Embeddings', 'Vector DB'],
  },

  // API / Dev Tools
  {
    name: 'API Tools',
    tags: ['Postman', 'Axios', 'API Testing', 'Debugging'],
  },
]

// ─────────────────────────────────────────────────────────
//  EXPERIENCE
//  To add a job: copy one block, fill in the details
// ─────────────────────────────────────────────────────────
export interface Experience {
  company:  string
  role:     string
  period:   string
  location: string
  bullets:  string[]
}

export const EXPERIENCE: Experience[] = [
  {
    company:  'Freelancer',
    role:     'Software Developer / Designer',
    period:   'Oct 2023 – Present',
    location: 'India',
    bullets: [
      'Built responsive web apps using Vue 3, TypeScript, and Vite',
      'Developed SaaS-style applications (Cloud Notes, Auth Portal) with cloud-ready design',
    ],
  },

  {
    company:  'BagYO',
    role:     'Frontend Developer',
    period:   'Nov 2025 – Jan 2026',
    location: 'Remote',
    bullets: [
      'Built web and SaaS applications with Vue 3, React, TypeScript, and Tailwind CSS, including the BagYo(Startup) logistics platform.',
      'Developed dashboards, API integrations, and optimized frontend performance and UI workflows',
    ],
  },

  {
    company:  'Linchpin Organization',
    role:     'Software Engineer — Front End',
    period:   'Dec 2023 – Apr 2025',
    location: 'Bangalore, India',
    bullets: [
      'Led frontend development using Vue 3 + TypeScript',
      'Improved tracking efficiency by 30% through task automation',
    ],
  },
  {
    company:  'Madadgaar Foundation',
    role:     'Web Developer — Intern',
    period:   'Jul 2023 – Sep 2023',
    location: 'Noida, Uttar Pradesh',
    bullets: [
      'Developed responsive web pages using HTML, CSS, JavaScript',
      'Collaborated on UI/UX implementation and debugging',
    ],
  },
]

// ─────────────────────────────────────────────────────────
//  PROJECTS  ← "Built in Fire" section
//
//  To ADD a project:
//    1. Copy one { } block below
//    2. Change num, title, tech, desc, link
//    3. Save — Vite hot-reloads instantly
//
//  link: set to '' to hide the arrow button
//        set to 'https://...' to make the arrow open that URL
// ─────────────────────────────────────────────────────────
export interface Project {
  num:   string
  title: string
  tech:  string[]
  desc:  string
  link:  string   // ← URL for the ↗ arrow. Empty string = no link
}

export const PROJECTS: Project[] = [
  {
    num:   '01',
    title: 'AETHER',
    tech:  ['React', 'Three Fiber', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'JWT', 'Zustand'],
    desc:  'A 3D Digital Workspace — full-stack SaaS architecture with lazy loading, Zustand state management, and smooth 60 FPS rendering. The world\'s most immersive productivity tool.',
    link:  'https://github.com/shalemn4/AetherDesk_3D_workspace.git', 
  },
  {
    num:   '02',
    title: 'AUTOLIFE AI',
    tech:  ['FastAPI', 'Multi-Agent', 'MCP Routing', 'OpenAI', 'Python'],
    desc:  'Smart Daily Automation System — AI-powered assistant with multi-agent architecture. Handles expense, reminder, and scheduler agents through intent processing and MCP-based routing.',
    link:  'https://github.com/shalemn4/AutoLife_AI.git',  
  },
  { 
    num:   '03',
    title: 'BagYo Startup Landing Page',
    tech:  ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Vite'],
    desc:  'Frontend MVP for a modern luggage logistics startup. Features a highly responsive, minimalist geometric UI design, optimized 2D animations, and type-safe component architecture for rapid asset delivery.',
    link:  'https://github.com/shalemn4/BagYO.git',
  },
  {
    num:   '04',
    title: 'REAL-TIME CHAT',
    tech:  ['React', 'Node.js', 'Express', 'Socket.io', 'JWT', 'AWS S3', 'Cloudinary'],
    desc:  'Multi-user real-time chat with JWT authentication and cloud-based file sharing. Live messaging, media uploads, and secure sessions — all in one system.',
    link:  'https://github.com/shalemn4/Nexus_Chat.git',  
  }
]

// ─────────────────────────────────────────────────────────
//  CERTIFICATIONS  ← shows in its own section
//
//  To ADD a certification:
//    1. Copy one { } block below
//    2. Fill in name, issuer, year, credentialUrl, badge
//    3. badge options: 'GCP' | 'AWS' | 'META' | 'UDEMY' | 'COURSERA' | 'MICROSOFT' | 'CUSTOM'
//
//  credentialUrl: link to your certificate (Credly, Google, etc.)
//                 set to '' to hide the verify button
// ─────────────────────────────────────────────────────────
export interface Certification {
  name:          string
  issuer:        string
  year:          string
  credentialUrl: string   // ← verification link, '' to hide
  badge:         'GCP' | 'AWS' | 'META' | 'UDEMY' | 'COURSERA' | 'MICROSOFT' | 'Acmegrade'
}

export const CERTIFICATIONS: Certification[] = [
  {
    name:          'Google Gen AI APAC Region',
    issuer:        'Google Cloud',
    year:          '2026',
    credentialUrl: 'https://drive.google.com/file/d/1TbySPd7Md-L6wNB0wRdQEfjQITsXkAjD/view?usp=sharing',
    badge:         'GCP',
  },
  {
    name:          'Full stack MERN',
    issuer:        'Acmegrade',
    year:          '2023',
    credentialUrl: 'https://drive.google.com/file/d/1dIJBLZlbgglSDH22VI4VKt837SPKH5My/view?usp=sharing', 
    badge:         'Acmegrade',
  }
]
