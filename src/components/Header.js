import React from "react";
import { FaBars } from "react-icons/fa";

import { Link } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import HeaderOptions from "../components/HeaderOptions";
import amazonLogoImage from "../images/amazon_PNG11.png";

const Header = () => {
  return (
    <div className="header-container">
      <Link>
        <FaBars className="header__hamburger" />
      </Link>
      {/* <FaAmazon className="header__amazonIcon" /> */}
      <div>
        <Link to="/">
          <img
            className="header__amazonIcon"
            src={amazonLogoImage}
            alt="amazon logo"
          />
        </Link>
      </div>
      <SearchBox />
      <HeaderOptions />
    </div>
  );
};

export default Header;
