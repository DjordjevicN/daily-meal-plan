import React, { useState } from "react";
import { FiLogOut, FiSettings } from "react-icons/fi";
import { GiKnifeFork } from "react-icons/gi";
import { RiGridLine, RiTodoLine } from "react-icons/ri";
import "./DashNavigation.scss";
import { pages } from "../../../constants/pages";
import { color } from "../../../constants/color";
import { useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

interface IProps {
  setPage: React.Dispatch<React.SetStateAction<string>>;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpen: boolean;
  page: string;
}

const DashNavigation = (props: IProps) => {
  const navigate = useNavigate();
  const [openCalculator, setOpenCalculator] = useState(false);
  const logoutUser = () => {
    localStorage.clear();
  };
  return (
    <div className="DashNavigation">
      <div className="DashNavigation__content">
        {/* DESKTOP  */}
        <div className="desktopNav">
          <div className="desktopNav__content">
            <div className="navTitle" onClick={() => navigate("/")}>
              <p>Meal</p>
              <p>Planer</p>
            </div>

            <div className="navigation">
              <div
                id="mealplan"
                className="link-item"
                onClick={() => props.setPage(pages.MEAL_PLAN)}
                style={{
                  color:
                    pages.MEAL_PLAN === props.page
                      ? color.fontDark
                      : color.fontLight,
                }}
              >
                <GiKnifeFork />
                {props.isMenuOpen ? <p>Meal Plan</p> : null}
              </div>
              <div
                id="shopping"
                className="link-item shopping"
                onClick={() => props.setPage(pages.SHOPPING)}
                style={{
                  color:
                    pages.SHOPPING === props.page
                      ? color.fontDark
                      : color.fontLight,
                }}
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
                      ? color.fontDark
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
        {/* MOBILE  */}
        <div className="mobileNav">
          <div className="mobileNav__content">
            <div
              className="link-item"
              onClick={() => {
                // logoutUser();
                window.location.href = "/";
              }}
            >
              <AiOutlineHome />
            </div>
            <div
              id="mealplan"
              className="link-item"
              onClick={() => props.setPage(pages.MEAL_PLAN)}
              style={{
                color:
                  pages.MEAL_PLAN === props.page
                    ? color.fontDark
                    : color.fontLight,
              }}
            >
              <GiKnifeFork />
            </div>
            <div
              id="shopping"
              className="link-item"
              onClick={() => props.setPage(pages.SHOPPING)}
              style={{
                color:
                  pages.SHOPPING === props.page
                    ? color.fontDark
                    : color.fontLight,
              }}
            >
              <RiTodoLine />
            </div>
            <div
              id="creator"
              className="link-item"
              onClick={() => props.setPage(pages.CREATOR)}
              style={{
                color:
                  pages.CREATOR === props.page
                    ? color.fontDark
                    : color.fontLight,
              }}
            >
              <FiSettings />
            </div>
            <div
              id="calculate"
              className="link-item"
              onClick={() => setOpenCalculator(!openCalculator)}
            >
              <RiGridLine />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashNavigation;
