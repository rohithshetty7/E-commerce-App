import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <>
      <Meta title={"Forgot password"} />
      <BreadCrumb title="Forgot password" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset your password</h3>
                <p className="text-center mt-2 mb-2">
                  We will send you an email to reset your password
                </p>
                <form action="" className="d-flex flex-column gap-30">
                  <div className="mt-1">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <div className=" mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                      <button className="button signup" type="submit">
                        Submit
                      </button>
                      <Link to="/login">Cancel</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
