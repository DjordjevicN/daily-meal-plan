import React from "react";
import CalorieCalculator from "../../components/calorieCalculator/CalorieCalculator";
import "./HomePage.scss";
import Menu from "../../components/menu/Menu";

function HomePage() {
  return (
    <>
      <Menu />
      <div className="homePage">
        <div className="bg" />
        <div className="content">
          <div className="hero">
            <div className="content">
              <h1 className="big">Let’s Automate Your Meals</h1>
              <p className="small">
                Welcome to the platform that is going to make meal planning
                easier! We will calculate your calorie needs, help you create
                and update your shopping list, and make sure you are always set
                with the right amount of good food!
              </p>
            </div>
          </div>
          <div className="calculator">
            <CalorieCalculator />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
