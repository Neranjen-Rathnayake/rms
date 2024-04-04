import React from 'react'
import POSSideBar from './POSSideBar'
import PosDashboardRight from './PosDashboardRight'

const POSDashboard = () => {
  return (
    <div className="row">
      <div className="col-2">
        <POSSideBar />
      </div>
      <div className="col-10">
      <PosDashboardRight/>
      </div>
    </div>
  )
}

export default POSDashboard