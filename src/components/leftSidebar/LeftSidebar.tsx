import React from "react";
import { GiKnifeFork } from "react-icons/gi";
import { RiTodoLine, RiGridLine } from "react-icons/ri";
import { FiSettings, FiLogOut } from "react-icons/fi";
import "./LeftSidebar.scss";
import { pages } from "../../constants/pages";

interface IProps {
  setPage: React.Dispatch<React.SetStateAction<string>>;
  page: string;
}

const LeftSidebar: React.FC<IProps> = (props) => {
  return (
    <div className="leftSidebar">
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
          >
            <GiKnifeFork />
            <p>Meal Plan</p>
          </div>
          <div
            id="shopping"
            className="link-item"
            onClick={() => props.setPage(pages.SHOPPING)}
          >
            <RiTodoLine />
            <p>Shopping</p>
          </div>
          <div
            id="settings"
            className="link-item"
            onClick={() => props.setPage(pages.SETTINGS)}
          >
            <FiSettings />
            <p>Settings</p>
          </div>
          <div id="calculate" className="link-item">
            <RiGridLine />
            <p>Calculate</p>
          </div>
          <div className="link-item">
            <FiLogOut />
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
