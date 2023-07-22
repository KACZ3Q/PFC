import React from "react";
import { Button } from "../Button/Button";
import Typed from 'react-typed'
import './Hero.css'

function Hero() {
  return (
    <div className="hero-container">
      <h1>
        POLLIT FAMILY CONSTRUCTION LLC
      </h1>
      <h2> <Typed
          strings={["Quality.", "Safety.", "Reliability.", "Expierience."]}
          typeSpeed={50}
          backSpeed={60}
          loop
        />
        </h2>
      <div className="hero-btns">
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn-large'>
            Contact Us
        </Button>
      </div>
    </div>
  );
}

export default Hero;
