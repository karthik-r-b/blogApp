import React, { Component } from "react";
import { Button, ButtonToolbar, Modal } from "react-bootstrap";
import { editPost } from "../url";
import { editAction } from "../Redux/Actions/formAction";
import { connect } from "react-redux";
class EditPost extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      title: "",
      body: "",
      addModalShow: false
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.contents.title,
      body: nextProps.contents.body
    });
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  keyChange = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  };

  handleClick = e => {
    e.preventDefault();
    let data = this.state;
    data.id = this.props.contents.id;
    editPost(data).then(data => {
      this.props.submitPost(data);
    });
    this.props.onHide();
  };

  // static getDerivedStateFromProps(props, setState) {
  //   const { contents } = props;
  //   let Propstitle = contents.title;
  //   let Propsbody = contents.body;
  //   let title = { ...setState.title, Propstitle };
  //   let body = { ...setState.body, Propsbody };
  //   return {
  //     title: title.Propstitle,
  //     body: body.Propsbody
  //   };
  // }
  render() {
    console.log(this.props);
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="Title">Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={this.state.title}
                onKeyUp={this.keyChange}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Body">Content</label>
              <textarea
                className="form-control"
                name="body"
                value={this.state.body}
                onChange={this.handleChange}
                maxLength="300"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <ButtonToolbar>
            <Button variant="danger mr-2" onClick={this.props.onHide}>
              Close
            </Button>
            <Button variant="success" onClick={this.handleClick}>
              Save Changes
            </Button>
          </ButtonToolbar>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitPost: data => dispatch(editAction(data))
  };
};

export default connect(null, mapDispatchToProps)(EditPost);
