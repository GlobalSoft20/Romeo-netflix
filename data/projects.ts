export type Project = {
  slug: string
  name: string
  tagline: string
  category: string
  type: 'Client / Concept' | 'Academic Project' | 'Prototype'
  featured?: boolean
  year: string
  cover: string
  screenshots: { src: string; alt: string }[]
  technologies: string[]
  role: string
  links?: {
    live?: string
    github?: string
  }
  overview: string
  problem: string
  solution: string
  features: string[]
  challenges: string
  result: string
}

export const projects: Project[] = [
  {
    slug: 'globalsoft',
    name: 'GlobalSoft',
    tagline: 'A modern multi-page software company website.',
    category: 'Web Platform',
    type: 'Client / Concept',
    featured: true,
    year: '2025',
    cover: '/projects/globalsoft/cover.png',
    screenshots: [
      { src: '/projects/globalsoft/cover.png', alt: 'GlobalSoft home page hero' },
      { src: '/projects/globalsoft/services.png', alt: 'GlobalSoft services page' },
      { src: '/projects/globalsoft/dashboard.png', alt: 'GlobalSoft interior page layout' },
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    role: 'Frontend Developer & UI Engineer',
    links: {
      live: 'https://global-soft-xi.vercel.app/',
    },
    overview:
      'GlobalSoft is a modern, multi-page marketing and product website for a software company. It focuses on a clean visual system, reusable components and a responsive experience across every device.',
    problem:
      'Software companies often present themselves with cluttered, inconsistent pages that fail to communicate their services clearly. The goal was to design a coherent, professional presence that scales across multiple pages without repeating markup.',
    solution:
      'I built a component-driven frontend with a shared design system, a consistent navigation model and reusable section blocks. Content is structured so new pages can be assembled from existing building blocks.',
    features: [
      'Responsive multi-page layout with shared navigation',
      'Reusable section and card components',
      'Modern, consistent design system',
      'Accessible, keyboard-friendly interactions',
      'Optimized responsive imagery',
    ],
    challenges:
      'Keeping the design consistent across many pages while avoiding duplicated markup. I solved this by extracting shared layout primitives and driving content from structured data.',
    result:
      'A polished, professional website that demonstrates strong frontend fundamentals — component reuse, responsive design and a clear visual hierarchy.',
  },
  {
    slug: 'librastock',
    name: 'LibraStock',
    tagline: 'Library and stock management platform.',
    category: 'Business System',
    type: 'Academic Project',
    year: '2024',
    cover: '/projects/librastock/cover.png',
    screenshots: [
      { src: '/projects/librastock/cover.png', alt: 'LibraStock dashboard overview' },
    ],
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    role: 'Full-stack Developer',
    links: {
      live: 'https://libra-stock.vercel.app/',
    },
    overview:
      'LibraStock is a management platform for tracking library resources and stock. It handles records, availability and basic reporting through a straightforward administrative interface.',
    problem:
      'Manual tracking of books and stock leads to lost records and inconsistent availability data. A centralized system was needed to keep inventory accurate.',
    solution:
      'A database-driven application with structured records, search and management screens for adding, updating and monitoring inventory.',
    features: [
      'Inventory and record management',
      'Search and filtering',
      'Availability tracking',
      'Basic reporting views',
    ],
    challenges:
      'Designing a relational schema that stays accurate as records change frequently, and keeping the UI simple for non-technical staff.',
    result:
      'A working academic prototype that demonstrates full-stack CRUD, relational data modeling and practical inventory workflows.',
  },
  {
    slug: 'bankos',
    name: 'BankOS',
    tagline: 'Loan and financial management system.',
    category: 'Business System',
    type: 'Academic Project',
    year: '2024',
    cover: '/projects/bankos/cover.png',
    screenshots: [
      { src: '/projects/bankos/cover.png', alt: 'BankOS loan management dashboard' },
    ],
    technologies: ['Java', 'MySQL', 'JavaScript'],
    role: 'Full-stack Developer',
    links: {
      live: 'https://bankos-ten.vercel.app/dashboard',
    },
    overview:
      'BankOS is a financial management system focused on loans — tracking applications, balances and repayment records within an administrative dashboard.',
    problem:
      'Managing loan records and repayments manually is error-prone. A structured system was needed to keep balances and schedules consistent.',
    solution:
      'A modular application that models customers, loans and repayments, with dashboard views for monitoring outstanding balances.',
    features: [
      'Loan application and record management',
      'Repayment tracking',
      'Balance and status dashboards',
      'Structured financial data model',
    ],
    challenges:
      'Modeling financial relationships accurately and keeping calculations consistent across repayment records.',
    result:
      'An academic prototype demonstrating structured financial data modeling and dashboard-driven administration.',
  },
  {
    slug: 'school-management',
    name: 'School Management System',
    tagline: 'Multi-module education management platform.',
    category: 'Business System',
    type: 'Academic Project',
    year: '2024',
    cover: '/projects/school-management/cover.png',
    screenshots: [
      { src: '/projects/school-management/cover.png', alt: 'School management dashboard' },
    ],
    technologies: ['PHP', 'MySQL', 'JavaScript', 'Tailwind CSS'],
    role: 'Full-stack Developer',
    links: {},
    overview:
      'A multi-module platform for managing core school operations — students, classes and records — through a unified administrative interface.',
    problem:
      'Schools handle many interconnected records across students, classes and staff. Fragmented tools make this hard to manage.',
    solution:
      'A modular system where each area (students, classes, records) is handled through dedicated screens sharing a common layout and data model.',
    features: [
      'Student records management',
      'Class and module organization',
      'Role-based administrative views',
      'Reusable interface components',
    ],
    challenges:
      'Coordinating multiple modules around a shared data model while keeping navigation clear.',
    result:
      'An academic project demonstrating modular architecture and multi-entity data management.',
  },
  {
    slug: 'import-tax',
    name: 'Import Tax Management System',
    tagline: 'Import products, taxation, payments and reporting.',
    category: 'Business System',
    type: 'Academic Project',
    year: '2025',
    cover: '/projects/import-tax/cover.png',
    screenshots: [
      { src: '/projects/import-tax/cover.png', alt: 'Import tax management dashboard' },
    ],
    technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    role: 'Full-stack Developer',
    links: {},
    overview:
      'An academic project management system focused on import products, taxation, payments and reporting — modeling how import duties are calculated and tracked.',
    problem:
      'Import taxation involves many moving parts: products, rates, payments and reports. The academic goal was to model this workflow end to end.',
    solution:
      'A database-driven system that records import products, applies tax logic, tracks payments and generates reporting views.',
    features: [
      'Import product records',
      'Tax calculation logic',
      'Payment tracking',
      'Reporting and summaries',
    ],
    challenges:
      'Modeling taxation rules accurately and keeping payment and reporting data consistent.',
    result:
      'An academic prototype that demonstrates workflow modeling, calculations and reporting — not a deployed government or commercial system.',
  },
]

export const featuredProject = projects.find((p) => p.featured)!
export const otherProjects = projects.filter((p) => !p.featured)

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
