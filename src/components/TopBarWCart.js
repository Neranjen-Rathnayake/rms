import React from 'react'
import '../bootstrap/bootstrap.min.css';
import './topbar.css';
import Logo from '../img/logo.png';


export default function TopBarWCart() {
    return (
        <div>
            <div className='container'>
                <img src={Logo} alt="Your Image" class="image" />
            </div>

        </div>
    )
}
