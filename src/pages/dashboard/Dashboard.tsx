import React, { useState } from "react";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import "./dashboard.scss";
import DayMenu from "../../components/dayMenu/DayMenu";
import ShoppingPage from "../shoppingPage/ShoppingPage";
import { pages } from "../../constants/pages";
import Creator from "../../components/creator/Creator";

const Dashboard = () => {
  const [page, setPage] = useState(pages.MEAL_PLAN);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const getPage = () => {
    switch (page) {
      case pages.MEAL_PLAN:
        return <DayMenu />;

      case pages.SHOPPING:
        return <ShoppingPage />;

      case pages.CREATOR:
        return <Creator />;

      default:
        <DayMenu />;
    }
  };

  const getMargin = () => {
    let viewportWidth = window.innerWidth;
    let result = "0px";
    if (viewportWidth < 615) {
      return (result = "0px");
    }
    if (isMenuOpen) {
      result = "260px";
    } else {
      result = "120px";
    }
    return result;
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
        style={{
          marginLeft: getMargin(),
        }}
      >
        <div className="content">{getPage()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
