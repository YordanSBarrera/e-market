import "./App.css";
import Navbar from "./component/navbar";
import Home from "./component/home";
import { Router, Route } from "react-router-dom";
import Products from "./component/products";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Home />
      </Router>
    </>
  );
}

export default App;
