import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {

  return (
    <header>

      <nav>

        <h2 className="logo">☕ Coffee House</h2>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Menu</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button
          id="darkBtn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>

      </nav>

    </header>
  );
}

export default Navbar;