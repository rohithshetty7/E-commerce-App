import React from "react";
import { Link } from "react-router-dom";

function BlogCard() {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" className="img-fluid" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date"> 11 Feb 2024</p>

          <h5 className="title">
            Lorem ipsum dolor sit, amet consectetur 
          </h5>
          <p className="desc">
             minus qui molestiae fugiat iusto maxime dolorum
            suscipit tenetur neque tempora nesciunt exercitationem voluptas
            quis, eaque laborum.
          </p>
          <Link to="" className="button">Read me</Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
