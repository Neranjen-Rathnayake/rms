import React from 'react'
import POSSidebar from '../../components/POSComponents-SA/POSSideBar';
export default function POSdashboard() {
  return (
    <div className="row">
    <div className="col-3">
      <POSSidebar/>
    </div>
    <div className="col-8">
      {/* <PosOrderGrid/> */}
    </div>
  </div>
  )
}
