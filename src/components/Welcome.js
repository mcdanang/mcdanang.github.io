import profilePicture from '../assets/Danang.jpg';
import Transitions from './Transitions';
import { Tag, Image } from '@chakra-ui/react';

function Welcome() {
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
            <Tag m={2} size='lg' key='lg' variant='solid' colorScheme='orange'>Javascript</Tag>
            <Tag m={2} size='lg' key='lg' variant='solid' colorScheme='orange'>Typescript</Tag>
            <Tag m={2} size='lg' key='lg' variant='solid' colorScheme='orange'>Python</Tag>
            <Tag m={2} size='lg' key='lg' variant='solid' colorScheme='orange'>Golang</Tag>
          </li>
          <li>
            <span className="code">&lt;</span><b>Backend</b><span className="code">/&gt;</span><br />
            <Tag m={2} size='lg' key='lg' variant='solid' colorScheme='orange'>Node.js</Tag>
            <Tag m={2} size='lg' key='lg' variant='solid' colorScheme='orange'>Express.js</Tag>
          </li>
          <li>
            <span className="code">&lt;</span><b>Frontend</b><span className="code">/&gt;</span><br />
            <Tag m={2} size='lg' key='lg' variant='solid' colorScheme='orange'>HTML</Tag>
            <Tag m={2} size='lg' key='lg' variant='solid' colorScheme='orange'>CSS</Tag>
            <Tag m={2} size='lg' key='lg' variant='solid' colorScheme='orange'>JavaScript</Tag>
            <Tag m={2} size='lg' key='lg' variant='solid' colorScheme='orange'>React</Tag>
            <Tag m={2} size='lg' key='lg' variant='solid' colorScheme='orange'>Tailwind</Tag>
            <Tag m={2} size='lg' key='lg' variant='solid' colorScheme='orange'>Bootstrap</Tag>
            <Tag m={2} size='lg' key='lg' variant='solid' colorScheme='orange'>Chakra</Tag>
          </li>
          <li>
            <span className="code">&lt;</span><b>Database</b><span className="code">/&gt;</span><br />
            <Tag m={2} size='lg' key='lg' variant='solid' colorScheme='orange'>PostgreSQL</Tag>
            <Tag m={2} size='lg' key='lg' variant='solid' colorScheme='orange'>MySQL</Tag>
            <Tag m={2} size='lg' key='lg' variant='solid' colorScheme='orange'>MongoDB</Tag>
          </li>
        </ul>
      </section>
    </Transitions>
  )
}

export default Welcome;