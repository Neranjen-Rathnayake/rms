import React from 'react'
import SearchBar from '../components/SearchBar';
import TopBar from '../components/TopBar';
import Category from '../components/Category';
import Promotion from '../components/Promotion';
import FilterF from '../components/FilterF';

export default function Menu() {
  return (
    <div>
        <TopBar/>
        <SearchBar/>
        <Category/>
        <Promotion/>
        <FilterF/>
        
    </div>
  )
}
