// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div>
    <ul className="header-container">
      <li className="list">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="list">
        <Link to="/about" className="nav-link">
          <p className="about-header"> About </p>
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
