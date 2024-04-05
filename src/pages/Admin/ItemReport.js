import React from "react";
import Sidebar from "../../components/AdminComponents/Sidebar";
import ItemReportGrid from "../../components/AdminComponents/ItemReportGrid";
import SidebarR from "../../components/AdminComponents/SidebarR";

export default function ItemReport() {
  return (
    <div>
      <div className="row">
      <div className="col-lg-3 d-lg-block d-none">
        <Sidebar />
      </div>
      <div className="col-lg-8 d-lg-block d-none">
        <ItemReportGrid />
      </div>
    </div>

    <div className="d-lg-none">
      <SidebarR/>
      <ItemReportGrid/>
    </div>

    </div>
  );
}
