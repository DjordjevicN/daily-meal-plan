import React, { useState } from "react";
import { GiKnifeFork } from "react-icons/gi";
import { RiTodoLine, RiGridLine } from "react-icons/ri";
import { FiSettings, FiLogOut } from "react-icons/fi";
import "./LeftSidebar.scss";
import { pages } from "../../constants/pages";
import { color } from "../../constants/color";
import { TbArrowsLeftRight } from "react-icons/tb";
import CalorieCalculator from "../calorieCalculator/CalorieCalculator";

interface IProps {
  setPage: React.Dispatch<React.SetStateAction<string>>;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpen: boolean;
  page: string;
}

const LeftSidebar: React.FC<IProps> = (props) => {
  const [openCalculator, setOpenCalculator] = useState(false);

  const logoutUser = () => {
    localStorage.clear();
  };
  return (
    <>
      <div
        className="leftSidebar"
        style={{ width: props.isMenuOpen ? "260px" : "120px" }}
      >
        <div
          className="collapse"
          onClick={() => props.setIsMenuOpen(!props.isMenuOpen)}
        >
          <TbArrowsLeftRight />
          <p>{props.isMenuOpen ? "Collapse" : "Extend"}</p>
        </div>
        <div className="content">
          <div className="avatar">
            <img src="images/LOGO-MAIN.png" alt="avatar" />
          </div>
          <div className="updateAccount">
            <button>Upgrade</button>
          </div>
          <div className="navigation">
            <div
              id="mealplan"
              className="link-item"
              onClick={() => props.setPage(pages.MEAL_PLAN)}
              style={{
                color:
                  pages.MEAL_PLAN === props.page
                    ? color.orangeMain
                    : color.fontLight,
              }}
            >
              <GiKnifeFork />
              {props.isMenuOpen ? <p>Meal Plan</p> : null}
            </div>
            <div
              id="shopping"
              className="link-item shopping"
              // onClick={() => props.setPage(pages.SHOPPING)}
              // style={{
              //   color:
              //     pages.SHOPPING === props.page
              //       ? color.orangeMain
              //       : color.fontLight,
              // }}
            >
              <RiTodoLine />
              {props.isMenuOpen ? <p>Shopping</p> : null}
            </div>
            <div
              id="settings"
              className="link-item"
              onClick={() => props.setPage(pages.CREATOR)}
              style={{
                color:
                  pages.CREATOR === props.page
                    ? color.orangeMain
                    : color.fontLight,
              }}
            >
              <FiSettings />
              {props.isMenuOpen ? <p>Creator</p> : null}
            </div>
            <div
              id="calculate"
              className="link-item"
              onClick={() => setOpenCalculator(!openCalculator)}
            >
              <RiGridLine />

              {props.isMenuOpen ? <p>Calculate</p> : null}
            </div>
            <div
              className="link-item"
              onClick={() => {
                logoutUser();
                window.location.href = "/";
              }}
            >
              <FiLogOut />
              {props.isMenuOpen ? <p>Logout</p> : null}
            </div>
          </div>
        </div>
      </div>
      <div className="mobileMenu">
        <div className="content">
          <div className="mobile_navigation">
            <div
              className="link-item"
              onClick={() => {
                logoutUser();
                window.location.href = "/";
              }}
            >
              <FiLogOut />
              {/* <p>Logout</p> */}
            </div>
            <div
              id="mealplan"
              className="link-item"
              onClick={() => props.setPage(pages.MEAL_PLAN)}
              style={{
                color:
                  pages.MEAL_PLAN === props.page
                    ? color.orangeMain
                    : color.fontLight,
              }}
            >
              <GiKnifeFork />
              {/* <p>Meal Plan</p> */}
            </div>
            <div
              id="shopping"
              className="link-item"
              onClick={() => props.setPage(pages.SHOPPING)}
              style={{
                color:
                  pages.SHOPPING === props.page
                    ? color.orangeMain
                    : color.fontLight,
              }}
            >
              <RiTodoLine />
              {/* <p>Shopping</p> */}
            </div>
            <div
              id="creator"
              className="link-item"
              onClick={() => props.setPage(pages.CREATOR)}
              style={{
                color:
                  pages.CREATOR === props.page
                    ? color.orangeMain
                    : color.fontLight,
              }}
            >
              <FiSettings />
              {/* <p>Creator</p> */}
            </div>
            <div
              id="calculate"
              className="link-item"
              onClick={() => setOpenCalculator(!openCalculator)}
            >
              <RiGridLine />
              {/* <p>Calculate</p> */}
            </div>
          </div>
        </div>
      </div>
      {openCalculator && (
        <div className="calculateCaloriesModal">
          <div className="calculateCaloriesModal__content">
            <CalorieCalculator
              recalculate={true}
              setOpenCalculator={setOpenCalculator}
              exitBtn={true}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default LeftSidebar;
