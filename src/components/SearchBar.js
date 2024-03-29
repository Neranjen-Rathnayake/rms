import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../bootstrap/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './searchbar.css';


export default function SearchBar({ handleInput, search }) {
    return (
    <div className='row d-flex justify-content-center'>
        <div className="col-12 col-lg-8 searchbox-wrap d-flex justify-content-center align-content-center">
           
           <input type="text" placeholder="Search" className="searchbox" onKeyPress={search} />
           <FontAwesomeIcon icon={faSearch} className="search-icon mx-1" />
       </div>
    </div>
    )
}



