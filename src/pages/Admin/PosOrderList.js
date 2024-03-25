import React from 'react'
import Sidebar from '../../components/AdminComponents/Sidebar'
import PosOrderGrid from '../../components/AdminComponents/PosOrderGrid'

export default function PosOrderList() {
  return (
    <div className="row">
    <div className="col-3">
      <Sidebar />
    </div>
    <div className="col-8">
      <PosOrderGrid/>
    </div>
  </div>
  )
}
