import React from "react";
import "./style.css";

const App = () => {
  return (
    <div>
      <header>
        <h1>BONGANI NDUNA</h1>
      </header>

      {/* Profile Section */}
      <section className="profile">
        <div className="image-stack">
          <img src="images/profile_3.jpg" className="frame" alt="Profile" />
          <img src="images/profile_2.jpg" className="frame" alt="Profile" />
          <img src="images/Profile.jpg" className="main-profile" alt="Main Profile" />
        </div>
        <p>Software Developer | Sim Racer | Music Enthusiast</p>
      </section>

      {/* Social Media Links */}
      <section className="social-links">
      <a href="https://wa.me/+27814588898" target="_blank" rel="noopener noreferrer">
    <i class="fa-brands fa-whatsapp"></i>
  </a>
  <a href="https://www.instagram.com/bnduna_7/" target="_blank" rel="noopener noreferrer">
    <i class="fa-brands fa-instagram"></i>
  </a>
  <a href="https://www.youtube.com/@TorqueNest" target="_blank" rel="noopener noreferrer">
    <i class="fa-brands fa-youtube"></i>
  </a>
  
</section>


      {/* YouTube Videos */}
      <section className="youtube">
        <div className="video">
          <img src="images/latest.png" alt="Video Thumbnail" />
          <a href="https://www.youtube.com/@TorqueNest" target="_blank" rel="noopener noreferrer">
            Watch Latest Video →
          </a>
        </div>
        <div className="video">
          <img src="images/content.jpg" alt="Video Thumbnail" />
          <a href="https://youtu.be/fON7oVM19Y8" target="_blank" rel="noopener noreferrer">
            Watch More Content →
          </a>
        </div>
      </section>

      {/* Subscription Form */}
      <section className="subscribe">
        <h2>Stay Connected</h2>
        <p>Join for updates on projects, music, and more.</p>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <button type="submit">Submit</button>
        </form>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio">
        <a href="https://www.b-nduna.online" target="_blank" rel="noopener noreferrer">
          <img src="images/portfolio_website.png" alt="My Portfolio" />
        </a>
      </section>
    </div>
  );
};

export default App;
