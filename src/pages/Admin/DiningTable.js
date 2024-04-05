import React from "react";
import Sidebar from "../../components/AdminComponents/Sidebar";
import DiningTableGrid from "../../components/AdminComponents/DiningTableGrid";
import SidebarR from "../../components/AdminComponents/SidebarR";

export default function DiningTable() {
  return (
    <div>
      <div className="row">
    <div className="col-lg-3 d-lg-block d-none">
      <Sidebar />
    </div>
    <div className="col-lg-8 d-lg-block d-none">
      <DiningTableGrid />
    </div>
   </div>

   <div className="d-lg-none">
    <SidebarR/>
    <DiningTableGrid/>
   </div>
    </div>
  );
}
