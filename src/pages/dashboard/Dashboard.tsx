import React, { useState } from "react";

import "./dashboard.scss";
import DayMenu from "../../components/dayMenu/DayMenu";
import ShoppingPage from "../shoppingPage/ShoppingPage";
import { pages } from "../../constants/pages";
import Creator from "../../components/creator/Creator";
import DashNavigation from "../../UiComponents/organism/DashNavigation/DashNavigation";

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

  return (
    <div className="layout">
      <DashNavigation
        setPage={setPage}
        page={page}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <div className="dashboard">
        <div className="content">{getPage()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
