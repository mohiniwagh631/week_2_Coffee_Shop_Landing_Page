import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Register.css";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/login",
        formData
      );

      // Save logged-in user
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert(res.data.message);

      // Redirect to Home Page
      navigate("/");

    } catch (error) {

      alert(error.response?.data?.message || "Login Failed");

    }
  };

  return (
    <div className="register-page">

      <div className="register-card">

        <h2>Login</h2>

        <form onSubmit={handleSubmit}>

          <input
            className="input-box"
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            className="input-box"
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button
            className="register-btn"
            type="submit"
          >
            Login
          </button>

        </form>

        <div className="login-link">
          Don't have an account?{" "}
          <Link to="/register">
            Register
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Login;