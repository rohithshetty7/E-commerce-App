import React, { useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Colors from "../components/Colors";
import { Link } from "react-router-dom";
import { IoMdGitCompare } from "react-icons/io";
import { CiHeart } from "react-icons/ci";

function SingleProduct() {
  const props = {
    width: 400,
    height: 500,
    zoomWidth: 500,
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
  };
  const [orderProduct, setOrderProduct] = useState(true);
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img
                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                    className="img-fluid"
                    alt="watch"
                  />
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                    className="img-fluid"
                    alt="watch"
                  />
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                    className="img-fluid"
                    alt="watch"
                  />
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                    className="img-fluid"
                    alt="watch"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">Lorem ipsum dolor sit.</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$100</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      value={"4"}
                      size={24}
                      activeColor="#ffd700"
                      edit={false}
                    />
                    <p className="mb-0 t-review">( 2 reviews)</p>
                  </div>
                  <a className="review-btn" href="#review">
                    Write a review
                  </a>
                </div>
                <div className="border-bottom py-3">
                  <div className="d-flex align-items-center gap-10 my-1">
                    <h3 className="product-heading mb-0">Type :</h3>
                    <p className="product-name mb-0">Watch</p>
                  </div>
                  <div className="d-flex align-items-center gap-10 my-1 ">
                    <h3 className="product-heading mb-0">Brand :</h3>
                    <p className="product-name mb-0">Havels</p>
                  </div>
                  <div className="d-flex align-items-center gap-10 my-1">
                    <h3 className="product-heading mb-0">Category :</h3>
                    <p className="product-name mb-0">Watch</p>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <h3 className="product-heading mb-0">Tags :</h3>
                    <p className="product-name mb-0">Watch</p>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <h3 className="product-heading mb-0">Availablity :</h3>
                    <p className="product-name mb-0">In stcok</p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3 ">
                    <h3 className="product-heading">Size :</h3>
                    <div className="d-flex flex-wrap gap-10">
                      <span className="border badge border-secondary text-dark">
                        S
                      </span>
                      <span className="border badge border-secondary text-dark">
                        M
                      </span>
                      <span className="border badge border-secondary text-dark">
                        L
                      </span>
                      <span className="border badge border-secondary text-dark">
                        XXL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Color :</h3>
                    <Colors />
                  </div>
                  <div className="d-flex align-items-center flex-row gap-15 mt-2 mb-3">
                    <h3 className="product-heading">Quantity :</h3>
                    <div>
                      <input
                        type="number"
                        min={0}
                        className="form-control"
                        max={10}
                        style={{ width: "70px" }}
                        name=""
                        id=""
                      />
                    </div>
                    <div className="d-flex align-items-center gap-30 ms-5 ">
                      <button className="button border-0" type="submit">
                        Add to Cart
                      </button>
                      <button to="/sign-up" className="button signup">
                        Buy it Now
                      </button>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-15 ">
                    <div>
                      <a href="">
                        <IoMdGitCompare className="fs-5 me-2" />
                        Add to Cart
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <CiHeart className="fs-5 me-2" />
                        Add to wishlist
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem dignissimos nobis soluta quo iusto libero et dolore
                  cupiditate corporis quibusdam debitis, sapiente similique,
                  consequuntur doloremque nulla id! Necessitatibus, facere modi?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper  home-wrapper-2 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 id="review">Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-item-end">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        value={"4"}
                        size={24}
                        activeColor="#ffd700"
                        edit={false}
                      />
                      <p className="mb-0">Based on 2 reviews</p>
                    </div>
                  </div>
                  {orderProduct && (
                    <div>
                      <a
                        href="c"
                        className="text-dark text-decoration-underline"
                      >
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <form action="" className="d-flex flex-column gap-15">
                    <h4 className="mb-2">Write a Review</h4>
                    <div>
                      <ReactStars
                        count={5}
                        value={"4"}
                        size={24}
                        activeColor="#ffd700"
                        edit={true}
                      />
                    </div>
                    <div>
                      <textarea
                        type="textarea"
                        className="w-100 form-control"
                        placeholder="comments"
                        name=""
                        id=""
                        cols="30"
                        rows="4"
                      />
                    </div>
                    <div className="d-flex  justify-content-end">
                      <button className="button border-0">Submit review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h5 className="mb-0">Rohith</h5>
                      <ReactStars
                        count={5}
                        value={"4"}
                        size={24}
                        activeColor="#ffd700"
                        edit={false}
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptate, voluptates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4 className="section-heading">Our Popular Products</h4>
            </div>
            <ProductCard />
            {/* <ProductCard />
            <ProductCard />
            <ProductCard /> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleProduct;
