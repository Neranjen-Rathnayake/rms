import React from 'react'
import Sidebar from '../../components/AdminComponents/Sidebar'
import SalesRepoGrid from '../../components/AdminComponents/SalesRepoGrid'
import SidebarR from '../../components/AdminComponents/SidebarR'

export default function SalesReport() {
  return (
    <div>
      <div className="row">
    <div className="col-lg-3 d-lg-block d-none">
      <Sidebar />
    </div>
    <div className="col-lg-9 d-lg-block d-none">
      <SalesRepoGrid/>
    </div>
  </div>

  <div className='d-lg-none'>
    <SidebarR/>
    <SalesRepoGrid/>
  </div>
    </div>
  )
}
