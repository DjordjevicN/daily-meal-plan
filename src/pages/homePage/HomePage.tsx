import "./HomePage.scss";
import Navigation from "../../UiComponents/organism/Navigation/Navigation";
import Calculator from "../../UiComponents/organism/Calculator/Calculator";
import ButtonShell from "../../UiComponents/atom/ButtonShell/ButtonShell";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../state";
import { bindActionCreators } from "redux";
import { Link, useNavigate } from "react-router-dom";

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loginUser } = bindActionCreators(actionCreators, dispatch);

  const startDemoAccount = () => {
    // logout user
    localStorage.clear();
    // login as demo
    const value = {
      email: "guest@gmail.com",
      password: "654654",
    };
    loginUser(value);
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };
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

              <Link to="/signin">
                <ButtonShell
                  type="mono"
                  customStyle={{ width: "150px", marginBottom: "30px" }}
                >
                  Create Account
                </ButtonShell>
              </Link>

              <ButtonShell
                type="mono"
                customStyle={{ width: "150px" }}
                onClick={() => startDemoAccount()}
              >
                Demo
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
      {/* <div className="footer">
        <footer>
          <div className="sectionOne section"></div>
          <div className="sectionTwo section"></div>
          <div className="sectionThree section"></div>
        </footer>
      </div> */}
    </>
  );
}

export default HomePage;
