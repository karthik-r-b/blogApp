import React, { Component } from "react";
import { formAction } from "../Redux/Actions/formAction";
import { connect } from "react-redux";
import { addPosts } from "../url";
class Add extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    let data = this.state;
    addPosts(data).then(data => {
      this.props.submitPost(data);
    });
    this.props.history.push("/");
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className="form-add text-center">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              onChange={this.handleChange}
              maxLength="100"
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">Content</label>
            <textarea
              type="text"
              name="body"
              className="form-control"
              onChange={this.handleChange}
              maxLength="300"
            />
          </div>
          <br />
          <button className="btn btn-primary mr-2" id="add-post">
            Add Post
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitPost: data => dispatch(formAction(data))
  };
};
export default connect(null, mapDispatchToProps)(Add);
