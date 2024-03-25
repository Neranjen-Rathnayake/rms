import React from "react";
import Sidebar from "../../components/AdminComponents/Sidebar";
import POStableOrderGrid from "../../components/AdminComponents/POStableOrderGrid";

export default function POSTableOrders() {
  return (
    <div className="row">
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col-8">
        <POStableOrderGrid />
      </div>
    </div>
  );
}
