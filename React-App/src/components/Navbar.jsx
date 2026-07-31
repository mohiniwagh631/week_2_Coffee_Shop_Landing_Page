import { Link, useNavigate } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {

    localStorage.removeItem("user");

    alert("Logged Out Successfully");

    navigate("/");

    window.location.reload();
  };

  return (
    <header>

      <nav>

        <h2 className="logo">
          ☕ Coffee House
        </h2>

        <ul>

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#services">Menu</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

        </ul>

        <div className="nav-right">

          <button
            id="darkBtn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>

          {user ? (

            <>
              <span className="welcome">
                Welcome {user.name}
              </span>

              <button
                className="logout-btn"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>

          ) : (

            <>
              <Link to="/login" className="nav-btn">
                Login
              </Link>

              <Link to="/register" className="nav-btn">
                Register
              </Link>
            </>

          )}

        </div>

      </nav>

    </header>
  );
}

export default Navbar;