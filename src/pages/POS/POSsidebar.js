import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faServer, faReceipt, faBowlFood, faCashRegister, faFax, faCartPlus, faUser, faUsers, } from '@fortawesome/free-solid-svg-icons';
import './possidebar.css';
import Logo from '../../img/logo.png';


export default function POSsidebar() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            {/* <Button variant="primary" >Launch</Button> */}

            <FontAwesomeIcon icon={faBars} onClick={handleShow} className='menuIco' />


            <Offcanvas show={show} onHide={handleClose} className='sideBarWrap '>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <img src={Logo} className='sideBarLogo' />
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='sideBarItem d-flex  rounded-5 align-items-center px-2 mt-2'>
                        <FontAwesomeIcon icon={faServer} />
                        <p className='m-2'>Dashboard</p>
                    </div>

                    <div className='sideBarItem d-flex  rounded-5  align-items-center px-2 mt-2'>
                        <FontAwesomeIcon icon={faReceipt} />
                        <p className='m-2'>Items</p>
                    </div>

                    


                </Offcanvas.Body>
            </Offcanvas>


        </div>
    )
}
