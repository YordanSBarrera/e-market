import React, { useEffect, useState } from "react";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componenMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componenMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componenMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <>Loading...</>;
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons justify-content-center mb-5 pb-5 d-flex">
          <button className="btn btn-outline-dark me-2">All</button>
          <button className="btn btn-outline-dark me-2">Men's Clothing</button>
          <button className="btn btn-outline-dark me-2">
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark me-2">Jewelery</button>
          <button className="btn btn-outline-dark me-2">Electronic</button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3">
                <div className="card">
                  <img src={product.image} class="card-img-top" alt={product.title} />
                  <div class="card-body">
                    <h5 class="card-title">{product.title}</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
