import projects from '../data/projects.json';
import Transitions from './Transitions';

function Projects() {
  const projectList = projects.map( obj => {
    return (
      <a href={obj.link} target="_blank" rel="noreferrer" className="project project-tile">
        <img className="project-image" src={obj.source} alt="project" />
        <p className="project-title">
          <span className="code">&lt;</span>{obj.name}<span className="code">/&gt;</span>
        </p>
      </a>
    )
  })

  return (
    <Transitions>
      <section id="projects" className="projects-section">
        <h2 className="projects-section-header">These are some of my projects</h2>
        <div className="projects-grid">
          {projectList}
        </div>
        <a href="https://codepen.io/mcdanang" className="btn btn-show-all" target="_blank" rel="noreferrer">Show all<i className="fas fa-chevron-right" /></a>
      </section>
    </Transitions>
  )
}

export default Projects;