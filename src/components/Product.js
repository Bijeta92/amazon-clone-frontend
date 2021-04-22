import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <div className="product">
      <div>
        <Link className="navbar__link" to={"/products/" + props.id}>
          <div className="product_card">
            <img
              src={props.pic}
              alt={"pic" + props.id}
              className="product__image"
            />
            <div className="product__name">{props.prodName}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Product;
