import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route } from "react-router-dom";
import NavbarComponent from "./components/navbar/navbarComponent/navbarComponent";
import HomeComponent from "./components/home/homeComponent/homeComponent";
import ShoppingCartComponent from "./components/shoppingCart/shoppingCartComponent/shoppingCartComponent";
import ProductComponent from "./components/product/productComponent/productComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComponent />
        <div class="container">
          <Route path="/product" component={ProductComponent} />
          <Route path="/cart" component={ShoppingCartComponent} />
          <Route path="/" exact component={HomeComponent} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
