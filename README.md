# Fernando Castañeda - Personal Blog

A modern personal blog built with React, showcasing my journey as a software engineer, dancer, and trader.

## 🚀 Features

- **Responsive Design**: Optimized for all devices
- **Modern Stack**: Built with React, Vite, and Styled Components
- **Fast Performance**: Optimized for speed and SEO
- **Easy Navigation**: Clean and intuitive user interface
- **Markdown Support**: Rich content rendering with syntax highlighting

## 📄 Pages

- **Home**: Introduction and overview
- **About**: Detailed background and achievements
- **Projects**: Showcase of current projects (Studio Link, Vayla Dance)
- **Impossible List**: Personal goals and achievements tracker
- **Now**: Current activities and focuses
- **Contact**: Get in touch

## 🛠️ Tech Stack

- **Frontend**: React 19, React Router DOM
- **Styling**: Styled Components
- **Build Tool**: Vite
- **Deployment**: Vercel
- **Content**: Markdown with syntax highlighting

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
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
# Build the project
npm run build

# Preview the build
npm run preview
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow the prompts** to configure your deployment

### Deploy to Netlify

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to Netlify via their web interface or CLI

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Footer.jsx
│   ├── Layout.jsx
│   ├── MarkdownContent.jsx
│   └── Navbar.jsx
├── data/               # Content data files
│   ├── about.js
│   ├── contact.js
│   ├── impossible-list.js
│   ├── now.js
│   └── projects.js
├── pages/              # Page components
│   ├── AboutPage.jsx
│   ├── ContactPage.jsx
│   ├── HomePage.jsx
│   ├── ImpossibleListPage.jsx
│   ├── NowPage.jsx
│   └── ProjectsPage.jsx
└── styles/             # Global styles
```

## 🎨 Customization

### Adding New Content

1. **Update data files** in `src/data/` to modify page content
2. **Add new pages** by creating components in `src/pages/`
3. **Update navigation** in `src/components/Navbar.jsx`
4. **Add routes** in `src/App.jsx`

### Styling

- Global styles are in `src/index.css`
- Component-specific styles use Styled Components
- Responsive design is built-in

## 📞 Contact

- **Email**: fercreek@gmail.com
- **Website**: [Studio Link](https://studiolink.online/)
- **Dance Platform**: [Vayla Dance](https://vayla.dance/)

## 📄 License

This project is private and proprietary.

---

**Built with ❤️ by Fernando Castañeda**
