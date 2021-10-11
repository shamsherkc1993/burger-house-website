import React from "react";
import burgers from '../../../src/img/abt.jpg'

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>About Us</h3>
            <h1>WELCOME TO BURGER HOUSE</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem suscipit enim itaque atque eveniet, totam officia commodi 
              tempora nam! A dolorum nulla possimus quidem ut quae corporis natus odio porro.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem suscipit enim itaque atque eveniet, totam officia commodi 
              tempora nam! A dolorum nulla possimus quidem ut quae corporis natus odio porro.
            </p>
           
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src={burgers} alt="burger"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
