import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="top-container">
      <h1 className="name">Mounika Ch</h1>
      <ul className="nav-menu">
        <li>
          <Link className="nav-link" to="/">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/contacts">
            Contacts
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
