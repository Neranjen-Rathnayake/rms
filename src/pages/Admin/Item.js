import React from 'react'
import Sidebar from '../../components/AdminComponents/Sidebar'
import ItemsGrid from '../../components/AdminComponents/ItemsGrid'

export default function Item() {
  return (
    <div className="row">
    <div className="col-3">
      <Sidebar />
    </div>
    <div className="col-8">
      <ItemsGrid/>
    </div>
  </div>
  )
}
