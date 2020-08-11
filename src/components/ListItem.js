import React from "react";
import { Link } from "react-router-dom";

const ListItem = (props) => {
  let titleToPost;
  if (props.detail) {
    titleToPost = <h2>{props.post.title}</h2>;
  } else {
    titleToPost = (
      <Link to={`/detail/${props.post.id}`}>
        <h2>{props.post.title}</h2>
      </Link>
    );
  }
  return (
    <div>
      <div className="content">
        <div className="description">
          {titleToPost}
          <p>{props.post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
