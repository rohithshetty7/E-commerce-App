import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
function ProductCard() {
  return (
    <div className="col-3">
      <div className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <Link>
            <img src="images/wish.svg" alt="dd"/></Link>
            
        </div>
        <div className="product-image">
          <img src="images/watch.jpg" alt="productimage" />
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
      </div>
    </div>
  );
}

export default ProductCard;
