import React, { useState } from "react";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import "./dashboard.scss";
import DayMenu from "../../components/dayMenu/DayMenu";
import ShoppingPage from "../shoppingPage/ShoppingPage";
import { pages } from "../../constants/pages";

const Dashboard = () => {
  const [page, setPage] = useState(pages.MEAL_PLAN);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const getPage = () => {
    switch (page) {
      case pages.MEAL_PLAN:
        return <DayMenu />;

      case pages.SHOPPING:
        return <ShoppingPage />;

      case pages.SETTINGS:
        return <ShoppingPage />;

      default:
        <DayMenu />;
    }
  };

  return (
    <div className="layout">
      <LeftSidebar
        setPage={setPage}
        page={page}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <div
        className="dashboard"
        style={{ marginLeft: isMenuOpen ? "260px" : "120px" }}
      >
        <div className="content">{getPage()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
