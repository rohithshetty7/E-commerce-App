import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";
function Footer() {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align items-center'>
            <div className='col-5'> <div
              className='footer-top-data d-flex gap-30 align-items-center'>
              <img src="images/newsletter.png" alt="newsletter" />
              <h2 className='mb-0 text-white'>Sign up for the news letters</h2>
            </div>  </div>
            <div className='col-7'>  <div className="input-group">
              <input type="text" className="form-control py-1" placeholder="Your email address" aria-label="Your email address" aria-describedby="basic-addon2" />
              <span className="input-group-text p-2" id="basic-addon2">SubScribe</span>
            </div></div>
          </div>

        </div>  </footer>
      <footer className='py-4'>
        <div className='container xxl'>
          <div className='row'>
            <div className='col-4'> <h4 className='text-white mb-4'>Contacts Us</h4> <div></div>
              <address className='text-white mb-0'>
                Hno:#27 Hsr Layout <br />
                Sector 7 Bangalore
              </address>
              <a href="tel: +9876543210" className='text-white mt-2 d-block mb-2'>9876543210</a>
              <a href="mailto: rohith@gmail.com" className='text-white mt-2 d-block mb-2'>rohith@gmail.com</a>
              <div className='social_icons d-flex align-items-center gap-30'>
                <a href="/" className='text-white' alt="social_icon"><FaLinkedin className=' fs-4' /></a>
                <a href="/" className='text-white' alt="social_icon"><FaGithub className=' fs-4' /></a>

                <a href="/" className='text-white' alt="social_icon"> <FaInstagramSquare className=' fs-4' /></a>



              </div>
            </div>
            <div className='col-3'> <h4 className='text-white mb-4'>Information</h4>  <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
              <Link className='text-white py-2 mb-1'>Refund Policy</Link>
              <Link className='text-white py-2 mb-1'>Shipping Poliy</Link>
              <Link className='text-white py-2 mb-1'>Terms of services</Link>
              <Link className='text-white py-2 mb-1'>Blogs</Link>

            </div></div>
            <div className='col-3'> <h4 className='text-white mb-4'>Account</h4> <div>
            </div>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>Faq</Link>
                <Link className='text-white py-2 mb-1'>Contacts</Link>

              </div>
            </div>
            <div className='col-2'> <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>HeadPhones</Link>
                <Link className='text-white py-2 mb-1'>Laptops</Link>
                <Link className='text-white py-2 mb-1'>Tablets</Link>
                <Link className='text-white py-2 mb-1'>Watch</Link>

              </div>
            </div>

          </div>
        </div>     </footer>
      <footer className='py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>&copy;{new Date().getFullYear()};Powered By Developers</p>

            </div>

          </div>

        </div>      </footer>

    </>
  )
}

export default Footer