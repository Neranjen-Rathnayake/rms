import React from 'react';
import Sidebar from '../../components/AdminComponents/Sidebar';
import SettingForm from '../../components/AdminComponents/SettingForm';
import SidebarR from '../../components/AdminComponents/SidebarR';
export default function Setting() {
  return (
    <div>
      <div className='row'>
        <div className='col-lg-3 d-lg-block d-none'><Sidebar/></div>
        <div className='col-lg-9 d-lg-block d-none'><SettingForm /></div>
    </div>

    <div className='d-lg-none'>
      <SidebarR/>
      <SettingForm/>
    </div>
    </div>
  )
}
