import { Link } from 'react-router-dom'; 

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-title">AMAL P B</div>
      <Link to="/blogs" className="navbar__item">Blogs</Link>
      <Link to="/login" className="navbar__item">Login</Link>
      <Link to="/projects" className="navbar__item">Projects</Link>
      <Link to="/about" className="navbar__item">About</Link>
    </div>
  );
}
