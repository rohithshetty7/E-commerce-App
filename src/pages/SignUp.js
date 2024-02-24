import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <>
      <Meta title={"Signup Page"} />
      <BreadCrumb title="Signup Page" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className='container-xxl'>
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">SignUp</h3>
                <form action="" className="d-flex flex-column gap-30">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="mt-1">
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Mobile"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="email"
                    />
                  </div>

                  <div className="mt-1">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center">
                      <button className="button border-0">Create</button>

                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp