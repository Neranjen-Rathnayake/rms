import React from 'react'
import '../bootstrap/bootstrap.min.css';
import './topbar.css';
import Logo from '../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function TopBar() {
    return (
        <div>
            <div className='container'>
                <Link to="/home"><img src={Logo} alt="Your Image" className="image" /></Link>
                <Link to="/cart" className='linkWrap'><button className="button px-3 py-2"><FontAwesomeIcon icon={faCartShopping} className='mx-1' />Rs. 2000</button></Link>
                
            </div>

        </div>
    )
}
