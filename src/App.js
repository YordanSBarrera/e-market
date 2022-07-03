import "./App.css";
import Navbar from "./component/navbar";
import Home from "./component/home";
import { Routes, Route } from "react-router-dom";
import Products from "./component/products";
import Product from "./component/product";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
