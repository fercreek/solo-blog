# Fernando Castañeda - Strategic Operator

*Last updated: January 2026*

Personal site built with React, positioned around the **6FE methodology**: from "Senior Dev CV" to proof of an **Independent Operator with systemic discipline**. Live at [fercontreras.com](https://fercontreras.com)

**Core idea:** *Engineering is a precision system, like a financial market or a bachata choreography.* Trading (risk) and dancing (discipline, rhythm) support the narrative, not as curiosities but as evidence of how I operate.

## 🚀 Features

- **6FE Positioning**: Strategic Operator, Stack→Output→Outcome, no skill lists
- **Bilingual**: English and Spanish for all content
- **Responsive**: Mobile-first, Solo Leveling–inspired UI
- **Modern Stack**: React 19, Vite, Styled Components
- **Performance**: Lazy loading, code splitting
- **Rich Content**: Markdown with syntax highlighting

## 📐 6FE Methodology

- **Positioning**: Strategic Operator instead of "senior developer CV"
- **Framework**: Stack → Output → Outcome for experience and projects
- **No skill lists**: Emphasis on Professional Systems and execution
- **Dancer & Trader**: Discipline, rhythm, risk analysis as proof of how I work
- **Language**: Relief, certainty, precision, outcomes
- **Tone**: Direct, minimal, high authority

## 📄 Pages

- **Home**: Hero, featured projects, recent work
- **About**: Professional profile, experience (Stack→Output→Outcome), Beyond the Code
- **Projects**: Portfolio with leveling-style cards and status badges
- **Impossible List**: Personal goals tracker
- **Now**: Current activities and focus areas
- **Contact**: Email, GitHub, LinkedIn

## 🛠️ Tech Stack

- **Frontend**: React 19, React Router DOM
- **Styling**: Styled Components with custom Solo Leveling theme
- **Internationalization**: Custom translation system (English/Spanish)
- **Build Tool**: Vite for fast development and optimized builds
- **Markdown**: React Markdown with syntax highlighting
- **Deployment**: Vercel with automatic deployments

## 🚀 Quick Start

### Prerequisites

- Node.js (v20 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd new-blog

# Install dependencies
npm install

# Start development server
npm run dev
```

The blog will be available at `http://localhost:5173`

### Build for Production

```bash
# Validate before commit (lint + build)
npm run validate

# Build the project
npm run build

# Preview the build
npm run preview
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

The site is configured for deployment on Vercel at **fercontreras.com**

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Configure domain** in Vercel dashboard to point to `fercontreras.com`

4. **Automatic deployments** are enabled on git push to main branch

### Environment Variables

No environment variables are required for this static site.

### Build Configuration

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

### Scripts

| Script     | Description                    |
|-----------|--------------------------------|
| `npm run dev`      | Start dev server               |
| `npm run build`    | Production build               |
| `npm run validate` | Lint + build (run before commit) |
| `npm run lint`     | Run ESLint                     |
| `npm run preview`  | Preview production build       |

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx       # Unified button (primary, secondary, ghost, outline)
│   ├── Footer.jsx
│   ├── ImpossibleList.jsx
│   ├── Layout.jsx
│   ├── LazyImage.jsx
│   ├── LazyPageLoader.jsx
│   ├── LevelingAnimation.jsx  # XP bars, stars, particles (Solo Leveling theme)
│   ├── MarkdownContent.jsx
│   ├── Navbar.jsx
│   ├── NowCard.jsx
│   ├── PageComponents.jsx
│   └── ProjectCard.jsx  # Unified project card with LevelingAnimation
├── contexts/           # React contexts
│   └── LanguageContext.jsx
├── data/               # Content data files
│   ├── about.js & aboutTranslations.js
│   ├── contact.js & contactTranslations.js
│   ├── impossible-list.js & impossibleListTranslations.js
│   ├── now.js & nowTranslations.js
│   ├── projects.js & projectsTranslations.js
├── hooks/              # Custom React hooks
│   └── useTranslation.js
├── pages/              # Page components
│   ├── AboutPage.jsx
│   ├── ContactPage.jsx
│   ├── HomePage.jsx
│   ├── ImpossibleListPage.jsx
│   ├── NowPage.jsx
│   └── ProjectsPage.jsx
├── styles/             # Global styles and themes
│   ├── animations.js
│   ├── designSystem.js
│   ├── keyframes.js
│   └── soloLevelingTheme.js
├── translations/       # Translation files
│   └── index.js
└── utils/              # Utility functions
    └── contentParser.js
```

## 🎨 Customization

### Adding New Content

1. **Update data files** in `src/data/` or use translation files (`*Translations.js`) for bilingual content
2. **Update translations** in `src/translations/index.js` for UI text
3. **Add new pages** by creating components in `src/pages/` and adding routes in `src/App.jsx`
4. **Update navigation** in `src/components/Navbar.jsx` with translations

### Internationalization

- All UI text is managed through `src/translations/index.js`
- Use the `useTranslation()` hook: `const { t } = useTranslation(); t('key.path')`
- Markdown content uses translation functions in `src/data/*Translations.js`
- Language preference is saved in localStorage

### Styling

- Global styles are in `src/index.css`
- Theme configuration in `src/styles/soloLevelingTheme.js`
- Component-specific styles use Styled Components
- Responsive design is built-in with mobile-first approach

## 📞 Contact

- **Email**: fercreek@gmail.com
- **GitHub**: [github.com/fercreek](https://github.com/fercreek)
- **LinkedIn**: [linkedin.com/in/fercreek](https://linkedin.com/in/fercreek)
- **Location**: Monterrey, Nuevo León, México

## 🌟 Featured Projects

### Production Projects

- **Studio Link**: [studiolink.online](https://studiolink.online/)  
  All-in-one management platform for academies and gyms. Automates attendance, payments, and schedules.

- **Vayla Dance**: [vayla.dance](https://www.vayla.dance/)  
  Professional dance competition platform with automated judging, scoring, and real-time results.

- **Litebox Parcel**: [liteboxparcel.com](https://www.liteboxparcel.com/)  
  Comprehensive parcel management system for USA→MX shipping with tracking, membership plans, and automated notifications.

### MVP Projects

- **Progreso Personal Finance**: [v0-progreso-personal-finance-ui.vercel.app](https://v0-progreso-personal-finance-ui.vercel.app/)  
  Personal finance management tool with payment plans, progress visualization, and savings goals.

- **Sin Bronca**: [sin-bronca.vercel.app](https://sin-bronca.vercel.app/)  
  Simple utility for splitting restaurant bills fairly between friends, eliminating disputes and manual calculations.

## 🔧 Development

### Adding Translations

1. Add new translation keys to `src/translations/index.js` in both `en` and `es` objects
2. Use the translation key in components: `t('your.key.path')`
3. For markdown content, add translations to corresponding `*Translations.js` files in `src/data/`

### Theme Customization

- Edit `src/styles/soloLevelingTheme.js` for color schemes and design tokens
- Component styles use Styled Components with theme access
- Animations are defined in `src/styles/keyframes.js` and `src/styles/animations.js`

### Performance Optimization

- Lazy loading for pages via React.lazy()
- Lazy loading for images via `LazyImage` component
- Code splitting handled by Vite automatically
- Optimized builds with minification and tree-shaking

## 📄 License

This project is private and proprietary.

---

**Built with ❤️ by Fernando Castañeda — 2026**  
**Live at**: [fercontreras.com](https://fercontreras.com)
