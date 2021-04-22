import React, { useContext } from "react";
import Slider from "react-slick";
import ProductCategory from "../components/ProductCategory";
import Product from "../components/Product";
import AmazonContext from "../Context/AmazonCloneContext";
import deleteLater from "./deleteLater"

const HeroSection = () => {
  const { productCategory, products } = useContext(AmazonContext);

  return (
    <div className="home">
      <div className="home-container">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/Movie/C2A2_2021_GWBleedingHero_1500x600_POST_Final_en-CA_PVD6750_C2A2_Optimization._CB657655976_.jpg"
          alt="carousel image"
          className="heroSection__carouselImage"
        />
       



        <section>
          <div className="home__row">
            {productCategory.map((prodCategory) => (
              <ProductCategory
                key={prodCategory.id}
                id={prodCategory.id}
                pic={prodCategory.image}
                prodCategoryName={prodCategory.category_name}
              />
            ))}
          </div>
          <div className="product-info">
            {products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                pic={product.medium}
                prodName={product.product_name}
                prodPrice={product.price}
                prodDescription={product.description}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
