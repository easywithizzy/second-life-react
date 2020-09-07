import React from "react";
import "./navbar.css";

// Font-Awesome icons
import { FaDiscord, FaGithub } from "react-icons/fa";

const Navbar = () => (
  <>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="http://www.github.com">
          <img
            src="https://cdn.discordapp.com/attachments/640527477445361665/750337276927541258/logo.png"
            width="96"
            height="96"
            alt=""
            loading="lazy"
          ></img>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="hamburger-menu"></div>
          <div className="hamburger-menu"></div>
          <div className="hamburger-menu"></div>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto smooth-scroll">
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://discord.gg/5spKJgR"
                data-offset="90"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#about"
                data-offset="90"
                target="_blank"
                rel="noopener noreferrer"
              >
                Top-Serveur
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects" data-offset="90">
                Règles
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects" data-offset="90">
                Dossiers
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#gallery" data-offset="90">
                Boutique
              </a>
            </li>
          </ul>
          <ul class="navbar-nav nav-flex-icons">
          <li class="nav-item">
                <button className='btn-wl'>WhiteList</button>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="http://www.github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="http://www.github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
);

export default Navbar;
