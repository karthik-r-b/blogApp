import React, { Component } from "react";
import { fetching_LinkPosts, fetching_Comments } from "../url";
import {
  postLinkAction,
  postCommentsAction
} from "../Redux/Actions/postsAction";
import { connect } from "react-redux";
import Comments from "./Comments";
import EditPost from "./editPost";
import { Button, ButtonToolbar } from "react-bootstrap";

class Post extends Component {
  constructor() {
    super();
    this.state = {
      addModalShow: false
    };
  }
  componentDidMount() {
    this.post();
  }
  handleClick = e => {
    e.preventDefault();
    let button_id = e.target.id;
    if (button_id === "comments") {
      const id = e.target.value;
      fetching_Comments(id).then(data => {
        this.props.comments(data);
      });
    } else if (button_id === "edit") {
      this.setState({
        addModalShow: true
      });
    } else {
    }
  };
  post() {
    const id = this.props.match.params.postId;
    console.log(this.props.match.params);
    fetching_LinkPosts(0).then(data => {
      this.props.link(data);
    });
    fetching_LinkPosts(id).then(data => {
      this.props.link(data);
    });
  }
  render() {
    let addModalClose = () => {
      this.setState({
        addModalShow: false
      });
    };
    const list = this.props.content ? (
      <div className="post">
        <h4 className="text-center">{this.props.content.title}</h4>
        <p>{this.props.content.body}</p>
        <button
          className="btn btn-primary"
          onClick={this.handleClick}
          id="comments"
          type="button"
          value={this.props.content.userId}
        >
          Comments
        </button>
        <br />
        <br />
        <div className="btn-group">
          <ButtonToolbar>
            <Button variant="primary mr-2" onClick={this.handleClick} id="edit">
              Edit
            </Button>
            <EditPost
              onHide={addModalClose}
              show={this.state.addModalShow}
              contents={this.props.content}
            />
          </ButtonToolbar>
        </div>
      </div>
    ) : (
      <p>Data Not found</p>
    );
    return (
      <main>
        {list}
        <Comments />
      </main>
    );
  }
}
const mapStateToProps = state => {
  return {
    content: state.postReducer.post
  };
};
const mapDispatchToProps = dispatch => {
  return {
    link: data => dispatch(postLinkAction(data)),
    comments: data => dispatch(postCommentsAction(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
