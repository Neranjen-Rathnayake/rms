import React from 'react'
import Sidebar from '../../components/AdminComponents/Sidebar'
import OffersGrid from '../../components/AdminComponents/OffersGrid'
import SidebarR from '../../components/AdminComponents/SidebarR'

export default function Offers() {
  return (
    <div>
      <div className="row">
    <div className="col-lg-3 d-lg-block d-none">
      <Sidebar />
    </div>
    <div className="col-lg-9 d-lg-block d-none">
      <OffersGrid/>
    </div>
  </div>

  <div className='d-lg-none'>
    <SidebarR/>
    <OffersGrid/>
  </div>
    </div>
  )
}
