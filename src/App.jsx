import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy } from 'react'
import Layout from './components/Layout'
import LazyPageLoader from './components/LazyPageLoader'
import './App.css'

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const ImpossibleListPage = lazy(() => import('./pages/ImpossibleListPage'))
const NowPage = lazy(() => import('./pages/NowPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

function App() {
  return (
    <Router>
      <Layout>
        <LazyPageLoader>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/impossible-list" element={<ImpossibleListPage />} />
            <Route path="/now" element={<NowPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </LazyPageLoader>
      </Layout>
    </Router>
  )
}

export default App
