import React from 'react'
import '../bootstrap/bootstrap.min.css';
import './topbar.css';
import Logo from '../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function TopBar() {
    return (
        <div>
            <div className='container'>
                <img src={Logo} alt="Your Image" class="image" />
                <button class="button px-3 py-2"><FontAwesomeIcon icon={faCartShopping} className='mx-1' />Rs. 2000</button>
            </div>

        </div>
    )
}
