import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import CustomInput from "../components/CustomInput";

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
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Passwsord"
                  className="form-control"
                />
                <CustomInput
                  type="password"
                  name="confpassword"
                  className="form-control"
                  placeholder="Confirm Password"
                />

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
