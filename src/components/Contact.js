import Transitions from './Transitions';

function Contact() {
  return (
    <Transitions>
      <section id="contact" className="contact-section">
        <div className="contact-section-header">
          <h2>Let's work together...</h2>
          <p>How do you take your coffee?</p>
        </div>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/mdanangp/" target="_blank" rel="noreferrer" className="btn contact-details"><i className="fab fa-linkedin" /> LinkedIn</a>
          <a id="profile-link" href="https://github.com/mcdanang" target="_blank" rel="noreferrer" className="btn contact-details"><i className="fab fa-github" /> GitHub</a>
          <a href="mailto:mdanangpriambodo@gmail.com" target="_blank" rel="noreferrer" className="btn contact-details"><i className="fas fa-at" /> Send a mail</a>
          <a href="https://wa.me/6285710945738" target="_blank" rel="noreferrer" className="btn contact-details"><i className="fab fa-whatsapp" /> Chat me</a>
        </div>
      </section>
    </Transitions>
  )
}

export default Contact;