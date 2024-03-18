import React from 'react'
import Logo from '../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import '../bootstrap/bootstrap.min.css';
import SearchBar from '../components/SearchBar';
import Category from '../components/Category';
import Promotion from '../components/Promotion';
import FilterF from '../components/FilterF';
import MsgBar from '../components/MsgBar';
import NavBar from '../components/NavBar';
import TopBarWCart from '../components/TopBarWCart';

export default function PendingPay() {
  return (
    <div>
        <TopBarWCart/>
        <SearchBar/>
        <MsgBar/>
        <Category/>
        <Promotion/>
        <FilterF/>

    
    </div>
  )
}
