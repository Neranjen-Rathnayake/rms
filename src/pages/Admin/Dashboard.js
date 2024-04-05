import React from 'react'
import PosDashboardRight from '../../components/POSComponents-SA/PosDashboardRight'
import Sidebar from '../../components/AdminComponents/Sidebar';
import SidebarR from '../../components/AdminComponents/SidebarR';


export default function Dashboard() {
  return (
    <div>
      <div className="row">
      <div className="col-lg-2 d-lg-block d-none">
        <Sidebar/>
      </div>
      <div className="col-lg-10 d-lg-block d-none">
      <PosDashboardRight/>
      </div>

      <div className="d-lg-none">
        <SidebarR/>
        <PosDashboardRight/>
      </div>
    </div>
    
    </div>
  )
}
