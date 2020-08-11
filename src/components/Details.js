import React from "react";
import { connect } from "react-redux";
import UserHeader from "./UserHeader";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";

const Details = (props) => {
  if (!props.post) {
    return null;
  }
  return (
    <div style={{ margin: 50 }}>
      <Link to={"/"}>
        <h3>{`<< Back`}</h3>
      </Link>
      Post by:
      <UserHeader userId={props.post && props.post.userId} />
      <ListItem post={props.post} detail={true} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.posts.find(
      (post) => post.id === parseInt(ownProps.match.params.id)
    ),
  };
};

export default connect(mapStateToProps)(Details);
