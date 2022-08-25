import "./HomePage.scss";
import Navigation from "../../UiComponents/organism/Navigation/Navigation";
import Calculator from "../../UiComponents/organism/Calculator/Calculator";
import ButtonShell from "../../UiComponents/atom/ButtonShell/ButtonShell";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const deviceAnimation = {
  open: {
    right: "130px",
    transform: ["rotate(-20deg)", "rotate(0deg)"],
    opacity: 1,
  },
  closed: {
    width: "0%",
  },
};
// const circleAnimation = {
//   open: {
//     width: "100%",
//   },
//   closed: {
//     width: "0%",
//   },
// };

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

              <ButtonShell type="mono" customStyle={{ width: "150px" }}>
                <Link to="/signin">Create Account</Link>
              </ButtonShell>
            </div>
            <div className="rightSide">
              <AnimatePresence>
                <div className="rightSide__content">
                  <motion.img
                    className="circle"
                    src="/images/circle.png"
                    alt=""
                    // whileInView="open"
                    // variants={circleAnimation}
                    // transition={{ duration: 0.5, delay: 0.1 }}
                  />
                  <motion.img
                    className="device"
                    src="/images/device.png"
                    alt=""
                    whileInView="open"
                    variants={deviceAnimation}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  />
                </div>
              </AnimatePresence>
            </div>
          </div>

          <div className="calculator">
            <h2>Let’s Calculate Calories Needs</h2>
            <Calculator />
          </div>
        </div>
      </div>
      <div className="footer">
        <footer>
          <div className="sectionOne section"></div>
          <div className="sectionTwo section"></div>
          <div className="sectionThree section"></div>
        </footer>
      </div>
    </>
  );
}

export default HomePage;
