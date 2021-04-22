import React, { useContext } from "react";
import { Link } from "react-router-dom";

const ProductCategory = (props) => {
  return (
    <div className="productCategory">
      <div className="productCategory-info">
        <Link className="navbar__link" to={"/product_category/" + props.id}>
          <div className="productCategory_card">
            <img
              src={props.pic}
              alt="image"
              className="productCategory__image"
            />
            <div className="text__centered">{props.prodCategoryName}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCategory;
