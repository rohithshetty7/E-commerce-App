import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import CustomInput from "../components/CustomInput";

function SignUp() {
  return (
    <>
      <Meta title={"Signup Page"} />
      <BreadCrumb title="Signup Page" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">SignUp</h3>
                <form action="" className="d-flex flex-column gap-30">
                  <CustomInput
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                  />
                  <CustomInput
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                  />

                  <CustomInput
                    type="tel"
                    name="mobile"
                    placeholder="Mobile"
                    className="form-control"
                  />

                  <CustomInput
                    // className="mt-1"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <div>
                    <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center">
                      <button className="button border-0">SignUp</button>
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

export default SignUp;
