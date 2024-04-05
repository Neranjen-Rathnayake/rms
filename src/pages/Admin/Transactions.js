import React from "react";
import Sidebar from "../../components/AdminComponents/Sidebar";
import TransactionsGrid from "../../components/AdminComponents/TransactionsGrid";
import SidebarR from "../../components/AdminComponents/SidebarR";

export default function Transactions() {
  return (
    <div>
      <div className="row">
        <div className="col-lg-3 d-lg-block d-none">
          <Sidebar />
        </div>
        <div className="col-lg-9 d-lg-block d-none">
          <TransactionsGrid />
        </div>
      </div>

      <div className="d-lg-none">
        <SidebarR/>
        <TransactionsGrid/>
      </div>
    </div>
  );
}
