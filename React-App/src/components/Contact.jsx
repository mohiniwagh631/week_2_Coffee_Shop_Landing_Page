import { useState } from "react";
import axios from "axios";

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
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

    try {

      const res = await axios.post(
        "http://localhost:5000/api/contact",
        {
          name,
          email,
          message,
        }
      );

      alert(res.data.message);

      // Clear form after successful submission
      setName("");
      setEmail("");
      setMessage("");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Failed to send message"
      );

    }
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
          required
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          rows="5"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>

    </section>
  );
}

export default Contact;