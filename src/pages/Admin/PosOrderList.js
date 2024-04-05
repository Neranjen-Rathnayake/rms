import React from 'react'
import Sidebar from '../../components/AdminComponents/Sidebar'
import PosOrderGrid from '../../components/AdminComponents/PosOrderGrid'
import SidebarR from '../../components/AdminComponents/SidebarR'

export default function PosOrderList() {
  return (
   <div>
     <div className="row">
    <div className="col-lg-3 d-lg-block d-none">
      <Sidebar />
    </div>
    <div className="col-lg-8 d-lg-block d-none">
      <PosOrderGrid/>
    </div>
  </div>
  
  <div className='d-lg-none'>
    <SidebarR/>
    <PosOrderGrid/>
  </div>
   </div>
  )
}
