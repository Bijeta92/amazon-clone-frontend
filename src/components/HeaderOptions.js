import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const HeaderOptions = () => {
  return (
    <div className="header__optionsContainer">
      <Link className="header__link" to="/login">
        <div className="header__option">
          <span className="header__optionLineOne">Hello, SignIn</span>
          <span className="header__optionLineTwo">Accounts & Lists</span>
        </div>
      </Link>
      <Link className="header__link">
        <div className="header__option">
          <span className="header__optionLineOne">Returns </span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
      </Link>
      <Link className="header__link">
        <div className="header__option">
          <span className="header__optionLineOne">Try</span>
          <span className="header__optionLineTwo"> Prime</span>
        </div>
      </Link>
      <Link className="header__link">
        <div className="header__optionCart">
          <FaShoppingCart />
          <span>0</span>
        </div>
      </Link>
    </div>
  );
};

export default HeaderOptions;
