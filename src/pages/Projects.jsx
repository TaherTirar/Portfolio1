import ProjectCard from "../components/ProjectCard"
import "./Projects.css"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description:
        "A fully responsive e-commerce platform with product filtering, cart functionality, and user authentication.",
      technologies: ["React", "CSS", "Firebase"],
      image: "/placeholder.svg?height=400&width=600",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description:
        "A weather application that displays current weather and forecasts for any location using a third-party API.",
      technologies: ["JavaScript", "HTML", "CSS", "API"],
      image: "/placeholder.svg?height=400&width=600",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A productivity application that helps users organize tasks with features like drag-and-drop, categories, and reminders.",
      technologies: ["React", "CSS", "LocalStorage"],
      image: "/placeholder.svg?height=400&width=600",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects and skills with a clean, responsive design.",
      technologies: ["React", "CSS", "Vite"],
      image: "/placeholder.svg?height=400&width=600",
      github: "https://github.com",
      live: "https://example.com",
    },
  ]

  return (
    <section className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
