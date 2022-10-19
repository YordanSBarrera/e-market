import React from "react";
import { useSelector } from "react-redux";
import Template from "./pieces/template";

const Cart = () => {
  const product = useSelector((state) => state.handleCart);
  let priceToPay = 0;
  console.log(product);

  const productToShow = () => {
    if (product.length == 0) {
      priceToPay=0;
      return "You are not have products in your cart";
    } else {
      return product.map((prodInCar) => {
        priceToPay+=prodInCar.price;
        return (
          <div
            className="card m-2"
            style={{ maxWidth: "540px" }}
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
                  <p className="card-text mb-5">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                  <hr />
                  <button
                    className="btn btn-outline-dark mx-4 py-2"
                    style={{ width: "100px" }}
                  >
                    Buy
                  </button>
                  <button
                    className="btn btn-outline-danger mx-4 py-2"
                    style={{ width: "100px" }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  };
  console.log(priceToPay)
  const title="Cart "+{priceToPay};
  return <Template title={title} body={productToShow()} />;
};

export default Cart;
/**
 *  return (
          <div
            className="card mb-3"
            style={{ maxWidth: "540px" }}
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
                  <p className="card-text mb-5">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                  <hr />
                  <button
                    className="btn btn-outline-dark mx-4 py-2"
                    style={{ width: "100px" }}
                  >
                    Buy
                  </button>
                  <button
                    className="btn btn-outline-danger mx-4 py-2"
                    style={{ width: "100px" }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
 */
