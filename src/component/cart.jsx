import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
    const product = useSelector((state)=>state.handleCart)
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <div className="card h-100 text-center p-4" key={product.id}>
            <img
              src={product.image}
              class="card-img-top"
              alt={product.title}
              height="250px"
            />
            <div className="card-body">
              <h5 className="card-title mb-0">
                {product.title.substring(0, 12)}...
              </h5>
              <p className="card-text lead fw-bold">${product.price}</p>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
