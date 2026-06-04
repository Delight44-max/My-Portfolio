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
    {
        id: 2,
        title: "BINANCE FUTURE TRADING BOT",
        description:
          "is a full-stack web application that allows users to simulate and place trades on the Binance Futures Testnet. It provides a clean dashboard to place Market, Limit, and Trailing Stop orders, while also showing account balances and open positions in real time.\n" +
            "\n" +
            "The system is designed with a FastAPI backend that securely handles Binance API interactions, and a modern Next.js frontend that provides an intuitive trading interface. It is built for learning, testing trading strategies, and understanding how algorithmic trading systems work.",
        url: "https://binance-futures-trading-bot-psi.vercel.app/",
        tags: ["Python", "Binance API", "Next.js","FastAPI"],
        featured: true,
        status: "live",
    }
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
