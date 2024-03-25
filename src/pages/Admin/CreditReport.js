import React from "react";
import Sidebar from "../../components/AdminComponents/Sidebar";
import CreditRepoGrid from "../../components/AdminComponents/CreditRepoGrid";

export default function CreditReport() {
  return (
    <div className="row">
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col-8">
        <CreditRepoGrid />
      </div>
    </div>
  );
}
