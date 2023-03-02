import profilePicture from '../assets/Danang.jpg';
import Transitions from './Transitions';
import { Tag, Image } from '@chakra-ui/react';

function Welcome() {

  function skillList(arr) {
    return arr.map(skill => <Tag m={2} size='md' key='md' variant='solid' colorScheme='orange'>{skill}</Tag>);
  }

  return (
    <Transitions>
      <section id="welcome-section" className="welcome-section">
        <h1>Hey I am Danang Priambodo</h1>
        <p className="job-title">a full stack web developer</p>
        <Image
          borderRadius='full'
          boxSize='200px'
          src={profilePicture}
          alt='Profile Picture'
          mt={"3em"}
          mb={"3em"}
        />
        <p className="description">Skills include:<br /><br /></p>
        <ul className="skill">
          <li>
            <span className="code">&lt;</span><b>Language</b><span className="code">/&gt;</span><br />
            {skillList(["Javascript", "Typescript", "Python", "Golang"])}
          </li>
          <li>
            <span className="code">&lt;</span><b>Frontend</b><span className="code">/&gt;</span><br />
            {skillList(["HTML", "CSS", "React", "Tailwind", "Bootstrap", "Chakra"])}
          </li>
          <li>
            <span className="code">&lt;</span><b>Backend</b><span className="code">/&gt;</span><br />
            {skillList(["Node.js", "Express.js", "REST API"])}
          </li>
          <li>
            <span className="code">&lt;</span><b>Database</b><span className="code">/&gt;</span><br />
            {skillList(["MySQL", "PostgreSQL", "MongoDB"])}
          </li>
        </ul>
      </section>
    </Transitions>
  )
}

export default Welcome;