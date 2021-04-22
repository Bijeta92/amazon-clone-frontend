import React, { useContext } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
// import FakeData from "../fakeDB/db.json";
import NavBarProdCat from "../components/NavBarProdCat";
import AmazonContext from "../Context/AmazonCloneContext";

const NavBar = () => {
  const { productCategory } = useContext(AmazonContext);

  return (
    <div className="navbar__container">
      <Link className="navbar__link">
        <div className="navbar__address">
          <span className="navbar__addressOptionLineOne">Hello</span>
          <span className="navbar__addressOptionLineTwo">
            <FaMapMarkerAlt />
            Select your address
          </span>
        </div>
      </Link>
      <Link className="navbar__link">
        <div className="navbar__options">
          <span>Best Sellers</span>
        </div>
      </Link>
      <div className="navbar__prodCat">{productCategory.map((prodCat) => (<NavBarProdCat key={prodCat.id} id={prodCat.id} categoryName={prodCat.category_name}/>))}</div>
      <Link className="navbar__link">
        <div className="navbar__options">
          <span className="navbar__optionNewDeal">New deals everyday</span>
        </div>
      </Link>
    </div>
  );
};

export default NavBar;
