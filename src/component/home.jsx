import React from "react";
const Home = () => {
  return (
    <div className="hero">
      <div class="card bg-dark text-dark border-0">
        <img
          src="bground.jpg"
          class="card-img"
          alt="Background"
          height="550px"
        />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
            <p class="card-text">
             CHECK OUT ALL THE TRENDS
            </p>
            <p class="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
