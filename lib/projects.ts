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
        id: 3,
        title: "AURORA MOBILE AI HEALTH COMPANION",
        description:
          "Aurora is a mobile-first, AI-powered health companion that goes beyond simple tracking. Most health applications collect data and leave users to interpret it themselves. Aurora transforms that data into meaningful guidance by explaining what it means, why it matters, and what actions users should take.\n" +
            "\n" +
            "Through personalized insights, voice interactions, intelligent recommendations, and long-term memory, Aurora acts as a companion rather than just another health tracker.",
        url: "https://expo.dev/accounts/delight123/projects/aurora-health-companion/builds/c8ba5590-6c8c-47c0-8481-be409ccac6c9",
        tags: ["React Native + Expo SDK 54","Expo Router v6","Redux Toolkit","Python + FastAPI","PostgreSQL","Google Gemini 1.5 Flash","EAS Build + Render"],
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


    {
      id: 3,
    title: "field service report System",
      description: "for reporting monthy field service for congregation.",
      url: "https://field-service-report-system.vercel.app",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Java", "Spring boot", "Spring security",],
       featured: false,
      status: "live",
     },
];
