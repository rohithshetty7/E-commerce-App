import React from "react";
import BreadCrumb from "./BreadCrumb";
import Meta from "./Meta";
const OurStore = () => {
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div className="sub-title">Availability</div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    value={""}
                    id=""
                    type="checkbox"
                  />
                  <label className="form-check-label" htmlFor="">
                    In stock (1)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    value={""}
                    id=""
                    type="checkbox"
                    // checked
                  />
                  <label className="form-check-label" htmlFor="">
                    out Stock (0)
                  </label>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Products</h3>
              </div>
            </div>
            <div className="col-9"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
