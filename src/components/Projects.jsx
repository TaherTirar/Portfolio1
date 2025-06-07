"use client"

import { useState, useEffect, useRef } from "react"
import "./Projects.css"

const Projects = () => {
  const [filter, setFilter] = useState("all")
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const projects = [
    {
      id: 1,
      title: "E-commerce Website Redesign",
      description:
        "A complete redesign of an e-commerce platform focusing on improving the user journey and increasing conversion rates.",
      image: "https://via.placeholder.com/600x400",
      category: "ui-design",
      techStack: ["Figma", "Prototyping", "User Testing"],
      liveLink: "https://example.com",
      codeLink: "https://github.com/example",
    },
    {
      id: 2,
      title: "Finance App UI Kit",
      description: "A comprehensive UI kit for finance applications with over 200 components and 50 screens.",
      image: "https://via.placeholder.com/600x400",
      category: "ui-design",
      techStack: ["Sketch", "Illustrator", "Design System"],
      liveLink: "https://example.com",
      codeLink: "https://github.com/example",
    },
    {
      id: 3,
      title: "Travel Booking Platform",
      description: "UX research and design for a travel booking platform, focusing on simplifying the booking process.",
      image: "https://via.placeholder.com/600x400",
      category: "ux-research",
      techStack: ["User Research", "Wireframing", "Usability Testing"],
      liveLink: "https://example.com",
      codeLink: "https://github.com/example",
    },
    {
      id: 4,
      title: "Health & Fitness App",
      description:
        "A mobile app design for tracking fitness activities and nutrition with personalized recommendations.",
      image: "https://via.placeholder.com/600x400",
      category: "mobile-app",
      techStack: ["Figma", "Prototyping", "Animation"],
      liveLink: "https://example.com",
      codeLink: "https://github.com/example",
    },
    {
      id: 5,
      title: "Dashboard UI Design",
      description: "A clean and modern dashboard interface for a SaaS platform with data visualization components.",
      image: "https://via.placeholder.com/600x400",
      category: "ui-design",
      techStack: ["Adobe XD", "Illustrator", "Design System"],
      liveLink: "https://example.com",
      codeLink: "https://github.com/example",
    },
    {
      id: 6,
      title: "Restaurant Ordering System",
      description:
        "A user-friendly ordering system for restaurants that improves the ordering experience for customers.",
      image: "https://via.placeholder.com/600x400",
      category: "ux-research",
      techStack: ["User Flows", "Wireframing", "Usability Testing"],
      liveLink: "https://example.com",
      codeLink: "https://github.com/example",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.2,
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of my recent projects showcasing my skills in UI/UX design and problem-solving.
        </p>

        <div className="project-filters">
          <button className={`filter-btn ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>
            All Projects
          </button>
          <button
            className={`filter-btn ${filter === "ui-design" ? "active" : ""}`}
            onClick={() => setFilter("ui-design")}
          >
            UI Design
          </button>
          <button
            className={`filter-btn ${filter === "ux-research" ? "active" : ""}`}
            onClick={() => setFilter("ux-research")}
          >
            UX Research
          </button>
          <button
            className={`filter-btn ${filter === "mobile-app" ? "active" : ""}`}
            onClick={() => setFilter("mobile-app")}
          >
            Mobile Apps
          </button>
        </div>

        <div className={`projects-grid ${isVisible ? "visible" : ""}`}>
          {filteredProjects.map((project, index) => (
            <div className="project-card" key={project.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      View Project
                    </a>
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <a href="#contact" className="btn primary-btn">
            Let's Work Together
          </a>
          <a href="#" className="btn secondary-btn">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
