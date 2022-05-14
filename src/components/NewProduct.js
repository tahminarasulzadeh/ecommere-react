import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { NavLink, useParams } from "react-router-dom";
import { FaStar } from "@react-icons/all-files/fa/FaStar";

const NewProduct = () => {
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
      const response = await fetch(`http://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <h3 className="text-center mt-5"> Loading....</h3>
      </>
    );
  };

  const ShowProduct = () => {
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
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate} <FaStar />
          </p>
          <h3 className="display-6 fw-bold my-4">{product.price}</h3>

          <p className="lead">{product.description}</p>

          <button
            className="btn btn-outline-warning px-2 py-2"
            onClick={() => addProduct(product)}
          >
            Add to Cart
          </button>
          <NavLink to="/cart" className="btn btn-warning ms-2 px-3 py-2">
            Go To Cart
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};
export default NewProduct;
