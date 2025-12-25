import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ServicesPage from './pages/ServicesPage'
import TaxiPage from './pages/TaxiPage'
import BlogPage from './pages/BlogPage'
import Footer from './components/footer'

function App() {
    return (
        <Router>
            <div className="App w-full bg-zinc-950 min-h-screen">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/taxi" element={<TaxiPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;