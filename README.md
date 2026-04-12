# Darshan Rahate — Software Developer & Automation Specialist

A high-performance, accessible, and SEO-optimized portfolio website built with technical credibility at its core.

![Lighthouse Scores](https://img.shields.io/badge/Lighthouse-100%2F100%2F100%2F100-brightgreen?style=for-the-badge)
![Deployment](https://img.shields.io/badge/Deployed-Cloudflare_Pages-blue?style=for-the-badge&logo=cloudflare)

## 🚀 Performance & Engineering Philosophy

This portfolio is not just a showcase of projects; it's a demonstration of technical excellence. "Show, don't just tell."

- **⚡ Elite Performance**: 100/100 Lighthouse performance. Achieved via **Zero Render-Blocking CSS** (inlined critical styles) and **Asset Optimization**.
- **🧩 Advanced Code Splitting**: Utilizes `React.lazy` and `Suspense` for component-level lazy loading, reducing the initial JavaScript payload by ~50%.
- **♿ Accessibility Focused**: WCAG-compliant color contrast, semantic HTML5, and full ARIA support for screen readers.
- **🔍 SEO Optimized**: Programmatic `sitemap.xml`, valid `robots.txt`, and comprehensive meta-tag strategy for search engine visibility.

## 🛠️ Tech Stack

- **Core**: React 19 + Vite 6
- **Styling**: Vanilla CSS (Custom Design System)
- **Icons**: React Icons (Tree-shaken)
- **Navigation**: React Scroll (Smooth SPA transitions)
- **Deployment**: Cloudflare Pages (Automated CI/CD via GitHub)

## 📁 Project Structure

```bash
├── public/              # Static assets (favicon, robots.txt, sitemap.xml)
├── src/
│   ├── components/      # Modular React components (Lazy-loaded)
│   ├── data/            # Project & skill data configurations
│   ├── hooks/           # Custom React hooks (useTheme)
│   ├── App.jsx          # Component-level code splitting & layout
│   ├── index.css        # Base design system
│   └── main.jsx         # App entry point
└── index.html           # Inlined critical CSS & Meta tags
```

## 🛠️ Local Development

1. **Clone the repo**
   ```bash
   git clone https://github.com/darshandevelopes/portfolio.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the dev server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📬 Contact

Let's build something efficient.

- **LinkedIn**: [in/darshan-rahate](https://www.linkedin.com/in/darshan-rahate/)
- **GitHub**: [@darshandevelopes](https://github.com/darshandevelopes)
- **Email**: darshanrahate01@gmail.com
