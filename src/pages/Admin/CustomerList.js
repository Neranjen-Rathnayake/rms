import React from "react";
import Sidebar from "../../components/AdminComponents/Sidebar";
import CustomerGrid from "../../components/AdminComponents/CustomerGrid";
import SidebarR from "../../components/AdminComponents/SidebarR";

export default function CustomerList() {
  return (
    <div>
      <div className="row">
        <div className="col-lg-3 d-lg-block d-none">
          <Sidebar/>
        </div>
        <div className="col-lg-8 d-lg-block d-none">
          <CustomerGrid />
        </div>
      </div>

      <div className="d-lg-none">
        <SidebarR/>
        <CustomerGrid/>
      </div>

    </div>
  );
}
