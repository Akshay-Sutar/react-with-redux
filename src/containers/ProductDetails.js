import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { image, title, description, price, category } = product;

  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => console.error(err));

    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (id) {
      fetchProductDetails();
    }

    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [id]);

  if (Object.keys(product) === 0) {
    return <div>Loading.....</div>;
  }
  return (
    <div className="ui grid container">
      <div className="ui placeholder segment">
        <div className="ui two column stackable aligned grid">
          <div className="ui verticle divider"></div>
          <div className="middle aligned row">
            <div className="column lp">
              <img className="ui fluid image" src={image} alt={title} />
            </div>
            <div className="column rp">
              <h1>{title}</h1>
              <h2>
                <a className="ui teal tag label" href="#">
                  $ {price}
                </a>
              </h2>
              <h3 className="ui brown block header">{category}</h3>
              <p>{description}</p>
              <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible content">Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
