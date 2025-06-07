// "use client"

// import { useState, useEffect } from "react"
// import "./Navbar.css"

// const Navbar = ({ darkMode, toggleDarkMode }) => {
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true)
//       } else {
//         setScrolled(false)
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   useEffect(() => {
//     // Close menu when route changes
//     setMenuOpen(false)
//   }, [location])

//   return (
//     <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
//       <div className="navbar-container">
//         <Link to="/" className="navbar-logo">
//           <span>Portfolio</span>
//         </Link>

//         <div className="navbar-right">
//           <button
//             className={`theme-toggle ${darkMode ? "dark" : "light"}`}
//             onClick={toggleDarkMode}
//             aria-label="Toggle dark mode"
//           >
//             {darkMode ? "☀️" : "🌙"}
//           </button>

//           <div className={`menu-icon ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//         </div>

//         <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
//           <li className="nav-item">
//             <Link to="/" className={location.pathname === "/" ? "active" : ""}>
//               Home
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>
//               Projects
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
//               About
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   )
// }

// export default Navbar
