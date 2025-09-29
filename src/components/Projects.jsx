"use client"

import { useState, useEffect, useRef } from "react"
import "./Projects.css"

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const projects = [
    {
      id: 1,
      title: "Weather App",
      description: "Interactive Weather App – Application using the OpenWeatherMap API to display real-time weather data. Users can search cities, view multi-day forecasts, and manage favorite locations.",
      image: "images/projects/Weather.png",
      techStack: ["React", "API", "CSS"],
      liveLink: "https://weather022.netlify.app/",
      codeLink: "https://github.com/TaherTirar/Weather",
    },
    {
      id: 2,
      title: "Travel Booking Platform",
      description: "UX research and design for a travel booking platform, focusing on simplifying the booking process.",
      image: "https://via.placeholder.com/600x400",
      techStack: ["User Research", "Wireframing", "Usability Testing"],
      liveLink: "https://example.com",
      codeLink: "https://github.com/example",
    },
    {
      id: 3,
      title: "Travel Booking Platform",
      description: "UX research and design for a travel booking platform, focusing on simplifying the booking process.",
      image: "https://via.placeholder.com/600x400",
      techStack: ["User Research", "Wireframing", "Usability Testing"],
      liveLink: "https://example.com",
      codeLink: "https://github.com/example",
    },
    {
      id: 4,
      title: "Travel Booking Platform",
      description: "UX research and design for a travel booking platform, focusing on simplifying the booking process.",
      image: "https://via.placeholder.com/600x400",
      techStack: ["User Research", "Wireframing", "Usability Testing"],
      liveLink: "https://example.com",
      codeLink: "https://github.com/example",
    },
    {
      id: 5,
      title: "To Do List App",
      description:
        "A simple To-Do List app where users can add, edit, and delete tasks with priorities and deadlines. It features notifications, a dark/light mode toggle, and a clean, modern design.",
      image: "images/projects/ToDoImage.png",
      techStack: ["React", "Hooks", "notifications"],
      liveLink: "https://tahertirar.github.io/ToDo/",
      codeLink: "https://github.com/TaherTirar/ToDo",
    },
  ]


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

        <div className={`projects-grid ${isVisible ? "visible" : ""}`}>
          {projects.map((project, index) => (
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
      </div>
    </section>
  )
}

export default Projects
