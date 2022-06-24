import React from "react";
import Products from "./products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-dark border-0">
        <img src="img/fondo.jpg" className="card-img" alt="Background" />
        <div className="card-img-overlay d-flex flex-column justify-content mt-5">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text fs-2">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};
export default Home;
