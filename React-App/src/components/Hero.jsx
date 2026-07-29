import { useState, useEffect } from "react";

import hero1 from "../images/hero.jpg";
import hero2 from "../images/hero2.jpg";
import hero3 from "../images/hero3.jpg";

function Hero() {

  const images = [hero1, hero2, hero3];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
  setCurrent((prev) => (prev + 1) % images.length);
};

const prevSlide = () => {
  setCurrent((prev) => (prev - 1 + images.length) % images.length);
};

 useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, 3000);

  return () => clearInterval(interval);
}, [images.length]);

  return (

    <section className="hero" data-aos="fade-up">

      <div className="hero-text">

        <h1>Fresh Coffee Every Morning</h1>

        <p>
          Enjoy the rich aroma and taste of freshly brewed coffee made
          with premium beans.
        </p>

        <button>Order Now</button>

      </div>

      <div className="hero-img">

        <button id="prevBtn" onClick={prevSlide}>
          ❮
        </button>

        <img
          src={images[current]}
          alt="Coffee"
        />

        <button id="nextBtn" onClick={nextSlide}>
          ❯
        </button>

      </div>

    </section>

  );
}

export default Hero;