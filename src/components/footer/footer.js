import React from 'react';
import './footer';

// Font-Awesome icons
import { FaDiscord, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => (
<footer class="page-footer font-small">

  <div class="container text-center text-md-left">

    <div class="row">
      <div class="col-md-4 mx-auto">

        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Second Life</h5>
        <p>Nous sommes un serveur de jeu 64 slots disponible sur FiveM, notre but est de jouer</p>

      </div>

      <hr class="clearfix w-100 d-md-none" />
      <div class="col-md-2 mx-auto">
        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Navigation</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!">Haut de la page</a>
          </li>
          <li>
            <a href="#!">Discord</a>
          </li>
          <li>
            <a href="#!">Top-Serveur</a>
          </li>
          <li>
            <a href="#!">Règles</a>
          </li>
          <li>
            <a href="#!">Dossiers</a>
          </li>
          <li>
            <a href="#!">Boutique</a>
          </li>
          <li>
            <a href="#!">Boutique</a>
          </li> 
        </ul>

      </div>
    </div>
  </div>

  <hr />
  <ul class="list-unstyled list-inline text-center py-2">
    <li class="list-inline-item">
      <h5 class="mb-1">Rejoins-nous maintenant !</h5>
    </li>
    <li class="list-inline-item">
      <a href="#!" class="btn btn-danger btn-rounded">Second Life</a>
    </li>
  </ul>
  <hr />

  <ul class="list-unstyled list-inline text-center">
    <li class="list-inline-item">
      <a class="btn-floating btn-fb mx-1">
        <i class="fab fa-facebook-f"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-tw mx-1">
        <i class="fab fa-twitter"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-gplus mx-1">
        <i class="fab fa-google-plus-g"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-li mx-1">
        <i class="fab fa-linkedin-in"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-dribbble mx-1">
        <i class="fab fa-dribbble"> </i>
      </a>
    </li>
  </ul>

  
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
  </div>
  

</footer>

)

export default Footer;