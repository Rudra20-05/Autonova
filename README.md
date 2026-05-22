# AutoNova — AI Automation Agency Portfolio

A production-ready, highly polished portfolio website for **AutoNova**, an AI Automation Agency. Built with Next.js 15, Tailwind CSS v3, and Framer Motion.

> [!IMPORTANT]
> **AI Coding Assistant / Copilot Guide**: This README contains critical project constraints, styling architectural choices, and context that you must read before writing code or modifying this repository.

## 🚀 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 15** (App Router) | Framework — SSR, routing, API routes |
| **TypeScript** | Type safety |
| **Tailwind CSS v3** | Utility-first styling (migrated from v4 for opacity modifier support) |
| **Framer Motion v12** | Interactive animations and transitions |
| **next-themes** | Dark/light theme management |
| **Resend** | Contact form email delivery |

---

## 🎨 Styling Architecture (Tailwind v3 Integration)

We migrated from **Tailwind v4** back to **Tailwind v3** due to limitations in v4's variable-based `@theme` parsing which broke opacity modifiers (`bg-primary/10`, `shadow-primary/30`, etc.). 

To maintain correct opacity modifier behavior in Tailwind v3, CSS variables are defined in [globals.css](file:///c:/Users/RUDRA%20DALVI/OneDrive%20-%20Vidyalankar%20Institute%20of%20Technology/Documents/AutoNova%20Portfolio/src/app/globals.css) as **space-separated RGB values** (no commas):

```css
:root {
  --primary: 90 75 209;         /* Represents rgb(90, 75, 209) */
  --bg-primary: 250 250 250;
  ...
}
```

These are mapped in [tailwind.config.ts](file:///c:/Users/RUDRA%20DALVI/OneDrive%20-%20Vidyalankar%20Institute%20of%20Technology/Documents/AutoNova%20Portfolio/tailwind.config.ts) using the `<alpha-value>` placeholder:

```typescript
primary: 'rgb(var(--primary) / <alpha-value>)',
```

### ⚠️ Coding Rule for CSS Styles
* **Opacity Modifiers**: Always use Tailwind's `/` syntax for opacity (e.g., `bg-primary/10` or `text-text-secondary/50`). Do not hardcode opaque colors if variables are expected to adapt.
* **Framer Motion Easing**: Framer Motion v12 has strict typing for `ease`. Always suffix ease options with `as const` (e.g., `ease: 'easeOut' as const`) to prevent TypeScript compilation errors.
* **Font Import**: Google Fonts `@import` must remain at the absolute top of `globals.css` above `@tailwind` directives to prevent PostCSS parsing warnings/errors.

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router routes & pages
│   ├── layout.tsx          # Root layout (incorporates Navigation, Footer, ThemeProvider)
│   ├── page.tsx            # Home page (interactive dashboard)
│   ├── globals.css         # Styling system & utility base layers
│   ├── services/           # Services section
│   ├── portfolio/          # Portfolio grid with expanding case studies
│   ├── about/              # About page (System Genesis, Origin, Founders)
│   ├── contact/            # Contact form & Calendly widget
│   └── api/contact/        # Contact rate-limited API route (Resend)
├── components/
│   ├── Navbar.tsx          # Sticky blur nav
│   ├── Footer.tsx          # Client-styled footer
│   ├── ui/                 # Atomic design UI elements (Button, Card, Section, Badge)
│   └── features/           # Interactive components (Marquee, Counters, Tab Selectors)
├── data/                   # JSON-like data stores (team.ts, services.ts, etc.)
├── providers/              # React theme provider wrappers
└── lib/                    # Helper functions (utils.ts)
```

---

## 🛠️ Getting Started

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Setup environments
cp .env.example .env.local

# 3. Spin up development server
npm run dev
```

The site will run on [http://localhost:3000](http://localhost:3000).

---

## 📋 Roadmaps & Active Tasks

### Completed ✅
- **Design System & Layouts**: Full setup of custom theme toggler, glassmorphism UI card components, and responsiveness.
- **About Section Redesign**: Styled according to current AutoNova visual screenshots. The Founders grid is populated with real founders (`M Sreejith`, `Aryan Nate`, `Zayd Baig`), roles, and custom bio details.
- **Client Footer**: Updated to display exact brand copy and services columns (`WORKFLOW AUTOMATION`, `AI NEURAL CHATBOTS`, `CRM INTEGRATION`, `CUSTOM PROTOCOLS`).

### Up Next 🚀
- **Data Cleanups**: Change remaining dummy text and fake statistics in `src/data/services.ts`, `src/data/caseStudies.ts`, and `src/data/testimonials.ts` to real clients and projects.
- **Interactive Component Audits**: Walkthrough of page behaviors, verifying cross-device responsiveness and smooth animation states.
- **Integrations**: Insert real Calendly URLs and verify Resend API form submission parameters.

---

## 🚢 Production Deployment

The project builds via Next.js static and dynamic optimization routes:
```bash
npm run build
```
Verify that the output reports **zero errors** and **zero warnings** before pushing to production branch.
