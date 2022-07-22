import React from "react";
import CalorieCalculator from "../../components/calorieCalculator/CalorieCalculator";
import "./HomePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="content">
        <div className="hero">
          <div className="content">
            <div className="text">
              <div className="content">
                <h1 className="small">MY DAILY</h1>
                <h1 className="big">MEAL</h1>
              </div>
            </div>
            <div className="image">
              <img src="images/logo800.png" alt="" />
            </div>
          </div>
        </div>
        <div className="calculator">
          <CalorieCalculator />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
