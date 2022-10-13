import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux/es/exports";
import { addCart } from "../redux/action";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'


const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
          loading...
        </div>
        <div className="col-md-6">
          <Skeleton height={50} width={300} />
          <Skeleton height={75} width={300} />
          <Skeleton height={150} width={300} />
        </div>
      </>
    );
  };
  const ShowProduct = () => {
    console.log(product);
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead">
            Rating {product.rating && product.rating.rate}
            <FontAwesomeIcon icon="fa-solid fa-star" />?
            <FontAwesomeIcon icon="fa-solid fa-star-sharp" />
          </p>
          <i className="braille icon"></i>
          <FontAwesomeIcon icon="fa-solid fa-mouse-field" />
{/* <FontAwesomeIcon icon={solid('user-secret')} />
<FontAwesomeIcon icon={regular('coffee')} />
<FontAwesomeIcon icon={icon({name: 'coffee', style: 'solid'})} />
<FontAwesomeIcon icon={brands('twitter')} /> */}

<i className="fa-solid fa-user"></i>
<i className="fa-regular fa-user"></i>
<i className="fa-light fa-user"></i>
<i className="fa-thin fa-user"></i>
<i className="fa-duotone fa-user"></i>

<i class="fa-brands fa-font-awesome"></i>

<i class="fa-sharp fa-solid fa-user"></i>


          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark mx-4 py-2"
            onClick={() => addProduct(product)}
          >
            Add to Cart
          </button>
          <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
            Go to Cart
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;
