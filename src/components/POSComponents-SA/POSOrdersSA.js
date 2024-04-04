import React from 'react'
import PosOrdersRight from './PosOrdersRight'
import POSSideBar from './POSSideBar'

const PosOrdersSA = () => {
  return (
    <div className="row">
      <div className="col-2">
        <POSSideBar />
      </div>
      <div className="col-10">
        <PosOrdersRight/>
      </div>
    </div>
  )
}

export default PosOrdersSA