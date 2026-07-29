import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import "./styles/App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
}, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;