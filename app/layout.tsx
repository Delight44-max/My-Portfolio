import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eboagoro Jahdiebube Delight | Fullstack Engineer",
  description:
    "Fullstack Engineer specialising in Next.js, TypeScript, Java Spring Boot, Node.js and more. Based in Lagos, Nigeria. Trained at Semicolon Africa.",
  keywords: [
    "Fullstack Engineer",
    "Next.js developer",
    "TypeScript",
    "Java Spring Boot",
    "Lagos Nigeria developer",
    "Semicolon Africa",
    "Delight Eboagoro",
    "software engineer Nigeria",
    "React developer",
    "Node.js developer",
  ],
  authors: [{ name: "Eboagoro Jahdiebube Delight" }],
  creator: "Eboagoro Jahdiebube Delight",
  openGraph: {
    title: "Eboagoro Jahdiebube Delight | Fullstack Engineer",
    description:
      "Fullstack Engineer building impactful products with Next.js, Spring Boot, TypeScript and more.",
    type: "website",
    locale: "en_NG",
    siteName: "Delight Eboagoro Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eboagoro Jahdiebube Delight | Fullstack Engineer",
    description: "Fullstack Engineer • Lagos, Nigeria • Semicolon Africa Alum",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="noise-bg">{children}</body>
    </html>
  );
}
