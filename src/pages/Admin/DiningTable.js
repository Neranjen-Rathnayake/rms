import React from "react";
import Sidebar from "../../components/AdminComponents/Sidebar";
import DiningTableGrid from "../../components/AdminComponents/DiningTableGrid";

export default function DiningTable() {
  return (
    <div className="row">
    <div className="col-3">
      <Sidebar />
    </div>
    <div className="col-8">
      <DiningTableGrid />
    </div>
  </div>
  );
}
