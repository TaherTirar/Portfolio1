import ContactForm from "../components/ContactForm"
import "./Contact.css"

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-container">
        <div className="contact-info">
          <p className="contact-text">
            I'm interested in freelance opportunities – especially ambitious or large projects. However, if you have
            other requests or questions, don't hesitate to use the form.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
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
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="contact-detail">
                <h4>Email</h4>
                <a href="mailto:john.doe@example.com">john.doe@example.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
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
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="contact-detail">
                <h4>Location</h4>
                <p>San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}

export default Contact
