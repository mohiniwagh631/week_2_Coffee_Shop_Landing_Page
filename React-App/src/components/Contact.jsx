import { useState } from "react";

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      alert("Please enter your name");
      return;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }

    if (message.trim() === "") {
      alert("Please enter your message");
      return;
    }

    alert("Form submitted successfully!");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="contact" id="contact" data-aos="fade-left">

      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          rows="5"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>

    </section>
  );
}

export default Contact;