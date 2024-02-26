import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function SingleBlog() {
  return (
    <>
      <Meta title={"Blog"} />
      <BreadCrumb title="Blog" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <FaArrowLeft className="fs-4" />
                  Go back to Blogs
                </Link>
                <h3 title="title">A Beautiful Sumday Moring</h3>
                <img
                  className="img-fluid  my-4"
                  src="/images/blog-1.jpg"
                  alt="blog"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit molestiae earum eveniet eius. Suscipit, reprehenderit
                  voluptatibus et mollitia minima, ut quas unde tempore autem
                  tempora magnam, quo quisquam voluptate incidunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleBlog;
