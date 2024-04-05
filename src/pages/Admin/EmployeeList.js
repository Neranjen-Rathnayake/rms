import React from "react";
import Sidebar from "../../components/AdminComponents/Sidebar";
import EmployeeGrid from "../../components/AdminComponents/EmployeeGrid";
import SidebarR from "../../components/AdminComponents/SidebarR";

export default function EmployeeList() {
  return (
    <div>
      <div className="row">
      <div className="col-lg-3 d-lg-block d-none">
        <Sidebar />
      </div>
      <div className="col-lg-8 d-lg-block d-none">
        <EmployeeGrid />
      </div>
    </div>
    
    <div className="d-lg-block">
      <SidebarR/>
      <EmployeeGrid/>
    </div>
    </div>
  );
}
