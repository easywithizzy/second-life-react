import React from "react";
import "./landing.css";

// Import Icons
import Icons from './icons/icons'

// Fa
import { FaLink } from 'react-icons/fa'

const Landing = () => (
  <>
    <div id="intro-section" class="view">
      <div class="mask rgba-gradient d-flex justify-content-center align-items-center">
        <div class="container px-md-3 px-sm-0">
          <div class="row wow fadeIn">
            <div class="col-md-12 mb-4 white-text text-center wow fadeIn">
              <h3 class="display-3 font-weight-bold white-text mb-0 pt-md-5 pt-5">
                Second Life
              </h3>
              <hr class="my-4 landing"></hr>
              <h4 class="subtext-header mt-2 mb-4">t es loin voir très loin du peaufinage ce matin bcp de beug répertorier, la bouffe marche pas déjà ni l eau, ca fait bien quand tu fait venir u</h4>
              <a
                href="fivem://connect/51.38.215.145:36115"
                class="btn btn-circle btn-outline-light"
              >
                <FaLink /> &nbsp; Rejoins-nous !
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Icons />
  </>
);

export default Landing;
