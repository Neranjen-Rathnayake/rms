import React from "react";
import Sidebar from "../../components/AdminComponents/Sidebar";
import CreditRepoGrid from "../../components/AdminComponents/CreditRepoGrid";
import SidebarR from "../../components/AdminComponents/SidebarR";

export default function CreditReport() {
  return (
    <div>
      <div className="row">
      <div className="col-3 d-lg-block d-none">
        <Sidebar />
      </div>
      <div className="col-8 d-lg-block d-none">
        <CreditRepoGrid />
      </div>
    </div>

    <div className="d-lg-none">
      <SidebarR/>
      <CreditRepoGrid/>
    </div>

    </div>
  );
}
