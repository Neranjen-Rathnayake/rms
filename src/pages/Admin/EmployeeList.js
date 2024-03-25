import React from "react";
import Sidebar from "../../components/AdminComponents/Sidebar";
import EmployeeGrid from "../../components/AdminComponents/EmployeeGrid";

export default function EmployeeList() {
  return (
    <div className="row">
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col-8">
        <EmployeeGrid />
      </div>
    </div>
  );
}
