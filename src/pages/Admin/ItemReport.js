import React from "react";
import Sidebar from "../../components/AdminComponents/Sidebar";
import ItemReportGrid from "../../components/AdminComponents/ItemReportGrid";

export default function ItemReport() {
  return (
    <div className="row">
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col-8">
        <ItemReportGrid />
      </div>
    </div>
  );
}
