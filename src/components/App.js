import "../css/App.css";
import AmazonContext from "../Context/AmazonCloneContext";
import Home from "../components/Home";
import Login from "../components/Login";
import Registration from "../components/Registration";
import ProductDescription from "../components/ProductDescription";
import NavBarProdCatFilter from "../components/NavBarProdCatFilter";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  
  Switch,
} from "react-router-dom";


function App() {
  const [products, setProducts] = useState([]);

  const [productCategory, setProductCategory] = useState([]);

  useEffect(() => {
    fetch("https://vast-eyrie-74437.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts((previousState) => {
          console.log("Set Products");
          previousState = data;
          return previousState;
        });
      })
      .catch((err) => console.log(`Error ${err}`));

    fetch("https://vast-eyrie-74437.herokuapp.com/product_category")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductCategory((previousState) => {
          console.log("Set Products");
          previousState = data;
          return previousState;
        });
      })
      .catch((err) => console.log(`Error ${err}`));
  }, []);

  const filterProducts = (searchInput) => {
    console.log(`THE SEARCHINPUT RECEIVED IN FILTERPRODUCTS: ${searchInput}`);

    let newProducts = products.filter((product) => {
      return product.product_name
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });

    if (searchInput === "") {
      // setProducts(products);
      newProducts = products
    }
    setProducts(newProducts);
  };

  return (
    <AmazonContext.Provider
      value={{ products, productCategory, filterProducts }}
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="App">
              <Home />
            </div>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/products/:id">
            <ProductDescription />
          </Route>
          <Route path="/product_category/:id">
            <NavBarProdCatFilter />
          </Route>
        </Switch>
      </Router>
    </AmazonContext.Provider>
  );
}

export default App;
