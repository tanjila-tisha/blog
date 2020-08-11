import React from "react";
import { connect } from "react-redux";

const UserHeader =(props)=> {
  
    if (!props.user) {
      return null;
    }
    return ( 
      
      <div className="header"><i className="large middle aligned icon user" />{props.user.name}</div>
    )
    
  
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};
export default connect(mapStateToProps)(UserHeader);
