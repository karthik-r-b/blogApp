import React, { Component } from "react";
import { connect } from "react-redux";
class Comments extends Component {
  render() {
    const list = this.props.comments ? (
      <div>
        {this.props.comments.map(item => (
          <div className="card mt-4" key={item.id}>
            <div className="card-header bg-info">{item.name}</div>
            <div className="card-body">{item.body}</div>
            <div className="card-footer">{item.email}</div>
          </div>
        ))}
      </div>
    ) : (
      <p className="text-danger">No Comments Found</p>
    );
    return <div className="comments">{list}</div>;
  }
}

const mapStateToProps = state => {
  return {
    comments: state.postReducer.comments
  };
};

export default connect(mapStateToProps)(Comments);
