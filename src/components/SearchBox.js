import React, { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import AmazonContext from "../Context/AmazonCloneContext";
const SearchBox = () => {
  const { productCategory, filterProducts } = useContext(AmazonContext);

  const [searchBox, setSearchBox] = useState("");

  return (
    <section className="search-container">
      {/* <label htmlFor="cars">Choose a car:</label> */}
      <form action="" className="search-container">
        <select
          name="product_category"
          id="product_category"
          className="search__searchDropDown"
        >
          <option>All</option>
          {productCategory.map((oneEntry) => {
            return (
              <>
                <option>{oneEntry.category_name}</option>
              </>
            );
          })}
        </select>

        <input
          type="text"
          placeholder="Select from the dropdown"
          className="search__searchInput"
          value={searchBox}
          onChange={(event) => {
            setSearchBox(event.target.value);
            filterProducts(event.target.value);
            
          }}
        />
        <FaSearch
          className="search__searchIcon"
          // onClick={filterProducts(searchBox)}
        />
      </form>
    </section>
  );
};

export default SearchBox;
