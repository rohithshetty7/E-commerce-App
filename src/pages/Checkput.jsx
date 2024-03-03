import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import watch from "./images/watch.jpg";
function Checkput() {
  return (
    <>
      {/* <Meta title={"Checkout"} />
      <BreadCrumb title="Checkout" /> */}
      <div className="checkout-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">Dev-conrner</h3>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link className="text-dark" href="#">
                        Cart
                      </Link>
                    </li>

                    <li className="breadcrumb-item" aria-current="page">
                      Information
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Shipping
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Payments
                    </li>
                  </ol>
                </nav>
                <h4 className="title">Contact Information</h4>
                <p className="user-details">rohith@gmail.com</p>
                <h4 className="mb-3">Shipping Address</h4>
                <form
                  action=""
                  className="d-flex gap-15 flex-wrap justify-content-between"
                >
                  <div className="w-100">
                    <select name="" className="form-control form-select" id="">
                      <option value="" selected disabled>
                        Select Country
                      </option>
                    </select>
                  </div>

                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Apartment"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="City"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <select name="" className="form-control form-select" id="">
                      <option value="" selected disabled>
                        Select State
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Zipcode"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <div className="d-flex align-items-center justify-content-between">
                      <Link className="text-dark" to="/cart">
                        <IoIosArrowRoundBack className="me-2" />
                        Return to cart
                      </Link>
                      <Link to="/cart" className="button">
                        Contine to shipping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="border-bottom py-4">
                <div className="d-flex gap-10 mb-2 align-items-center">
                  <div className="w-75 d-flex gap-10">
                    <div className="w-25 position-relative">
                      {/* <span style={{top:"-10px", right:"20px"}} className="badge bg-secondary text-white rounded-circle p-1 positon-absolute">
                        1
                      </span> */}
                      <img className="img-fluid" src={watch} alt="" />
                    </div>
                    <div>
                      <h5 className="total-price">TTTT</h5>
                      <p className="total-price">s/#123</p>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="total">$100</h5>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div className="d-flex align-items-center justify-content-between">
                  <p className="total">Subtotal</p>
                  <p className="total-price">$ 1000</p>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="mb-0 total">Shipping</p>
                  <p className="mb-0 tota-price">$ 1000</p>
                </div>
              </div>
              <div className="border-bottom py-4 d-flex align-items-center justify-content-between">
                <h4 className="total">Total</h4>
                <h5 className="total-price">$ 1000</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkput;
