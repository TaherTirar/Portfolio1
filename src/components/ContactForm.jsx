// "use client"

// import { useState } from "react"
// import "./ContactForm.css"

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   })
//   const [formStatus, setFormStatus] = useState({
//     submitted: false,
//     error: false,
//     message: "",
//   })

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     // Validate form
//     if (!formData.name || !formData.email || !formData.message) {
//       setFormStatus({
//         submitted: false,
//         error: true,
//         message: "Please fill in all fields",
//       })
//       return
//     }

//     // Simulate form submission
//     console.log("Form submitted:", formData)

//     // Reset form and show success message
//     setFormData({
//       name: "",
//       email: "",
//       message: "",
//     })

//     setFormStatus({
//       submitted: true,
//       error: false,
//       message: "Message sent successfully!",
//     })

//     // Reset status after 5 seconds
//     setTimeout(() => {
//       setFormStatus({
//         submitted: false,
//         error: false,
//         message: "",
//       })
//     }, 5000)
//   }

//   return (
//     <div className="contact-form-container">
//       <form className="contact-form" onSubmit={handleSubmit}>
//         {formStatus.message && (
//           <div className={`form-message ${formStatus.error ? "error" : "success"}`}>{formStatus.message}</div>
//         )}

//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Your name"
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Your email"
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="message">Message</label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Your message"
//             rows="5"
//           ></textarea>
//         </div>

//         <button type="submit" className="submit-btn">
//           Send Message
//         </button>
//       </form>
//     </div>
//   )
// }

// export default ContactForm
