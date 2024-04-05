import React from "react";
import Sidebar from "../../components/AdminComponents/Sidebar";
import POStableOrderGrid from "../../components/AdminComponents/POStableOrderGrid";
import SidebarR from "../../components/AdminComponents/SidebarR";

export default function POSTableOrders() {
  return (
    <div>
      <div className="row">
      <div className="col-lg-3 d-lg-block d-none">
        <Sidebar />
      </div>
      <div className="col-lg-8 d-lg-block d-none">
        <POStableOrderGrid />
      </div>
    </div>

    <div className="d-lg-none">
      <SidebarR/>
      <POStableOrderGrid/>
    </div>
    </div>
  );
}
