import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/Data";
function Home() {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative p-1">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="imf"
              />
              <div className="main-banner-content position-absolute">
                <h4>Supercharged For Pros.</h4>
                <h5>iPad s13+ pro.</h5>
                <p>From $999.0 </p>
                <Link className="button">Buy now</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative p-1">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="imf"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Supercharged For Pros.</h4>
                  <h5>iPad s13+ pro.</h5>
                  <p>From $999.0 </p>
                  {/* <Link className="button">Buy now</Link> */}
                </div>
              </div>

              <div className="small-banner position-relative p-1">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="imf"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Supercharged For Pros.</h4>
                  <h5>iPad s13+ pro.</h5>
                  <p>From $999.0 </p>
                  {/* <Link className="button">Buy now</Link> */}
                </div>
              </div>
              <div className="small-banner position-relative p-1">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="imf"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Supercharged For Pros.</h4>
                  <h5>iPad s13+ pro.</h5>
                  <p>From $999.0 </p>
                  {/* <Link className="button">Buy now</Link> */}
                </div>
              </div>
              <div className="small-banner position-relative p-1">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="imf"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Supercharged For Pros.</h4>
                  <h5>iPad s13+ pro.</h5>
                  <p>From $999.0 </p>
                  {/* <Link className="button">Buy now</Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              {services.map((comp, index) => {
                return (
                  <div className="d-flex align-items-center gap-10" key={index}>
                    <img src={comp.image} alt="servies" />
                    <div>
                      <h6>{comp.tagline}</h6>
                      <p className="mb-0">{comp.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap justify-content-between align-items-center">
              {/*  */}
              <div className="d-flex align-items-center">
                <div className="m-2">
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Smart TV</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Music and Games</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex align-items-center">
                <div className="m-2">
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/camera.jpg" alt="camera" />
              </div>
              {/*  */}
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Smart TV</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Music and Games</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/camera.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4 className="section-heading">Featured Collection</h4>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special products </h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2 ">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/famous-1.jpg"
                  alt="famous"
                  className="img-fluid"
                />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series-7</h6>
                  <p>From 120$</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/catbanner-01.jpg"
                  alt="famous"
                  className="img-fluid"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Studio Display</h5>
                  <h6 className="text-dark">600 nits</h6>
                  <p className="text-dark">27-inch 5k display</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/catbanner-01.jpg"
                  alt="famous"
                  className="img-fluid"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Studio Display</h5>
                  <h6 className="text-dark">600 nits</h6>
                  <p className="text-dark">27-inch 5k display</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/catbanner-01.jpg"
                  alt="famous"
                  className="img-fluid"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Studio Display</h5>
                  <h6 className="text-dark">600 nits</h6>
                  <p className="text-dark">27-inch 5k display</p>
                </div>
              </div>
            </div>
          </div>
      </Container>
      {/* Start */}
      <Container class1="popular-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h4 className="section-heading">Our Popular Products</h4>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
      </Container>
      {/* End */}
      <Container class1="marque-wrapper py-5">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h4 className="section-heading">Our Latest Blogs</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
      </Container>
    </>
  );
}

export default Home;
