"use client"

import { useState, useEffect, useRef } from "react"
import "./About.css"

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const experiences = [
    {
      year: "2025 - Present",
      title: "Data Entry & Structuring",
      company: "Charika (Internship)",
      description:
        "Organizing and structuring company data using Excel. Improved file clarity and supported basic data tasks to help team efficiency.",
    },
    {
      year: "March 2025",
      title: "IT & Network Intern",
      company: "24Config Technology",
      description:
        "Participated in setting up network infrastructure, including server configuration, local network wiring, Wi-Fi installation, and surveillance camera setup. Assisted the team with technical support and equipment installation.",
    }
    ,
  ];
  

  const education = [
    {
      year: "2023 - 2025",
      degree: "Diploma in Full-Stack Web Development",
      institution: "ISTA NTIC Marrakech",
      description:
        "Studied web development technologies including HTML, CSS, JavaScript, React.js, Laravel (PHP), Python, MySQL, and MongoDB.",
    },
    {
      year: "2023",
      degree: "Baccalaureate in Physical Sciences",
      institution: "Lycée Mohamed V, Marrakech",
      description:
        "Earned a high school diploma in physical sciences with a strong foundation in math, physics, and general science.",
    },
  ];
  
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
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
        I'm a motivated <b>Junior Web Developer</b> who enjoys building clean, interactive, and user-friendly websites. I love turning ideas into real functional web experiences.</p>

        <div className="about-content">
          <div className={`about-image ${isVisible ? "visible" : ""}`}>
            <div className="image-container">
              <img src="/images/about-img.png" alt="Mohamed Taher Tirar" />
            </div>
          </div>

          <div className={`about-text ${isVisible ? "visible" : ""}`}>
            <h3>Junior Web Developer</h3>
            <p>
              I'm a junior web developer with a strong passion for building clean, responsive, and user-friendly websites. Over the past couple of years, I've been learning and creating projects that bring together design and functionality.
            </p>
            <p>
              I enjoy turning ideas into real products by focusing on user experience and practical design. My goal is to create web solutions that are not only visually appealing but also meaningful and efficient.
            </p>
            <p>
              Outside of coding, I love exploring new technologies, improving my skills, and getting inspired by the latest design and development trends.
            </p>


            <div className="about-info">
              <div className="info-item">
                <span className="info-title">Name:</span>
                <span className="info-value">Mohamed Taher Tirar</span>
              </div>
              <div className="info-item">
                <span className="info-title">Email:</span>
                <span className="info-value">taher.tirar@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-title">Location:</span>
                <span className="info-value">Marrakech, Morocco</span>
              </div>
              <div className="info-item">
                <span className="info-title">Availability:</span>
                <span className="info-value">Freelance & Full-time</span>
              </div>
            </div>

            <div className="about-buttons">
              <a href="#contact" className="btn primary-btn">
                Hire Me
              </a>
              <a href="/assets/My_CV.pdf" className="btn secondary-btn" download>
                Download CV
              </a>
            </div>
          </div>
        </div>

        <div className="timeline-section">
          <div className="timeline-header">
            <h3>Experience & Education</h3>
            <p>My professional journey and academic background</p>
          </div>

          <div className="timeline-container">
            <div className="timeline-column">
              <h4 className="timeline-title">Work Experience</h4>
              <div className="timeline">
                {experiences.map((exp, index) => (
                  <div
                    className={`timeline-item ${isVisible ? "visible" : ""}`}
                    key={index}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">{exp.year}</div>
                    <div className="timeline-content">
                      <h5>{exp.title}</h5>
                      <h6>{exp.company}</h6>
                      <p>{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="timeline-column">
              <h4 className="timeline-title">Education</h4>
              <div className="timeline">
                {education.map((edu, index) => (
                  <div
                    className={`timeline-item ${isVisible ? "visible" : ""}`}
                    key={index}
                    style={{ animationDelay: `${index * 0.2 + 0.6}s` }}
                  >
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">{edu.year}</div>
                    <div className="timeline-content">
                      <h5>{edu.degree}</h5>
                      <h6>{edu.institution}</h6>
                      <p>{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
