// ============================================================
// ADD YOUR PROJECTS HERE
// Each project needs: title, description, url, tags (tech stack)
// Optional: featured: true (shows it prominently)
// ============================================================

export interface Project {
  id: number;
  title: string;
  description: string;
  url: string;
  tags: string[];
  featured?: boolean;
  status?: 'live' | 'wip' | 'archived';
}

export const projects: Project[] = [
  {
    id: 1,
    title: "LERA – Lagos Emergency Response App",
    description:
      "A Progressive Web App (PWA) built for Lagos, Nigeria that connects citizens to emergency responders in real-time. Features live location tracking, push notifications via Firebase, real-time Socket.IO communication, and role-based dashboards for citizens and responders.",
    url: "https://lera-frontend.vercel.app",
    tags: ["Next.js", "Spring Boot", "PostgreSQL", "Socket.IO", "Firebase", "TypeScript"],
    featured: true,
    status: "live",
  },
  // ─────────────────────────────────────────────────────────
  // TEMPLATE — copy and paste to add a new project:
  // {
  //   id: 2,
  //   title: "Your App Name",
  //   description: "Short description of what it does and who it's for.",
  //   url: "https://your-app.vercel.app",
  //   tags: ["Next.js", "TypeScript", "PostgreSQL"],
  //   featured: false,
  //   status: "live", // "live" | "wip" | "archived"
  // },
  // ─────────────────────────────────────────────────────────
];
