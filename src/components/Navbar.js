import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav id="navbar" className="nav">
      <ul className="nav-list">
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;