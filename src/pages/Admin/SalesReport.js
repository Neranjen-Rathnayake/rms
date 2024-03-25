import React from 'react'
import Sidebar from '../../components/AdminComponents/Sidebar'
import SalesRepoGrid from '../../components/AdminComponents/SalesRepoGrid'

export default function SalesReport() {
  return (
    <div className="row">
    <div className="col-3">
      <Sidebar />
    </div>
    <div className="col-9">
      <SalesRepoGrid/>
    </div>
  </div>
  )
}
