import React from "react";
import Sidebar from "../../components/AdminComponents/Sidebar";
import CustomerGrid from "../../components/AdminComponents/CustomerGrid";

export default function CustomerList() {
  return (
      <div className="row">
        <div className="col-3">
          <Sidebar/>
        </div>
        <div className="col-8">
          <CustomerGrid />
        </div>
      </div>
  );
}
