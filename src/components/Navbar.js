import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav id="navbar" className="nav">
      <ul className="nav-list">
        <li>
          <Link to="/porto-react/">About</Link>
        </li>
        <li>
          <Link to="/porto-react/work">Work</Link>
        </li>
        <li>
          <Link to="/porto-react/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;