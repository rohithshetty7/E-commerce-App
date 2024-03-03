import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

function ProductCard(props) {
  let location = useLocation();
  return (
    <>
      <div
        className={`${
          location.pathname === "/product" ? `gr-${props.grid}` : "col-3"
        }`}
      >
        <Link to=":id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="dd" />
            </Link>
          </div>
          <div className="product-image">
            <img
              src="images/watch.jpg"
              className="img-fluid"
              alt="productimage"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Inventore reiciendis
            </h5>

            <ReactStars
              count={5}
              value={"4"}
              // onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
              edit={false}
            />
            <p
              className={`description ${
                props.grid === 12 ? "d-block" : "d-none"
              }`}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
              natus iusto modi aliquam facere?
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
              <Link>
                <img src="images/prodcompare.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addcart" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="details" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${
          location.pathname === "/product" ? `gr-${props.grid}` : "col-3"
        }`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="dd" />
            </Link>
          </div>
          <div className="product-image">
            <img
              className="img-fluid"
              src="images/watch.jpg"
              alt="productimage"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Inventore reiciendis
            </h5>

            <ReactStars
              count={5}
              value={"4"}
              // onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
              edit={false}
            />
            <p
              className={`description ${
                props.grid === 12 ? "d-block" : "d-none"
              }`}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
              natus iusto modi aliquam facere?
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
              <Link>
                <img src="images/prodcompare.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addcart" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="details" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProductCard;
