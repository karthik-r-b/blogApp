import React, { Component } from "react";
import { fetching_Photos } from "../url";
import { photoAction } from "../Redux/Actions/albumAction";
import { connect } from "react-redux";
class Photo extends Component {
  componentDidMount() {
    this.fetching_Photos();
  }
  fetching_Photos = () => {
    let id = this.props.match.params.photoId;
    fetching_Photos(id).then(data => {
      this.props.fetch(data);
    });
  };
  render() {
    console.log(this.props.photo);
    const styleCard = {
      width: "18rem"
    };
    const photos = this.props.photo ? (
      <div className="row">
        <div className="row-sm-6">
          <div
            className="card ml-5 mt-4"
            style={styleCard}
            id={this.props.photo.id}
          >
            <img
              src={this.props.photo.url}
              className="card-img-top"
              alt={this.props.photo.thumbnailUrl}
            />
            <div className="card-body">
              <p className="card-text">{this.props.photo.title}</p>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <p>No Photos found!!</p>
    );
    return <div className="container-fluid">{photos}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state.albumReducer);
  return {
    photo: state.albumReducer.photos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: data => dispatch(photoAction(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Photo);
