import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductDescription = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    console.log(`the clicked product ID: ${id}`);
    fetch("https://vast-eyrie-74437.herokuapp.com/products" + id)
      .then((res) => res.json())
      .then((products) => {
        console.log(products);
        setProduct(products);
      })
      .catch((err) => console.log(`Error ${err}`));
  }, []);

  return (
    <>
      <Header />
      <div className="prodDesc__container">
        <section>
          <img
            src={product.medium}
            alt={product.product_name}
            className="prodDesc__image"
          />
        </section>
        <section className="prodDesc__details">
          <div className="prodDesc__productName">
            <strong>{product.product_name}</strong>
          </div>
          <div className="prodDesc__productName">
            <strong>ProdId: {product.id}</strong>
          </div>
          <div className="prodDesc__productPrice">
            <strong>Price: CDN$ </strong>
            {product.price}
          </div>
          <div className="prodDesc__productDescription">
            <strong>Product Description: $</strong>
            {product.description}
          </div>
          <div>
            <button type="submit" className="prodDesc_addToCartButton">Add to Cart</button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ProductDescription;
