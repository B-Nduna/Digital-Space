import React, { useState } from "react";
import "./style.css";

const App = () => {
  return (
    <div>
      <header>
        <h1>BONGANI NDUNA</h1>
      </header>
      
      <Profile />
      <SocialLinks />
      <YouTubeSection />
      <SubscribeForm />
      <PortfolioSection />
    </div>
  );
};

const Profile = () => {
  return (
    <section className="profile">
      <div className="image-stack">
        <img src="/images/profile_3.jpg" className="frame" alt="Profile" />
        <img src="/images/profile_2.jpg" className="frame" alt="Profile" />
        <img src="/images/Profile.jpg" className="main-profile" alt="Main Profile" />
      </div>
      <p>Software Developer | Sim Racer | Music Enthusiast</p>
    </section>
  );
};

const SocialLinks = () => {
  return (
    <section className="social-links">
      <a href="https://instagram.com/bnduna_7" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a href="https://www.youtube.com/@TorqueNest" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-youtube"></i>
      </a>
      <a href="https://wa.me/+27814588898" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </section>
  );
};

const YouTubeSection = () => {
  return (
    <section className="youtube">
      <div className="video">
        <img src="/images/latest.png" alt="Video Thumbnail" />
        <a href="https://youtu.be/fON7oVM19Y8" target="_blank" rel="noopener noreferrer">
          Watch Latest Video →
        </a>
      </div>
      <div className="video">
        <img src="/images/content.jpg" alt="Video Thumbnail" />
        <a href="https://www.youtube.com/@TorqueNest" target="_blank" rel="noopener noreferrer">
          Watch More Content →
        </a>
      </div>
    </section>
  );
};

const SubscribeForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const phoneNumber = "+27814588898";
    const message = `Hello, I want to subscribe!\n\nName: ${formData.name}\nEmail: ${formData.email}`;
    const encodedMessage = encodeURIComponent(message);

    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");

    setFormData({ name: "", email: "" });
  };

  return (
    <section className="subscribe">
      <h2>Stay Connected</h2>
      <p>Join for updates on projects, music, and more.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit via WhatsApp</button>
      </form>
    </section>
  );
};


const PortfolioSection = () => {
  return (
    <section className="portfolio">
      <div className="portfolio-container">
        <a href="https://www.b-nduna.online" target="_blank" rel="noopener noreferrer">
          <img src="/images/portfolio_website.png" alt="My Portfolio" />
        </a>
      </div>
    </section>
  );
};

export default App;
