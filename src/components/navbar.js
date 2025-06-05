import { Link } from "react-router-dom";
import '../App.css';
function Navbar() {
  return (
    <nav className="nav-list">
      <ul className="nav-list-items">
        <li className="nav-menu"><Link to="/">Home</Link></li>
        <li className="nav-menu"><Link to="/about">About Me</Link></li>
        <li className="nav-menu"><Link to="/projects">Projects</Link></li>
        <li className="nav-menu"><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
