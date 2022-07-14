import "./App.css";
import Navbar from "./component/navbar";
import Home from "./component/home";
import { Routes, Route } from "react-router-dom";
import Products from "./component/products";
import Product from "./component/product";
import Cart from "./component/cart";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
