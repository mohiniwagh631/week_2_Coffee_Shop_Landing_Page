import about from "../images/about.jpg";

function About() {
  return (
    <section className="about" id="about" data-aos="fade-right">
      <div className="about-img">
        <img src={about} alt="About Coffee" />
      </div>

      <div className="about-text" >
        <h2>About Us</h2>

        <p>
          Welcome to Coffee House! We serve freshly brewed coffee made from
          premium beans. Our mission is to provide a warm and relaxing place
          where everyone can enjoy quality coffee and delicious snacks.
        </p>
      </div>
    </section>
  );
}

export default About;