import React from 'react'
import '../bootstrap/bootstrap.min.css';
import './topbar.css';
import Logo from '../img/logo.png';
import { Link } from 'react-router-dom';


export default function TopBarWCart() {
    return (
        <div>
            <div className='container'>
                <Link to="/home"><img src={Logo} alt="Your Image" className="image  m-0 ps-4" /></Link>
            </div>

        </div>
    )
}
