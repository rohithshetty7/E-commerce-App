import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

function ResetPassword() {
  return (
    <>
      <Meta title={"ResetPassword"} />
      <BreadCrumb title="Reset Password" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Password</h3>
              <form action="" className="d-flex flex-column gap-30">
                <div className="mt-1">
                  <input
                    type="password"
                    name="password"
                    placeholder="Passwsord"
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="confpassword"
                    className="form-control"
                    placeholder="Confirm Password"
                  />
                </div>

                <div>
                  <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Confirm</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
