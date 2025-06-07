"use client"

import { useState, useEffect, useRef } from "react"
import "./Hero.css"

const TypeWriter = ({ textArray, typingSpeed = 150}) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!textArray.length) return;
    
    const currentText = textArray[index];
    const shouldType = !isDeleting && text.length < currentText.length;
    const shouldDelete = isDeleting && text.length > 0;
    
    if (shouldType) {
      // Typing
      const timeout = setTimeout(() => {
        setText(currentText.slice(0, text.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } 
    
    if (shouldDelete) {
      // Fast deletion - multiple characters at once
      const timeout = setTimeout(() => {
        setText(prev => prev.slice(0, Math.max(prev.length - 1, 0)));
      }, 80);
      return () => clearTimeout(timeout);
    }
    
    if (!isDeleting && text === currentText) {
      // Finished typing, wait before deleting
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
      return () => clearTimeout(timeout);
    }
    
    if (isDeleting && text === "") {
      // Finished deleting, move to next word
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % textArray.length);
    }
    
  }, [text, index, isDeleting, textArray, typingSpeed]);

  return (
    <div className="typewriter">
      <span>{text}</span>
      <span className="cursor">|</span>
    </div>
  )
}

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [profileImage, setProfileImage] = useState("/profile.jpg")
  const sectionRef = useRef(null)
  const nameTexts = ["Mohamed Taher Tirar", "Web Developer", "Tech Enthusiast", "React Enthusiast", "Problem Solver"]
  useEffect(() => {
    setIsVisible(true)
    // Randomly select profile image on mount
    setProfileImage(Math.random() < 0.5 ? "/profile.jpg" : "/profile2.jpg")
  }, [])

  return (
    <section id="home" className="hero-section" ref={sectionRef}>
      <div className="hero-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <div className="hero-content">
        <div className={`hero-text ${isVisible ? "visible" : ""}`}>
          <div className="hero-greeting">Hello, I'm</div>
          <div className="title-wrapper">
            <h1>
              <TypeWriter textArray={nameTexts} typingSpeed={100} deletingSpeed={500} />
            </h1>
          </div>
          
          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View My Work
            </a>
            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="hero-scroll-indicator">
            <div className="scroll-text">Scroll Down</div>
            <div className="scroll-icon">
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
                <polyline points="7 13 12 18 17 13"></polyline>
                <polyline points="7 6 12 11 17 6"></polyline>
              </svg>
            </div>
          </div>
        </div>

        <div className={`hero-image ${isVisible ? "visible" : ""}`}>
          <div className="profile-image-container">
            <img src={`/Images/${profileImage}`} alt="Profile" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
