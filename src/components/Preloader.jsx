"use client"

import { useEffect } from "react"
import "./Preloader.css"

const Preloader = ({ loading }) => {
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [loading])

  return (
    <div className={`preloader ${loading ? "" : "hidden"}`}>
      <div className="loader-content">
        <div className="loader-circle"></div>
        <div className="loader-name">Mohamed Taher Tirar</div>
        <div className="loader-title">Full Stack Developer</div>
        <div className="loader-subtitle">Welcome to my portfolio!</div>
        <div className="loader-footer">Loading...</div>
      </div>
    </div>
  )
}

export default Preloader
