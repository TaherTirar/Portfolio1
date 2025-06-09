"use client"

import { useState, useEffect, useRef } from "react"
import "./Skills.css"

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const designSkills = [
    { name: "UI Design", percentage: 95 },
    { name: "UX Research", percentage: 90 },
    { name: "Responsive Design", percentage: 93 },
    { name: "Wireframing", percentage: 89 },
    { name: "Prototyping", percentage: 83 },
    { name: "User Testing", percentage: 75 },
    { name: "Figma", percentage: 66 },
  ]

  const toolSkills = [
    { name: "Figma", percentage: 66 },
    { name: "Canva", percentage: 95 },
    { name: "Photoshop", percentage: 50 },
    { name: "Illustrator", percentage: 65 },
    { name: "Pen & Paper", percentage: 80 },
    { name: "Sketch", percentage: 55 },
  ]

  const codingSkills = [
    { name: "JavaScript", percentage: 80 },
    { name: "React", percentage: 75 },
    { name: "Responsive Design", percentage: 95 },
    { name: "Tailwind CSS", percentage: 80 },
    { name: "Node.js", percentage: 65 },
    { name: "Git & GitHub", percentage: 85 },
    { name: "SASS/SCSS", percentage: 85 },
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
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">
          I craft <b>responsive</b>, user-friendly <b>web interfaces</b> with clean code, modern design principles, and a sharp eye for detail.
        </p>

        <div className="skills-container">
          <div className="skills-category">
            <h3>Design Skills</h3>
            <div className="skills-list">
              {designSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className={`skill-progress ${isVisible ? "animate" : ""}`}
                      style={{ width: `${skill.percentage}%`, transitionDelay: `${index * 0.1}s` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3>Design Tools</h3>
            <div className="skills-list">
              {toolSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className={`skill-progress ${isVisible ? "animate" : ""}`}
                      style={{ width: `${skill.percentage}%`, transitionDelay: `${index * 0.1 + 0.5}s` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3>Development</h3>
            <div className="skills-list">
              {codingSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className={`skill-progress ${isVisible ? "animate" : ""}`}
                      style={{ width: `${skill.percentage}%`, transitionDelay: `${index * 0.1 + 1}s` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="skills-cards">
          <div className="skill-card">
            <div className="skill-card-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
            </div>
            <h3>User Experience</h3>
            <p>Creating intuitive and enjoyable user experiences through research and thoughtful design.</p>
          </div>

          <div className="skill-card">
            <div className="skill-card-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </div>
            <h3>UI Design</h3>
            <p>Crafting beautiful, modern interfaces with attention to detail and visual hierarchy.</p>
          </div>

          <div className="skill-card">
            <div className="skill-card-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
              </svg>
            </div>
            <h3>Prototyping</h3>
            <p>Building interactive prototypes to test and validate design solutions before development.</p>
          </div>

          <div className="skill-card">
            <div className="skill-card-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
            </div>
            <h3>Frontend Development</h3>
            <p>Implementing designs with clean, responsive code to ensure pixel-perfect results.</p>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Skills
