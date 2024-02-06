import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Home
      </Link>
      <ul>
        <Link to="/first">Contacts</Link>
        <Link to="/form">Register</Link>
      </ul>
    </nav>
  )
}