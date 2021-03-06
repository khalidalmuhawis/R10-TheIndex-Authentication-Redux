import React from "react";
import { Link } from "react-router-dom";

// Components
import ImageWithPlaceHolder from "./ImageWithPlaceHolder";

const AuthorCard = ({ author }) => (
  <div className="col-lg-4 col-md-6 col-12">
    <Link to={`/authors/${author.id}`} className="card">
      <div className="image">
        <ImageWithPlaceHolder
          className="card-img-top img-fluid"
          src={author.imageUrl}
          alt={author.first_name + " " + author.last_name}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">
          <span>{author.first_name + " " + author.last_name}</span>
        </h5>
        <small className="card-text">{author.books.length} books</small>
      </div>
    </Link>
  </div>
);

export default AuthorCard;
