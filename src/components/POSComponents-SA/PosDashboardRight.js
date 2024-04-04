import React from "react";
import "./PosDashboardRight.css";
import DashboardCards from "./DashboardCards";
import DashBoardGraphs from "./DashBoardGraphs";
import DashboardRightBottom from "./DashboardRightBottom";
const PosDashboardRight = () => {
  return (
    <div className="posDashBG">
      <DashboardCards />
      <DashBoardGraphs />
      <DashboardRightBottom/>
    </div>
  );
};

export default PosDashboardRight;
