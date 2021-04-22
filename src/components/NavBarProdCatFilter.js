import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useQuery } from "react-query";
import ProductCategoryItems from "../components/ProductCategoryItems";

const NavBarProdCatFilter = () => {
  const { id } = useParams();
  const [prodCategory, setProductCat] = useState({});
  const [prodCategoryItems, setProductCatItems] = useState({});

  useEffect(() => {
    // console.log(`the clicked productCat ID: ${id}`);
    fetch("https://vast-eyrie-74437.herokuapp.com/product_category/" + id)
      .then((res) => res.json())
      .then((prodCat) => {
        // console.log(`This prodCat is returned in THEN block: ${prodCat}`);
        setProductCat(prodCat);
      })
      .then()
      .catch((err) => console.log(`Error ${err}`));
  }, []);

  useEffect(() => {
    console.log(`the clicked productCat ID: ${id}`);
    fetch("https://vast-eyrie-74437.herokuapp.com/products?category_id=" + id)
      .then((res) => res.json())
      .then((prodCategoryItems) => {
        console.log(
          `This PRODUCTS in PRODUCT CATEGORY in THEN block: ${prodCategoryItems}`
        );
        setProductCatItems(prodCategoryItems);
      })
      .catch((err) => console.log(`Error ${err}`));
  }, []);

  console.log(`THE PRODUCT ITEMS ARE: ${prodCategoryItems}`);

  return (
    <div>
      <Header />
      <div className="navBar_prodCatBody">
        <h1>{prodCategory.category_name}</h1>

        <div className="navBar__productItems">
          {prodCategoryItems.length > 0 &&
            prodCategoryItems.map((productItem) => (
              <ProductCategoryItems
                key={productItem.id}
                id={productItem.id}
                prodName={productItem.product_name}
                pic={productItem.medium}
              />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NavBarProdCatFilter;
