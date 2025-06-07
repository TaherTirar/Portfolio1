import "./Home.css"

const Home = () => {
  return (
    <section className="home-section">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">John Doe</span>
          </h1>
          <h2 className="hero-subtitle">Frontend Developer</h2>
          <p className="hero-description">
            I build beautiful, responsive websites with clean and efficient code. Passionate about creating engaging
            user experiences and solving problems through design.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View My Work
            </a>
            <a href="#contact" className="btn secondary-btn">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-image">
            <img src="/placeholder.svg?height=300&width=300" alt="John Doe" />
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  )
}

export default Home
