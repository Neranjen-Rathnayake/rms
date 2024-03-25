import React from 'react'
import Sidebar from '../../components/AdminComponents/Sidebar'
import OffersGrid from '../../components/AdminComponents/OffersGrid'

export default function Offers() {
  return (
    <div className="row">
    <div className="col-3">
      <Sidebar />
    </div>
    <div className="col-9">
      <OffersGrid/>
    </div>
  </div>
  )
}
