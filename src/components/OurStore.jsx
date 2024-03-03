import React, { useState } from "react";
import BreadCrumb from "./BreadCrumb";
import Meta from "./Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "./ProductCard";
import Colors from "./Colors";

const OurStore = () => {
  const [grid, setGrid] = useState(2);
  // alert(grid)
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
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div>
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
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div>
                      <form className="form-floating">
                        <input
                          type="email"
                          class="form-control"
                          id="floatingInputValue1"
                          placeholder="From"
                          // value="test@example.com"
                        />
                        <label htmlFor="floatingInputValue">From</label>
                      </form>
                    </div>
                    <div>
                      <form className="form-floating">
                        <input
                          type="email"
                          class="form-control"
                          id="floatingInputValue2"
                          placeholder="To"
                          // value="test@example.com"
                        />
                        <label htmlFor="floatingInputValue">To</label>
                      </form>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <div>
                  <Colors/>
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        value={""}
                        id="color-1"
                        type="checkbox"
                      />
                      <label className="form-check-label" htmlFor="color-1">
                        S(2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        value={""}
                        id="color-2"
                        type="checkbox"
                      />
                      <label className="form-check-label" htmlFor="color-2">
                        M(2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Headphones
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Laptops
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Mobiles
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Wire
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Products</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <h5>Kids Headphones bulk 10 pack Multi colored</h5>
                      <ReactStars
                        count={5}
                        value={4}
                        size={24}
                        activeColor="#ffd700"
                        edit={false}
                      />
                      <b>$300</b>
                    </div>
                  </div>

                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <h5>Kids Headphones bulk 10 pack Multi colored</h5>
                      <ReactStars
                        count={5}
                        value={"4"}
                        size={24}
                        activeColor="#ffd700"
                        edit={false}
                      />
                      <b>$300</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block " style={{ width: "100px" }}>
                      Sort By:
                    </p>
                    <select defaultValue={"DEFAULT"} name="" id="" className="form-control form-select">
                    <option disabled value="default" >Select</option>

                      <option value="manual">Featured</option>
                      <option value="best-selling" >
                        Best Selling
                      </option>
                      <option value="title-ascending">
                        Alphabetically,A-Z
                      </option>
                      <option value="title-descending">
                        Alphabetically,Z-A
                      </option>
                      <option value="price-ascending">
                        Price, low to High
                      </option>
                      <option value="price-descending">
                        Price, High to Low
                      </option>
                      <option value="created-ascending">
                        Date , old to new
                      </option>
                      <option value="created-descending">
                        Date , new to old
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="total-product mb-3">21 Products</p>
                    <div className="d-flex gap-10 align-items-center grid mb-4">
                      <img
                        src="images/gr4.svg"
                        className=" d-block img-fluid"
                        alt="grid"
                        onClick={() => {
                          setGrid(3);
                        }}
                      />
                      <img
                        src="images/gr3.svg"
                        className=" d-block img-fluid"
                        alt="grid"
                        onClick={() => {
                          setGrid(4);
                        }}
                      />
                      <img
                        src="images/gr2.svg"
                        className=" d-block img-fluid"
                        alt="grid"
                        onClick={() => {
                          setGrid(6);
                        }}
                      />
                      <img
                        src="images/gr.svg"
                        className=" d-block img-fluid"
                        alt="grid"
                        onClick={() => {
                          setGrid(12);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list p-2">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
