import { Project, SkillCategory, ExperienceItem, EducationItem, AchievementItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Rumpa Koley',
  role: 'Full Stack Developer',
  headline: 'Building modern, high-performance web applications and resilient backend architectures.',
  bioShort:
    'Dedicated Full Stack Developer passionate about designing clean, accessible user experiences backed by scalable, fault-tolerant server systems. Experienced across the full product lifecycle from architecture to production deployment.',
  email: 'rumpakoley255@gmail.com',
  github: 'https://github.com/rumpakoley',
  linkedin: 'https://linkedin.com/in/rumpa-koley',
  location: 'Kolkata, India • Open to Global Remote Roles',
  availability: 'Available for Full-time Roles & Contracts',
  yearsOfExperience: '2+ Years',
  projectsCompleted: '15+',
  uptimeMindset: '99.9%',
  githubContributions: '850+',
};

export const PROJECTS: Project[] = [
  {
    id: 'devflow-hub',
    title: 'DevFlow — Developer Collaboration & Code Hub',
    shortDescription:
      'Real-time collaborative developer workspace featuring live code snippet sharing, automated syntax and diff analysis, and granular RBAC permissions.',
    category: 'Full Stack',
    technologies: ['React 19', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'WebSockets'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    liveDemoUrl: 'https://devflow-demo.example.com',
    sourceCodeUrl: 'https://github.com/rumpakoley/devflow-hub',
    featured: true,
    caseStudy: {
      problem:
        'Engineering teams frequently suffer from fragmented context when discussing code snippets, manual merge reviews, and ad-hoc knowledge sharing during remote pair-programming sessions.',
      solution:
        'Engineered an all-in-one developer collaboration suite with instant syntax highlighting, synchronized live cursors, contextual inline comments, and an automated git diff parser.',
      keyFeatures: [
        'Real-time multi-user cursor sync and markdown notes via WebSockets',
        'Interactive side-by-side git diff viewer with inline commentary threads',
        'Role-Based Access Control (RBAC) with organization workspaces and private snippet vaults',
        'Instant copyable cURL and language-specific export templates',
      ],
      architecture:
        'Client-side SPA built with React 19 and Tailwind CSS consuming an Express REST & WebSocket API gateway. Data persistence handled via PostgreSQL with connection pooling and Redis for active session caching.',
      technologies: ['React 19', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Tailwind CSS', 'Docker'],
      contribution: [
        'Architected relational schema in PostgreSQL with composite indexing on workspace queries.',
        'Implemented WebSocket server handling concurrency up to 500 simultaneous collaborators per channel.',
        'Designed keyboard-first UI with dark mode support and custom syntax highlighting theme.',
      ],
      outcome:
        'Successfully delivered sub-80ms cursor sync latency, 99.9% uptime in benchmark testing, and cut peer review triage time by 35% in pilot trials.',
      metrics: [
        { label: 'Sync Latency', value: '< 80ms' },
        { label: 'Uptime Tested', value: '99.95%' },
        { label: 'Lighthouse Score', value: '98/100' },
      ],
    },
  },
  {
    id: 'cloudmetrics-telemetry',
    title: 'CloudMetrics — Distributed API Monitoring & Uptime Platform',
    shortDescription:
      'Real-time telemetry and service health dashboard monitoring microservice latencies, HTTP status distributions, and automated webhook alerts.',
    category: 'Full Stack',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'Redis', 'Tailwind CSS', 'Chart Engine'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    liveDemoUrl: 'https://cloudmetrics.example.com',
    sourceCodeUrl: 'https://github.com/rumpakoley/cloudmetrics-platform',
    featured: true,
    caseStudy: {
      problem:
        'Small-to-medium web services often lack accessible, real-time visual telemetry for API endpoint degradations before end users file customer complaints.',
      solution:
        'Developed a lightweight, high-frequency synthetic monitor that pings microservices at custom intervals, calculates P95/P99 latency percentiles, and triggers automatic Slack/Discord alerts upon anomalies.',
      keyFeatures: [
        'Automated synthetic HTTP/REST endpoint health checks every 30 seconds',
        'P50, P95, and P99 latency percentile calculations with dynamic timeline visualizers',
        'Instant incident alerting via Webhook dispatchers (Slack, Email, Discord)',
        'Public status page generator for client transparency',
      ],
      architecture:
        'Asynchronous event loop in Express leveraging Redis Pub/Sub for worker task distribution. Ingests raw telemetry points, aggregates windowed metrics, and broadcasts live dashboard updates.',
      technologies: ['TypeScript', 'React', 'Express', 'Redis Pub/Sub', 'Tailwind CSS', 'Docker'],
      contribution: [
        'Implemented the worker scheduler engine to handle round-robin health check pings.',
        'Created high-performance time-series charts rendering 5,000+ data points smoothly at 60 FPS.',
        'Implemented customizable notification thresholds with debounced incident triggers.',
      ],
      outcome:
        'Reduced mean time to detect (MTTD) outages from 15 minutes to under 45 seconds for monitored test suites.',
      metrics: [
        { label: 'Check Frequency', value: '30s' },
        { label: 'MTTD Reduction', value: '-85%' },
        { label: 'Render Performance', value: '60 FPS' },
      ],
    },
  },
  {
    id: 'nexusmart-storefront',
    title: 'NexusMart — Headless E-Commerce Suite',
    shortDescription:
      'Ultra-fast headless commerce platform with instantaneous client-side faceted filtering, persistent cart state, and order tracking.',
    category: 'Full Stack',
    technologies: ['React 19', 'TypeScript', 'Express', 'MongoDB', 'Tailwind CSS', 'REST API'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    liveDemoUrl: 'https://nexusmart-store.example.com',
    sourceCodeUrl: 'https://github.com/rumpakoley/nexusmart-ecommerce',
    featured: true,
    caseStudy: {
      problem:
        'Traditional monolithic e-commerce platforms suffer from bloated bundles, slow navigation transitions, and poor mobile checkout conversion rates.',
      solution:
        'Built a decoupled headless storefront featuring optimistic UI updates, millisecond search indexing, persistent cart synchronization, and an administrative inventory control center.',
      keyFeatures: [
        'Sub-100ms multi-facet catalog filtering (price, category, stock, rating)',
        'Optimistic cart mutations with offline localStorage fallback and sync',
        'Admin inventory dashboard with batch status toggles and stock alerts',
        'Fully responsive checkout experience tested on mobile and tablet form factors',
      ],
      architecture:
        'React frontend styled with Tailwind CSS utilizing optimistic mutation patterns. Express API layer handling order validation, stock constraints, and MongoDB transactional operations.',
      technologies: ['React', 'TypeScript', 'Express', 'MongoDB', 'Tailwind CSS', 'Vite'],
      contribution: [
        'Designed normalized MongoDB document structures for product variations and nested categories.',
        'Implemented client-side memoized search algorithms avoiding redundant network trips.',
        'Added accessible form controls compliant with WCAG 2.1 AA specifications.',
      ],
      outcome:
        'Achieved a 99 Lighthouse performance score and 0 cumulative layout shift (CLS) across mobile devices.',
      metrics: [
        { label: 'Lighthouse Performance', value: '99/100' },
        { label: 'Search Latency', value: '< 25ms' },
        { label: 'Cumulative Layout Shift', value: '0.00' },
      ],
    },
  },
  {
    id: 'taskorbit-kanban',
    title: 'TaskOrbit — Agile Sprint & Kanban Platform',
    shortDescription:
      'Intuitive project tracking board with smooth drag-and-drop column workflows, checklist progress meters, and audit activity logs.',
    category: 'Frontend',
    technologies: ['React', 'TypeScript', 'Motion', 'Tailwind CSS', 'Local State Engine'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80',
    liveDemoUrl: 'https://taskorbit.example.com',
    sourceCodeUrl: 'https://github.com/rumpakoley/taskorbit-planner',
    featured: false,
    caseStudy: {
      problem:
        'Standard project management tools are often weighed down with sluggish animations, cluttered navigation bars, and steep learning curves for agile teams.',
      solution:
        'Created a minimalist, distraction-free Kanban board with responsive drag-and-drop feedback, quick keyboard shortcuts, and granular subtask progress tracking.',
      keyFeatures: [
        'Fluid drag-and-drop card movements between customizable workflow columns',
        'Nested checklists with auto-calculating completion meters',
        'Tags, priority badges, and due date countdown badges',
        'Export/Import board configurations as JSON for easy portability',
      ],
      architecture:
        'Engineered in React 19 using Motion for physics-based layout transitions and deterministic state reducer patterns to eliminate race conditions.',
      technologies: ['React 19', 'TypeScript', 'Motion', 'Tailwind CSS', 'Vite'],
      contribution: [
        'Developed custom drag-and-drop collision algorithms ensuring snappy response on touchscreens.',
        'Created keyboard navigation shortcuts for rapid task creation (Cmd+K / Enter).',
        'Built full dark/light theme switching with smooth color transitions.',
      ],
      outcome:
        'Delivered 60 FPS drag transitions with zero frame drops across modern desktop and mobile browsers.',
      metrics: [
        { label: 'Animation Frame Rate', value: '60 FPS' },
        { label: 'Bundle Size', value: '< 45 KB' },
        { label: 'Keyboard Usability', value: '100%' },
      ],
    },
  },
  {
    id: 'docusynth-markdown',
    title: 'DocuSynth — Technical Documentation Knowledge Base',
    shortDescription:
      'Minimalist technical knowledge base with live markdown parsing, deep text search, table-of-contents generation, and code highlighting.',
    category: 'Backend / API',
    technologies: ['TypeScript', 'Node.js', 'Express', 'Markdown AST', 'Tailwind CSS'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    liveDemoUrl: 'https://docusynth.example.com',
    sourceCodeUrl: 'https://github.com/rumpakoley/docusynth-docs',
    featured: false,
    caseStudy: {
      problem:
        'Technical documentation generators often require complex build configurations, heavy runtimes, or external database setups just to serve simple Markdown files.',
      solution:
        'Designed an expressive documentation engine that parses raw Markdown files on-the-fly, generates hierarchical tables of contents, and enables fast full-text client indexing.',
      keyFeatures: [
        'Abstract Syntax Tree (AST) parsing for headings, code snippets, and custom admonitions',
        'Automated sticky table of contents with active section scroll spy',
        'One-click code snippet copy with visual status feedback',
        'Fast fuzzy search across all documentation articles',
      ],
      architecture:
        'Lightweight Express server providing cached AST endpoints, complemented by an accessible React viewer with semantic HTML elements.',
      technologies: ['TypeScript', 'Node.js', 'Express', 'React', 'Tailwind CSS'],
      contribution: [
        'Engineered the server-side Markdown tokenizer with custom syntax extension plugins.',
        'Created the client-side IntersectionObserver scroll-spy for documentation headings.',
        'Optimized CSS typography styles to guarantee optimal readability line length.',
      ],
      outcome:
        'Provided zero-config documentation generation loading in under 200ms cold start.',
      metrics: [
        { label: 'Cold Load Time', value: '< 200ms' },
        { label: 'SEO Score', value: '100/100' },
        { label: 'Accessibility', value: '100%' },
      ],
    },
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Frontend Development',
    description: 'Modern, component-driven UI architecture with responsive design and accessibility',
    skills: [
      { name: 'React 19 & 18', level: 'Core Expertise', experienceYears: '2+ yrs', description: 'Functional components, custom hooks, Suspense, and state optimization' },
      { name: 'TypeScript', level: 'Core Expertise', experienceYears: '2+ yrs', description: 'Strict typing, generics, utility types, and API contract safety' },
      { name: 'Next.js & Vite', level: 'Production Ready', experienceYears: '2 yrs', description: 'Fast build tooling, SSR concepts, and modular bundler setups' },
      { name: 'Tailwind CSS', level: 'Core Expertise', experienceYears: '2+ yrs', description: 'Utility-first styling, design token systems, and responsive layouts' },
      { name: 'HTML5 & Semantic Web', level: 'Core Expertise', experienceYears: '3+ yrs', description: 'WCAG 2.1 AA accessibility, ARIA landmarks, and SEO best practices' },
      { name: 'State Management (Zustand/Redux)', level: 'Production Ready', experienceYears: '2 yrs', description: 'Predictable state stores, selectors, and persistence middleware' },
      { name: 'Motion / Animations', level: 'Proficient', experienceYears: '1.5 yrs', description: 'Physics-based micro-interactions, layout transitions, and scroll effects' },
    ],
  },
  {
    category: 'Backend & APIs',
    description: 'Scalable server architecture, robust RESTful endpoints, and real-time communications',
    skills: [
      { name: 'Node.js', level: 'Core Expertise', experienceYears: '2+ yrs', description: 'Event-driven architecture, file streams, and asynchronous worker patterns' },
      { name: 'Express.js', level: 'Core Expertise', experienceYears: '2+ yrs', description: 'Middleware pipelines, routing, rate limiting, and CORS security' },
      { name: 'RESTful API Design', level: 'Core Expertise', experienceYears: '2+ yrs', description: 'Clean resource modeling, pagination, caching headers, and status codes' },
      { name: 'WebSockets', level: 'Production Ready', experienceYears: '1.5 yrs', description: 'Bi-directional live communication, room broadcasts, and reconnection logic' },
      { name: 'Python & FastAPI', level: 'Proficient', experienceYears: '1 yr', description: 'High-speed typed APIs, data validation, and asynchronous endpoints' },
      { name: 'Authentication & Security', level: 'Production Ready', experienceYears: '2 yrs', description: 'JWT tokens, bcrypt hashing, session cookies, and OWASP hardening' },
    ],
  },
  {
    category: 'Databases & Storage',
    description: 'Relational and NoSQL schemas, query optimization, and persistent stores',
    skills: [
      { name: 'PostgreSQL', level: 'Core Expertise', experienceYears: '2 yrs', description: 'Relational modeling, indexing strategies, foreign keys, and transactions' },
      { name: 'MongoDB', level: 'Production Ready', experienceYears: '2 yrs', description: 'Document schemas, aggregation pipelines, and indexing' },
      { name: 'Prisma & Drizzle ORM', level: 'Production Ready', experienceYears: '1.5 yrs', description: 'Type-safe database queries, automated migrations, and schema design' },
      { name: 'Redis', level: 'Proficient', experienceYears: '1 yr', description: 'In-memory caching, TTL expiration, and rate-limiting counters' },
      { name: 'SQL & Query Optimization', level: 'Production Ready', experienceYears: '2 yrs', description: 'Complex JOINs, subqueries, EXPLAIN ANALYZE, and indexing' },
    ],
  },
  {
    category: 'Programming Languages',
    description: 'Core languages utilized for algorithmic problem solving and production codebases',
    skills: [
      { name: 'TypeScript', level: 'Core Expertise', experienceYears: '2+ yrs', description: 'Primary language for enterprise frontend and server development' },
      { name: 'JavaScript (ES6+)', level: 'Core Expertise', experienceYears: '3+ yrs', description: 'Asynchronous patterns, closures, prototypes, and event loops' },
      { name: 'Python', level: 'Proficient', experienceYears: '2 yrs', description: 'Scripting, data transformation, and backend API services' },
      { name: 'SQL', level: 'Production Ready', experienceYears: '2 yrs', description: 'Database querying, schema definitions, and data normalization' },
      { name: 'C / C++', level: 'Proficient', experienceYears: '2 yrs', description: 'Foundation in memory management, data structures, and algorithms' },
    ],
  },
  {
    category: 'DevOps, Tools & Practices',
    description: 'Tools, workflows, and methodologies driving reliable product delivery',
    skills: [
      { name: 'Git & GitHub', level: 'Core Expertise', experienceYears: '3+ yrs', description: 'Branching strategies, pull requests, rebase workflows, and conflict resolution' },
      { name: 'Docker', level: 'Production Ready', experienceYears: '1.5 yrs', description: 'Multi-stage Dockerfiles, containerization, and docker-compose configurations' },
      { name: 'CI/CD GitHub Actions', level: 'Proficient', experienceYears: '1 yr', description: 'Automated test runners, linter checks, and deployment pipelines' },
      { name: 'Postman & API Testing', level: 'Core Expertise', experienceYears: '2+ yrs', description: 'Collection testing, automated mock servers, and environment variables' },
      { name: 'Linux & Bash', level: 'Production Ready', experienceYears: '2 yrs', description: 'Server administration, shell scripting, and process inspection' },
      { name: 'Agile & Code Reviews', level: 'Core Expertise', experienceYears: '2+ yrs', description: 'Sprint planning, clear documentation, and peer architecture reviews' },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Full Stack Developer',
    company: 'Freelance & Independent Client Projects',
    location: 'Remote',
    period: '2024 — Present',
    type: 'Freelance',
    description:
      'Partnering with founders, startups, and clients to design, build, and deploy production-ready full-stack web applications from concept to cloud.',
    responsibilities: [
      'Architected end-to-end full-stack web applications using React, TypeScript, Express, and PostgreSQL, consistently delivering ahead of schedule.',
      'Constructed scalable RESTful APIs equipped with robust input validation, rate limiting, and JWT authentication.',
      'Optimized client load times and accessibility across mobile and desktop, achieving 95+ Google Lighthouse metrics.',
      'Collaborated closely with clients to define product specifications, user stories, and milestone deliverables.',
    ],
    skills: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
  },
  {
    id: 'exp-2',
    role: 'Software Engineering Intern',
    company: 'TechSolutions Inc.',
    location: 'Hybrid',
    period: '2023 — 2024',
    type: 'Internship',
    description:
      'Contributed to core development of enterprise customer portal services and responsive dashboard modules.',
    responsibilities: [
      'Engineered and consumed modular REST API endpoints serving high-traffic administrative user consoles.',
      'Refactored legacy UI components into reusable TypeScript React modules, reducing code duplication by 30%.',
      'Wrote automated unit and integration tests using Vitest and React Testing Library, boosting code coverage.',
      'Participated in daily standups, sprint retrospectives, and thorough peer code reviews.',
    ],
    skills: ['TypeScript', 'React', 'Node.js', 'REST APIs', 'PostgreSQL', 'Git'],
  },
  {
    id: 'exp-3',
    role: 'Frontend Developer Intern',
    company: 'WebVibe Studios',
    location: 'Remote',
    period: '2022 — 2023',
    type: 'Internship',
    description:
      'Developed pixel-perfect, accessible client websites and landing pages adhering to strict design guidelines.',
    responsibilities: [
      'Translated Figma wireframes into responsive, cross-browser compatible layouts using modern CSS and React.',
      'Cut initial page load times by 40% through image optimization, lazy loading, and asset bundling strategies.',
      'Ensured full compliance with WCAG 2.1 AA accessibility standards for all public-facing navigation components.',
    ],
    skills: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5/CSS3', 'Figma', 'Accessibility (WCAG)'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
    institution: 'Techno Main Salt Lake / Maulana Abul Kalam Azad University of Technology',
    location: 'Kolkata, West Bengal, India',
    period: '2020 — 2024',
    grade: 'First Class with Distinction (CGPA: 8.8 / 10)',
    highlights: [
      'Graduated with honors in Computer Science & Engineering.',
      'Led the final-year capstone project: Distributed Microservice Orchestration with Real-time Telemetry.',
      'Active member of the University Technical Club and Competitive Programming Society.',
    ],
    coursework: [
      'Data Structures & Algorithms',
      'Database Management Systems (DBMS)',
      'Object-Oriented Programming',
      'Computer Networks',
      'Operating Systems',
      'Software Engineering & System Design',
      'Web Technologies',
      'Information Security',
    ],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'ach-1',
    title: 'Meta Certified Full Stack Web Developer',
    issuer: 'Meta / Coursera',
    date: '2024',
    category: 'Certification',
    credentialUrl: 'https://coursera.org/verify/professional-cert/meta-fullstack',
    description:
      'Rigorous multi-course certification covering React, Node.js, Express, databases, version control, and full-stack software development best practices.',
  },
  {
    id: 'ach-2',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    date: '2023',
    category: 'Certification',
    credentialUrl: 'https://aws.amazon.com/verification',
    description:
      'Demonstrated foundational knowledge of cloud concepts, security, architecture, compute (EC2/Lambda), storage (S3), and database services.',
  },
  {
    id: 'ach-3',
    title: '5-Star Problem Solving Badge & 300+ LeetCode Solved',
    issuer: 'HackerRank & LeetCode',
    date: '2023 — 2024',
    category: 'Coding',
    description:
      'Attained Gold 5-Star badge in Problem Solving on HackerRank and solved 300+ algorithm problems across trees, dynamic programming, and graphs on LeetCode.',
  },
  {
    id: 'ach-4',
    title: 'Finalist — National Smart Solutions Hackathon',
    issuer: 'National Student Technical Symposium',
    date: '2023',
    category: 'Hackathon',
    description:
      'Selected among top 10 teams out of 250+ entries for engineering a real-time civic grievance dashboard with automated geo-tagging.',
  },
];
