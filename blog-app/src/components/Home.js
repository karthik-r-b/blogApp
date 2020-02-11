import React, { Component } from "react";
import { fetching_Posts } from "../url";
import { postAction } from "../Redux/Actions/postsAction";
import { deleteAction } from "../Redux/Actions/formAction";
import { deletePost } from "../url";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Home extends Component {
  componentDidMount() {
    this.postsLoading();
  }
  postsLoading() {
    fetching_Posts().then(data => {
      this.props.fetch(null);
      this.props.fetch(data);
    });
  }

  handleClick = e => {
    e.preventDefault();
    if (e.target.id === "add") this.props.history.push("/post/add");
    else if (e.target.id === "delete") {
      deletePost(e.target.value).then(data => {
        this.props.delete(data);
      });
    }
  };
  render() {
    const styleCard = {
      width: "100%",
      marginTop: "20px"
    };

    const div = this.props.posts ? (
      <div className="row">
        {this.props.posts.map(item => (
          <div className="col-sm-6" key={item.id}>
            <div className="card" style={styleCard}>
              <Link to={"/" + item.id}>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.body}</p>
                </div>
              </Link>
              <span>
                <button
                  className="btn btn-danger mx-auto mb-2"
                  id="delete"
                  value={item.id}
                  onClick={this.handleClick}
                >
                  Delete
                </button>
              </span>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <p className="text-danger">No Posts Found</p>
    );
    return (
      <div className="container-fluid">
        <div className="header-style">
          <h1 className="text-info">Posts</h1>
          <button
            className="btn btn-primary"
            onClick={this.handleClick}
            id="add"
          >
            Add Post
          </button>
        </div>
        {div}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.postReducer.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: data => dispatch(postAction(data)),
    delete: data => dispatch(deleteAction(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
