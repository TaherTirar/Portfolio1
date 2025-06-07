"use client"

import { useState, useEffect } from "react"
import "./ScrollToTop.css"

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollPercentage, setScrollPercentage] = useState(0)

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }

    // Calculate scroll percentage
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrolled = (window.scrollY / scrollHeight) * 100
    setScrollPercentage(Math.round(scrolled))
  }

  // Set the top scroll position
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <div className="scroll-container">
      <button className={`scroll-to-top ${isVisible ? "visible" : ""}`} onClick={scrollToTop} aria-label="Scroll to top">
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
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
        <span className="scroll-percentage">{scrollPercentage}%</span>
      </button>
    </div>
  )
}

export default ScrollToTop
