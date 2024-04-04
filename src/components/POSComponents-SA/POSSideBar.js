import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faServer,
  faCashRegister,
  faFax,
} from "@fortawesome/free-solid-svg-icons";
import "./POSSideBar.css";
import Logo from "../../img/logo.png";
import { Link, useLocation } from "react-router-dom";
import "../../App.css";

export default function POSSideBar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

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
          <div className={`sideBarItem d-flex rounded-5 align-items-center px-3 mt-2 ${activeLink === "/POS" ? "activeLink" : ""}`}
          onClick={() => handleItemClick("/POS")}>
            <FontAwesomeIcon icon={faCashRegister} />
            <p className="m-2">POS</p>
          </div>
        </Link>

        <Link to="/POSOrdersSA" className="linkWrap">
        <div className={`sideBarItem d-flex rounded-5 align-items-center px-3 mt-2 ${activeLink === "/POSOrdersSA" ? "activeLink" : ""}`}
          onClick={() => handleItemClick("/POSOrdersSA")}>
            <FontAwesomeIcon icon={faFax} />
            <p className="m-2">POS Orders</p>
          </div>
        </Link>

        <Link to="/POSDashboard" className="linkWrap">
        <div className={`sideBarItem d-flex rounded-5 align-items-center px-3 mt-2 ${activeLink === "/POSDashboard" ? "activeLink" : ""}`}
          onClick={() => handleItemClick("/POSDashboard")}>
            <FontAwesomeIcon icon={faServer} />
            <p className="m-2">Dashboard</p>
          </div>
        </Link>
      </div>
    </div>
  );
}