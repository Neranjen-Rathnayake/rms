import './OrderHistory.css'
import React from 'react'
import WaiterSideBar from './WaiterSideBar'
import OrderHistoryRightSide from './OrderHistoryRightSide'
import WaiterNavBar from './WaiterNavBar'

export const OrderHistory = () => {
  return (
    <>
    <div className='row d-lg-none d-sm-block'>
      <WaiterNavBar/>
    </div>
    <div className="row p-2">
     <div className="col-2 p-0">
      <WaiterSideBar />
    </div>
    <div className="col-12 col-md-10 p-0">
        <OrderHistoryRightSide/>
    </div>
    </div>
    </>
  )
}
