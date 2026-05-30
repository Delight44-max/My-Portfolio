# Delight Eboagoro — Personal Portfolio

A professional, SEO-optimised portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

---

## 📦 What's Included

- **Hero** — Name, role, tagline, social links, profile photo
- **About** — Bio, education, highlights, second photo
- **Skills** — Technical skill bars + soft skills grid
- **Projects** — Featured + regular project cards (you add URLs)
- **Contact** — WhatsApp, LinkedIn, GitHub links
- **Footer** — Clean, dark footer

---

## 🖼️ Step 1 — Add Your Photos

Open the folder `public/images/` and replace the two placeholder files:

| File | Used In | Ideal Size |
|------|---------|-----------|
| `profile.jpg` | Hero section (main big photo) | 800×1000px, portrait |
| `about.jpg` | About section | 600×800px, candid/work shot |

**Tips for fast loading:**
1. Go to [squoosh.app](https://squoosh.app)
2. Upload your photo, set format to **WebP** or **JPEG**
3. Set quality to **80%**
4. Download — each file should be **under 200KB**
5. Rename to `profile.jpg` / `about.jpg` and drop into `public/images/`

> Note: If you use `.webp` format, also rename references in `Hero.tsx` and `About.tsx` from `profile.jpg` → `profile.webp`

---

## 🌐 Step 2 — Add Your Projects

Open `lib/projects.ts` — this is the **only file you edit** to add projects.

```typescript
{
  id: 2,                          // Unique number
  title: "My App Name",
  description: "What it does and who it helps.",
  url: "https://my-app.vercel.app",  // ← Paste your live URL here
  tags: ["Next.js", "TypeScript"],   // Tech stack
  featured: false,                    // true = shown large at top
  status: "live",                     // "live" | "wip" | "archived"
},
```

Copy the template block and fill in your details. Save the file — the site updates automatically.

---

## ⚙️ Step 3 — Install & Run Locally

Make sure you have **Node.js 18+** installed. Then:

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

---

## 🚀 Step 4 — Deploy to Vercel

### Option A — Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy (follow the prompts)
vercel

# For production deployment
vercel --prod
```

### Option B — Vercel Dashboard

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and click **"New Project"**
3. Import your GitHub repo
4. Leave all settings as default — Vercel auto-detects Next.js
5. Click **Deploy** ✅

### Build command (if asked):
```
npm run build
```

### Output directory (if asked):
```
out
```

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css        ← Fonts, colors, animations
│   ├── layout.tsx         ← SEO metadata
│   └── page.tsx           ← Main page
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx       ← Reads from lib/projects.ts
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── ScrollReveal.tsx
├── lib/
│   └── projects.ts        ← ✏️ ADD YOUR PROJECT URLs HERE
├── public/
│   └── images/
│       ├── profile.jpg    ← 📸 Replace with your photo
│       └── about.jpg      ← 📸 Replace with your photo
└── README.md
```

---

## 🎨 Customisation

All design tokens (colors, fonts) are in `app/globals.css` under `:root { }`.

To change the accent color from deep crimson to something else:
```css
--crimson: #be123c;       /* Main accent */
--crimson-light: #f43f5e; /* Hover states */
--crimson-pale: #fff1f2;  /* Backgrounds */
```

---

## 🔍 SEO

The site is already SEO-optimised with:
- Title, description, keywords meta tags
- OpenGraph tags (for LinkedIn/Twitter previews)
- Semantic HTML structure
- Fast image loading with Next.js `<Image>`
- `robots: index, follow`

---

Built with ❤️ for Delight Eboagoro by Claude.
