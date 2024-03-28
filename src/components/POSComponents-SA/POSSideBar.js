import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faServer,
  faReceipt,
  faBowlFood,
  faCashRegister,
  faFax,
  faCartPlus,
  faUser,
  faUsers,
  faGear,
  faMoneyBill,
  faFileLines,
  faFileWaveform,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import "./POSSideBar.css";
import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import "../../App.css";
import POS from "../../pages/POS/POS";
export default function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [activeLink, setActiveLink] = useState("/POS"); // State to track active link

  const handleItemClick = (link) => {
    setActiveLink(link);
  };



  return (
    <div className="sideBarWrap p-2">
      <div className="d-flex align-items-center m-1">
        <img src={Logo} className="sideBarLogo" />
      </div>

      <div className="mt-3">
        <Link to="/POS" className="linkWrap">
          <div className={`sideBarItem d-flex rounded-5 align-items-center px-3 mt-2 ${activeLink === "/POS" && "activeLink"}`}
          onClick={() => handleItemClick("/POS")}>
            <FontAwesomeIcon icon={faCashRegister} />
            <p className="m-2">POS</p>
          </div>
        </Link>

        <Link to="/Item" className="linkWrap">
          <div className="sideBarItem d-flex  rounded-5  align-items-center px-3 mt-2">
            <FontAwesomeIcon icon={faFax} />
            <p className="m-2">POS Orders</p>
          </div>
        </Link>

        <Link to="/DiningTable" className="linkWrap">
          <div className="sideBarItem d-flex  rounded-5 align-items-center px-3 mt-2">
            <FontAwesomeIcon icon={faServer} />
            <p className="m-2">Dashboard</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

{
  /* <Button variant="primary" >Launch</Button> */
}

{
  /* <FontAwesomeIcon icon={faBars} onClick={handleShow} className="menuIco" />

      <Offcanvas
        show={show}
        onHide={handleClose}
        className="sideBarWrap overflowhidden"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src={Logo} className="sideBarLogo" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="sideBarItem d-flex  rounded-5 align-items-center px-3 mt-2 bg-warning">
            <FontAwesomeIcon icon={faServer} />
            <p className="m-2">Dashboard</p>
          </div>

          <div className="sideBarItem d-flex  rounded-5  align-items-center px-3 mt-2">
            <FontAwesomeIcon icon={faReceipt} />
            <p className="m-2">Items</p>
          </div>

          <div className="sideBarItem d-flex  rounded-5 align-items-center px-3 mt-2">
            <FontAwesomeIcon icon={faBowlFood} />
            <p className="m-2">Dinning Table</p>
          </div>

          <div className="sideBarItem d-flex  rounded-5 align-items-center px-3 mt-2">
            <FontAwesomeIcon icon={faCashRegister} />
            <p className="m-2">POS</p>
          </div>

          <div className="sideBarItem d-flex  rounded-5 align-items-center px-3 mt-2">
            <FontAwesomeIcon icon={faFax} />
            <p className="m-2">POS Order</p>
          </div>

          <div className="sideBarItem d-flex  rounded-5 align-items-center px-3 mt-2">
            <FontAwesomeIcon icon={faCartPlus} />
            <p className="m-2">Table Orders</p>
          </div>

          <div className="sideBarItem d-flex  rounded-5 align-items-center px-3 mt-2">
            <FontAwesomeIcon icon={faUsers} />
            <p className="m-2">Customers</p>
          </div>

          <div className="sideBarItem d-flex  rounded-5 align-items-center px-3 mt-2">
            <FontAwesomeIcon icon={faUser} />
            <p className="m-2">Employees</p>
          </div>

          <div className="sideBarItem d-flex  rounded-5 align-items-center px-3 mt-2">
            <FontAwesomeIcon icon={faGear} />
            <p className="m-2">Offers</p>
          </div>

          <div className="sideBarItem d-flex  rounded-5 align-items-center px-3 mt-2">
            <FontAwesomeIcon icon={faMoneyBill} />
            <p className="m-2">Transactions</p>
          </div>

          <div className="sideBarItem d-flex  rounded-5 align-items-center px-3 mt-2">
            <FontAwesomeIcon icon={faFileLines} />
            <p className="m-2">Sales Report</p>
          </div>

          <div className="sideBarItem d-flex  rounded-5 align-items-center px-3 mt-2">
            <FontAwesomeIcon icon={faFileWaveform} />
            <p className="m-2">Items Report</p>
          </div>

          <div className="sideBarItem d-flex  rounded-5 align-items-center px-3 mt-2">
            <FontAwesomeIcon icon={faFile} />
            <p className="m-2">Credit Report</p>
          </div>
        </Offcanvas.Body>
      </Offcanvas> */
}
