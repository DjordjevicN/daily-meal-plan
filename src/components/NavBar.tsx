import activityIcon from "../assets/icons/activity.svg";
import batch from "../assets/icons/batch.svg";
import market from "../assets/icons/market.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { NavBarMenu } from "./NavBarMenu";
export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="flex justify-center">
        <ul className="flex justify-between bg-salt p-6 w-full sm:max-w-[500px] sm:rounded-full sm:bottom-1  mx-auto fixed bottom-0">
          <li className="text-brand">
            <Link to="/plan">
              <img src={batch} alt="batch" />
            </Link>
          </li>
          <li className="text-paragraph">
            <Link to="/shopping">
              <img src={market} alt="market" />
            </Link>
          </li>
          <li
            className="text-paragraph relative cursor-pointer"
            onClick={handleMenuToggle}
          >
            {menuOpen && (
              <div className="absolute bottom-12 right-0">
                <NavBarMenu />
              </div>
            )}
            <img src={activityIcon} alt="activity" />
          </li>
        </ul>
      </div>
    </>
  );
};
