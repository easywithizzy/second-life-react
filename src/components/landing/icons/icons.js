import React from "react";
import "./icons.css";

// Import Font-Awesome
import { FaHome, FaGamepad, FaHandshake } from "react-icons/fa";

function Icons() {
  return (
    <div class="container threeicons">
      <div class="row">
        <div class="col-md-4 mb-1">
          <FaGamepad className="icons" />
          <h5 class="my-4 font-weight-bold">Experience</h5>
          <p class="grey-text">
            Vient découvrir des dizaines de scripts inédits façonné à l'image du serveur, un tas d'activités annexes disponibles!
          </p>
        </div>

        <div class="col-md-4 mb-1">
          <FaHome className="icons" />
          <h5 class="my-4 font-weight-bold">Mapping</h5>
          <p class="grey-text">
            Une 30aine de MLO exclusifs et parfois même uniques sont à découvrir, ou même à acquérir au sein de Second Life!
          </p>
        </div>

        <div class="col-md-4 mb-1">
          <FaHandshake className="icons" />
          <h5 class="my-4 font-weight-bold">Opportunités</h5>
          <p class="grey-text">
            Vous serez au sein d'une communauté dans laquelle une recontre au coin de la rue peut tout changer!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Icons;
