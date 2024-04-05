import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  faFileSignature,
} from "@fortawesome/free-solid-svg-icons";
import "./sidebar.css";
import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import "../../App.css";

export default function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="sideBarWrap overflowhidden p-2 col-3">
        <div className="d-flex align-items-center m-1">
          <img src={Logo} className="sideBarLogo" />
        </div>

        <div className="mt-3">
          <Link to="/Dashboard" className="linkWrap">
            <div className="sideBarItem d-flex  rounded-5 align-items-center px-3 mt-2">
              <FontAwesomeIcon icon={faServer} />
              <p className="m-2">Dashboard</p>
            </div>
          </Link>

          <Link to="/Item" className="linkWrap">
            <div className="sideBarItem d-flex  rounded-5  align-items-center px-3 mt-2">
              <FontAwesomeIcon icon={faReceipt} />
              <p className="m-2">Items</p>
            </div>
          </Link>

          <Link to="/DiningTable" className="linkWrap">
            <div className="sideBarItem d-flex  rounded-5 align-items-center px-3 mt-2">
              <FontAwesomeIcon icon={faBowlFood} />
              <p className="m-2">Dinning Table</p>
            </div>
          </Link>

          <Link to="/AdminPOS" className="linkWrap">
            <div className="sideBarItem d-flex  rounded-5 align-items-center px-3 mt-2">
              <FontAwesomeIcon icon={faCashRegister} />
              <p className="m-2">POS</p>
            </div>
          </Link>

          <Link to="/PosOrderList" className="linkWrap">
            <div className="sideBarItem d-flex  rounded-5 align-items-center px-3 mt-2">
              <FontAwesomeIcon icon={faFax} />
              <p className="m-2">POS Order</p>
            </div>
          </Link>

          <Link to="/POSTableOrders" className="linkWrap">
            <div className="sideBarItem d-flex  rounded-5 align-items-center px-3 mt-2">
              <FontAwesomeIcon icon={faCartPlus} />
              <p className="m-2">Table Orders</p>
            </div>
          </Link>

          <Link to="/CustomerList" className="linkWrap">
            <div className="sideBarItem d-flex  rounded-5 align-items-center px-3 mt-2">
              <FontAwesomeIcon icon={faUsers} />
              <p className="m-2">Customers</p>
            </div>
          </Link>

          <Link to="/EmployeeList" className="linkWrap">
            <div className="sideBarItem d-flex  rounded-5 align-items-center px-3 mt-2">
              <FontAwesomeIcon icon={faUser} />
              <p className="m-2">Employees</p>
            </div>
          </Link>

          <Link to="/Offers" className="linkWrap">
            <div className="sideBarItem d-flex  rounded-5 align-items-center px-3 mt-2">
              <FontAwesomeIcon icon={faGear} />
              <p className="m-2">Offers</p>
            </div>
          </Link>

          <Link to="/Transactions" className="linkWrap">
            <div className="sideBarItem d-flex  rounded-5 align-items-center px-3 mt-2">
              <FontAwesomeIcon icon={faMoneyBill} />
              <p className="m-2">Transactions</p>
            </div>
          </Link>

          <Link to="/SalesReport" className="linkWrap">
            <div className="sideBarItem d-flex  rounded-5 align-items-center px-3 mt-2">
              <FontAwesomeIcon icon={faFileLines} />
              <p className="m-2">Sales Report</p>
            </div>
          </Link>

          <Link to="/ItemReport" className="linkWrap">
            <div className="sideBarItem d-flex  rounded-5 align-items-center px-3 mt-2">
              <FontAwesomeIcon icon={faFileWaveform} />
              <p className="m-2">Items Report</p>
            </div>
          </Link>

          <Link to="/CreditReport" className="linkWrap">
            <div className="sideBarItem d-flex  rounded-5 align-items-center px-3 mt-2">
              <FontAwesomeIcon icon={faFile} />
              <p className="m-2">Credit Report</p>
            </div>
          </Link>

          <Link to="/Setting" className="linkWrap">
            <div className="sideBarItem d-flex  rounded-5 align-items-center px-3 mt-2">
              <FontAwesomeIcon icon={faFileSignature} />
              <p className="m-2">Setting</p>
            </div>
          </Link>
        </div>
      </div>


    </div>
  );
}


      {/* <Button variant="primary" >Launch</Button> */}

      {/* <FontAwesomeIcon icon={faBars} onClick={handleShow} className="menuIco" />

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
      </Offcanvas> */}