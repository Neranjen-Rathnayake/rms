import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faServer,
  faCashRegister,
  faFax,
} from "@fortawesome/free-solid-svg-icons";
import "./POSSideBar.css";
import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import "../../App.css";

export default function Sidebar() {

  const [activeLink, setActiveLink] = useState("/POS"); // State to track active link

  const handleItemClick = (link) => {
    setActiveLink(link);
  };



  return (
    <div className="sideBarWrap p-2">
      <div className="d-flex align-items-center m-1">
        <img src={Logo} className="sideBarLogo" alt=""/>
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