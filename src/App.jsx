import React from "react";
import "./index.css";
import TorqueNest from "./components/TorqueNest";
import SubscribeForm from './components/SubscribeForm';
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";



export default function App() {
  return (
    <>
      <header>
        <img src="/images/B_Nduna_Logo_Transparent.webp" className="logo" alt="logo" />
      </header>

      <section className="profile">
        <div className="image-stack">
          <img src="/images/Profile.webp" className="main-profile" alt="Profile" />
        </div>

        <p>
          <a className="nav-link scroll-link" href="#portfolio">Tech</a>
          <span>|</span>
          <a className="nav-link scroll-link" href="#youtube">Sim Racing</a>
          <span>|</span>
          <a className="nav-link scroll-link" href="#music">Music</a>
        </p>  

        <div className="Social">
          <a href="https://www.instagram.com/bnduna_7/" target="_blank"><FaInstagram /></a>
          <a href="https://www.youtube.com/@TorqueNest" target="_blank"><FaYoutube /></a>
          <a href="https://x.com/bnduna_7" target="_blank"><FaTwitter /></a>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <h2>My Portfolio</h2>
        <a href="https://b-nduna.github.io/Portfolio/" target="_blank">
          <div className="portfolio-container">
            <img src="/images/portfolio_website.webp" alt="My Portfolio" />
          </div>
        </a>
      </section>

      <main>
  {/* Other sections */}
  <TorqueNest />
</main>


      <section className="music" id="music">
        <h2>Bassline Odyssey Podcast</h2>
        <iframe 
          width="100%" 
          height="200" 
          src="https://hearthis.at/bassline-odyssey/embed/" 
          frameBorder="0" 
          allowFullScreen>
        </iframe>
      </section>

      <section className="subscribe">
        <SubscribeForm />
      </section>
    </>
  )
}
