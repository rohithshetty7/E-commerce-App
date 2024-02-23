import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { MdHome } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoMdInformationCircleOutline } from "react-icons/io";

function Contact() {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                title="This is map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15556.440217961908!2d77.61098819303686!3d12.900644263877036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14eec814197d%3A0xcf0ad378f26271e9!2sBommanahalli%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1708539102880!5m2!1sen!2sin"
                width="600"
                height="450"
                // style="border:0;"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact Us</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        placeholder="comments"
                        cols="30"
                        rows="4"
                      />
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in touch in us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <MdHome className="fs-5" />
                        <address className="mb-0">Home N0:12</address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <IoCall className="fs-5" />
                        <a style={{color:"black"}} href="tel+8989897898">9090909090</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <CiMail className="fs-5" />
                        <a style={{color:"black"}} href="mailto:rohith@rohtih.com">
                          mailto:rohith@rohtih.com
                        </a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        {" "}
                        <IoMdInformationCircleOutline />
                      <p className="mb-0">Monday -to friday</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
