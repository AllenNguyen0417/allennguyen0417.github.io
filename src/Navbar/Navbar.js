import { Link } from "react-router-dom";
import "./Navbar.css";
export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Thanh Quan Nguyen
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" aria-current="page">
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/experience" className="nav-link" aria-current="page">
                Timeline
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/project" className="nav-link" aria-current="page">
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
