import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import CustomInput from "../components/CustomInput";
function Login() {
  return (
    <>
      <Meta title={"Login Page"} />
      <BreadCrumb title="Login Page" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Login</h3>
                <form action="" className="d-flex flex-column gap-30">
                  <CustomInput
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="email"
                  />
                  <CustomInput
                    className="mt-1"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <div>
                    <Link to="/forgot-password">Forgot password</Link>
                    <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center">
                      <button className="button border-0" type="submit">
                        Login
                      </button>
                      <Link to="/sign-up" className="button signup">
                        Sign Up
                      </Link>
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

export default Login;
