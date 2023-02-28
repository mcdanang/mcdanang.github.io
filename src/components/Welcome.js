import profilePicture from '../assets/Danang.jpg';
import Transitions from './Transitions';

function Welcome() {
  return (
    <Transitions>
      <section id="welcome-section" className="welcome-section">
        <h1>Hey I am Danang Priambodo</h1>
        <p className="job-title">a full stack web developer</p>
        <img className="photo" src={profilePicture} alt="Profile" />
        <p className="description">Skills include:<br /><br /></p>
        <ul className="skill">
          <li>
            <b>Backend</b><br />
            <span className="code">&lt;</span>NodeJS, Python<span className="code">/&gt;</span>
          </li>
          <li>
            <b>Frontend</b><br />
            <span className="code">&lt;</span>HTML, CSS, JavaScript<span className="code">/&gt;</span>
          </li>
          <li>
            <b>Database</b><br />
            <span className="code">&lt;</span>PostgreSQL, MySQL, MongoDB<span className="code">/&gt;</span>
          </li>
        </ul>
      </section>
    </Transitions>
  )
}

export default Welcome;