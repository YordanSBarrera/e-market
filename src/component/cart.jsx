import React from "react";
import { useSelector } from "react-redux";
//import { compose } from "redux";

const Cart = () => {
  const product = useSelector((state) => state.handleCart);
  console.log(product);
  return (
    <>
      {product.map((prodInCar) => {
        return (
          <div
            className="card mb-3"
            style="max-width: 540px;"
            key={prodInCar.id}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={prodInCar.image}
                  className="card-img-top"
                  alt={prodInCar.title}
                  height="250px"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    {prodInCar.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text">${prodInCar.price}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                  <button className="btn btn-outline-dark mx-4 py-2">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cart;
