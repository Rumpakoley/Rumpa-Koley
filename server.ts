import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory rate limiting and storage for contact submissions
interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  ip: string;
}

const contactSubmissions: ContactMessage[] = [];
const rateLimitMap = new Map<string, number[]>();

// Rate limit helper: allow max 5 submissions per 5 minutes per IP
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 5 * 60 * 1000;
  const timestamps = (rateLimitMap.get(ip) || []).filter(t => now - t < windowMs);
  
  if (timestamps.length >= 5) {
    return false;
  }
  
  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return true;
}

// API Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// Contact Form Endpoint with validation & rate limiting
app.post('/api/contact', (req, res) => {
  const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown';

  // Honeypot spam check: if filled, reject silently or return simulated success
  const { name, email, subject, message, _honeypot } = req.body;
  if (_honeypot) {
    return res.status(200).json({
      success: true,
      message: 'Message sent successfully!',
      id: 'sub_bot_' + Date.now(),
    });
  }

  // Rate limiting check
  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({
      success: false,
      error: 'Too many messages sent. Please wait a few minutes before submitting again.',
    });
  }

  // Validation
  const errors: Record<string, string> = {};

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    errors.name = 'Please provide a valid name (at least 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!subject || typeof subject !== 'string' || subject.trim().length < 3) {
    errors.subject = 'Subject must be at least 3 characters.';
  }

  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long.';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      error: 'Validation failed. Please correct the errors and try again.',
      errors,
    });
  }

  const submission: ContactMessage = {
    id: 'sub_' + Math.random().toString(36).substring(2, 9) + Date.now().toString(36),
    name: name.trim(),
    email: email.trim(),
    subject: subject.trim(),
    message: message.trim(),
    createdAt: new Date().toISOString(),
    ip: clientIp,
  };

  contactSubmissions.unshift(submission);

  console.log(`[Contact Form] New submission from ${submission.name} <${submission.email}>: "${submission.subject}"`);

  return res.status(201).json({
    success: true,
    message: 'Thank you for reaching out! Your message has been sent successfully. I will get back to you within 24-48 hours.',
    submissionId: submission.id,
    timestamp: submission.createdAt,
  });
});

// Resume Download / Data Endpoint
app.get('/api/resume/download', (req, res) => {
  const resumeMarkdown = `
# RUMPA KOLEY
**Full Stack Developer**
Email: rumpakoley255@gmail.com | Location: Kolkata, India (Open to Remote & Relocation)
LinkedIn: linkedin.com/in/rumpa-koley | GitHub: github.com/rumpakoley

==================================================
PROFESSIONAL SUMMARY
==================================================
Passionate, results-driven Full Stack Developer with experience in architecting and delivering high-performance, accessible, and responsive web applications. Strong foundation in TypeScript, React, Node.js/Express, modern state management, and database architectures (PostgreSQL, MongoDB). Proven ability to translate complex business specifications into intuitive user interfaces and reliable backend microservices.

==================================================
CORE TECHNICAL SKILLS
==================================================
- Frontend: React 19, TypeScript, Next.js, Tailwind CSS, Redux Toolkit, Zustand, Motion/Framer, HTML5, CSS3, Vite
- Backend: Node.js, Express.js, RESTful API Design, GraphQL, WebSockets, Python, FastAPIs
- Databases & ORM: PostgreSQL, MongoDB, Redis, Prisma, Drizzle ORM, Supabase
- Tools & Cloud: Git, GitHub, Docker, Postman, Linux/Bash, CI/CD GitHub Actions, Vercel, Cloud Run
- Architecture & Practices: System Design, Clean Code, Agile/Scrum, OWASP Security, WCAG 2.1 Accessibility

==================================================
EXPERIENCE
==================================================
Full Stack Developer | Freelance & Contract
2024 - Present
- Architected and deployed end-to-end full-stack web applications for global clients using React, TypeScript, Express, and PostgreSQL.
- Implemented real-time collaboration tools with WebSockets, decreasing client sync latency by 45%.
- Maintained 99.9% uptime across production deployments with automated testing and continuous integration.

Software Engineering Intern | TechSolutions Inc.
2023 - 2024
- Collaborated with senior engineers to design and consume modular RESTful APIs powering enterprise customer portals.
- Refactored legacy frontend code into modular React components, boosting Google Lighthouse performance scores from 68 to 96.
- Authored comprehensive integration tests using Vitest and Jest, increasing test coverage by 30%.

Frontend Developer Intern | WebVibe Studios
2022 - 2023
- Built responsive, accessible user interfaces following Figma prototypes and WCAG AA guidelines.
- Optimized bundle sizes and lazy-loaded route components, cutting first contentful paint (FCP) time by 40%.

==================================================
FEATURED PROJECTS
==================================================
1. DevFlow - Developer Collaboration & Code Review Hub
   - Stack: React, TypeScript, Express, PostgreSQL, Redis, Tailwind CSS
   - Real-time code review workspace with automated diff analysis and granular RBAC.

2. CloudMetrics - Distributed API Monitoring & Uptime Platform
   - Stack: React, TypeScript, Express, WebSockets, Recharts
   - Real-time telemetry dashboard monitoring microservice uptime, latency, and automated alerts.

3. NexusMart - Headless E-Commerce Suite
   - Stack: React, TypeScript, Node.js, Express, MongoDB, Tailwind CSS
   - High-speed headless storefront with faceted search, cart state persistence, and simulated checkout flow.

4. TaskOrbit - Agile Project Management Platform
   - Stack: React, TypeScript, Express, Prisma, Tailwind CSS, Motion
   - Interactive sprint board with drag-and-drop mechanics, activity audit logs, and nested subtasks.

==================================================
EDUCATION
==================================================
Bachelor of Technology (B.Tech) in Computer Science & Engineering
2020 - 2024 | First Class with Distinction
Coursework: Data Structures & Algorithms, Database Systems, Computer Networks, Operating Systems, Software Architecture.

==================================================
CERTIFICATIONS & ACHEIVEMENTS
==================================================
- Meta Certified Full Stack Web Developer
- AWS Certified Cloud Practitioner
- 5-Star Problem Solving on HackerRank (300+ LeetCode problems solved)
- Finalist, National College Hackathon 2023
  `.trim();

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Content-Disposition', 'attachment; filename="Rumpa_Koley_Full_Stack_Developer_Resume.txt"');
  res.send(resumeMarkdown);
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
