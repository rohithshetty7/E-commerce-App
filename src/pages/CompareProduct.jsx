import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

function CompareProduct() {
  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <div className="compare-product-wrapper py-5 home-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img src="images/cross.svg" alt="" className="position-absolute cross img-fluid" />
                <div className="compare-product-card-image">
                  <img src="images/watch.jpg" alt="compare"/>
                  
                </div>
                <div className="compare-product-details">
                  <h5 className="title">One plus Nord 5g</h5>
                  <h6 className="price">$100</h6>

                  
                </div>v
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompareProduct;
