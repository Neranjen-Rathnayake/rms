import React from 'react';
import Sidebar from '../../components/AdminComponents/Sidebar';
import SettingForm from '../../components/AdminComponents/SettingForm';
export default function Setting() {
  return (
    <div className='row'>
        <div className='col-3'><Sidebar/></div>
        <div className='col-9'><SettingForm /></div>
    </div>
    // <div><SettingForm/></div>
  )
}
