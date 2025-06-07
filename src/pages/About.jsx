import "./About.css"

const About = () => {
  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Vue.js"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "Firebase"] },
    { category: "Tools", items: ["Git", "Webpack", "Vite", "VS Code", "Figma"] },
    { category: "Other", items: ["Responsive Design", "UI/UX", "SEO", "Performance Optimization"] },
  ]

  return (
    <section className="about-section">
      <h2 className="section-title">About Me</h2>

      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm John Doe, a passionate frontend developer with a keen eye for design and a love for creating
            intuitive, dynamic user experiences. With 5 years of experience in web development, I specialize in building
            responsive, accessible websites and applications.
          </p>
          <p>
            My journey in web development began during my college years when I built my first website for a local
            business. Since then, I've been hooked on the blend of creativity and logic that coding offers. I enjoy the
            challenge of solving complex problems and turning ideas into reality through code.
          </p>
          <p>
            When I'm not coding, you can find me hiking in the mountains, experimenting with new recipes in the kitchen,
            or reading science fiction novels. I believe in continuous learning and am currently exploring machine
            learning and AI to expand my skill set.
          </p>
        </div>
      </div>

      <div className="skills-section">
        <h3 className="skills-title">My Skills</h3>
        <div className="skills-container">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-group">
              <h4 className="skill-category">{skillGroup.category}</h4>
              <div className="skill-list">
                {skillGroup.items.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <span className="skill-name">{skill}</span>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
