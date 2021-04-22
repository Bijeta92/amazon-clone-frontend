import React from "react";
import { Link } from "react-router-dom";

const ProductCategoryItems = (props) => {
  return (
    <div >
      <Link className="navbar__link" to={"/products/" + props.id}>
        <div className="product_card">
          <img
            src={props.pic}
            alt={"pic" + props.id}
            className="product__image"
          />
          <div className="product__name">
            Product Category Name: {props.prodName}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCategoryItems;
