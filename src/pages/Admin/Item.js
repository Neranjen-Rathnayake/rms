import React from 'react'
import Sidebar from '../../components/AdminComponents/Sidebar'
import ItemsGrid from '../../components/AdminComponents/ItemsGrid'
import SidebarR from '../../components/AdminComponents/SidebarR'

export default function Item() {
  return (
    <div>
      <div className="row">
    <div className="col-lg-3 d-lg-block d-none">
      <Sidebar />
    </div>
    <div className="col-lg-8 d-lg-block d-none">
      <ItemsGrid/>
    </div>
  </div>

  <div className='d-lg-none'>
    <SidebarR/>
    <ItemsGrid/>
  </div>
    </div>
  )
}
