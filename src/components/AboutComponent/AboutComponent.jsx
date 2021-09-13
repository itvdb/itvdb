import React from 'react';

import "./AboutComponent.scss";

export const AboutComponent = ({ ...props }) => (
  <div className="about">
    <div className="screen-width content">
        <section>
            <h2>About me</h2>
            <img src="./assets/img/tim3.jpg" alt="Tim Van Den Bosch" />
        </section>
        <section>
            <h3>Hallo!</h3>
            <div>
            <p>Mijn naam is Tim en ik ben een freelance IT consultant</p>
            <p>Ik heb in mijn eerste jaren gewerkt als platform-bouwer en in-house consultant. Eenzijdige projecten spraken me niet aan, daarmee dat ik als freelancer begonnen ben. Op deze manier kan ik leren van mijn klanten en elke keer een verbeterde versie aanleveren.</p>
            </div>
        </section>
    </div>
  </div>
);

export default AboutComponent;