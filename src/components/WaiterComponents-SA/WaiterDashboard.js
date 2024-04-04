import React from 'react'
import WaiterSideBar from './WaiterSideBar'
import WaiterDashBoardRightSide from './WaiterDashBoardRightSide'
import WaiterNavBar from './WaiterNavBar'
const WaiterDashboard = () => {
  return (
    <>
    <div className='row d-lg-none d-sm-block'>
      <WaiterNavBar/>
    </div>
    <div className="row p-2">
     <div className="col-2 p-0 noneed d-none d-sm-block">
      <WaiterSideBar />
    </div>
    <div className="col-12 col-md-10 p-0">
        <WaiterDashBoardRightSide/>
    </div>
    </div>
    </>
  )
}

export default WaiterDashboard