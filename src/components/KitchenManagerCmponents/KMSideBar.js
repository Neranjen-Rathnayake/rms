import React, { useState } from 'react'
import './KMSideBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer} from "@fortawesome/free-solid-svg-icons";
  import Logo from "../../img/logo.png";
  import { Link } from "react-router-dom";

const KMSideBar = () => {
    const [activeLink, setActiveLink] = useState("/KitchenManager"); // State to track active link

    const handleItemClick = (link) => {
      setActiveLink(link);
    };
  
    return (
      <div className="sideBarWrap">
        <div className="d-flex align-items-center justify-content-center">
          <img src={Logo} className="sideBarLogo" alt=""/>
        </div>
  
        <div className="m-3">
          <Link to="/KitchenManager" className="linkWrap">
            <div className={`sideBarItem d-flex rounded-5 align-items-center justify-content-center px-3 mt-2 ${activeLink === "/KitchenManager" && "activeLink"}`}
            onClick={() => handleItemClick("/KitchenManager")}>
              <FontAwesomeIcon icon={faServer} />
              <p className="m-2">Dashboard</p>
            </div>
          </Link>
        </div>
      </div>
    );
  }


export default KMSideBar