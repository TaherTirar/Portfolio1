"use client"

import { useState, useEffect } from "react"
import "./Header.css"

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Update active section based on scroll position
      const sections = ["home", "projects", "about", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId)
    setMobileMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo">
          <a href="#home">Taher's Portfolio</a>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a
                href="#home"
                onClick={() => handleNavClick("home")}
                className={activeSection === "home" ? "active" : ""}
              >
                Home
              </a>
            </li>
            
            <li>
              <a
                href="#about"
                onClick={() => handleNavClick("about")}
                className={activeSection === "about" ? "active" : ""}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => handleNavClick("projects")}
                className={activeSection === "projects" ? "active" : ""}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => handleNavClick("contact")}
                className={activeSection === "contact" ? "active" : ""}
              >
                Contact
              </a>
            </li>
          </ul>
          <button
            className={`theme-toggle ${darkMode ? "dark" : "light"}`}
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
