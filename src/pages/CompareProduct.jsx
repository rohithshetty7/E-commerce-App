import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Colors from "../components/Colors";

function CompareProduct() {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt=""
                  className="position-absolute cross img-fluid"
                />
                <div className="compare-product-image">
                  <img src="images/watch.jpg" alt="compare" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">One plus Nord 5g</h5>
                  <h6 className="price mb-3 mt-3">$100</h6>
                </div>
                <div className="product-details">
                  <h5>Brand:</h5>
                  <p>Havels </p>
                </div>
                <div className="product-details">
                  <h5>Type:</h5>
                  <p>Tablets Computers </p>
                </div>
                <div className="product-details">
                  <h5>SKU:</h5>
                  <p>SKU009 </p>
                </div>
                <div className="product-details">
                  <h5>Availability:</h5>
                  <p>In Stock </p>
                </div>
                <div className="product-details">
                  <h5>Color:</h5>
                  <Colors/>
                </div>
                <div className="product-details">
                  <h5>Size:</h5>
                  <div className="d-flex gap-10">
                    <p>S </p>
                    <p>M </p>
                    <p>L </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt=""
                  className="position-absolute cross img-fluid"
                />
                <div className="compare-product-image">
                  <img src="images/watch.jpg" alt="compare" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">One plus Nord 5g</h5>
                  <h6 className="price mb-3 mt-3">$100</h6>
                </div>
                <div className="product-details">
                  <h5>Brand:</h5>
                  <p>Havels </p>
                </div>
                <div className="product-details">
                  <h5>Type:</h5>
                  <p>Tablets Computers </p>
                </div>
                <div className="product-details">
                  <h5>SKU:</h5>
                  <p>SKU009 </p>
                </div>
                <div className="product-details">
                  <h5>Availability:</h5>
                  <p>In Stock </p>
                </div>
                <div className="product-details">
                  <h5>Color:</h5>
                  <Colors/>
                </div>
                <div className="product-details">
                  <h5>Size:</h5>
                  <div className="d-flex gap-10">
                    <p>S </p>
                    <p>M </p>
                    <p>L </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompareProduct;
