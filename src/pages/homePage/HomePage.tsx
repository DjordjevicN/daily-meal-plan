import React from "react";

import "./HomePage.scss";

import Navigation from "../../UiComponents/organism/Navigation/Navigation";
import Button from "../../UiComponents/atom/Button/Button";
import Calculator from "../../UiComponents/organism/Calculator/Calculator";

function HomePage() {
  return (
    <>
      <Navigation />
      <div className="homePage">
        <div className="homePage__content">
          <div className="hero">
            <div className="leftSide">
              <h1>Let’s Automate Your Meals</h1>
              <p>
                Welcome to the platform that is going to make meal planning
                easier! We will calculate your calorie needs, help you create
                and update your shopping list, and make sure you are always set
                with the right amount of good food!
              </p>
              <Button label="SING IN" type="monoButton" />
            </div>
            <div className="rightSide">
              <div className="rightSide__content">
                <img src="images/iPhone.png" alt="phone" />
                <div className="backgroundElement" />
              </div>
            </div>
          </div>

          <div className="calculator">
            <Calculator />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
