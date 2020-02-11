import React, { Component } from "react";
import { fetching_Albums } from "../url";
import { albumAction } from "../Redux/Actions/albumAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Album extends Component {
  componentDidMount() {
    this.albumLoaded();
  }
  albumLoaded = () => {
    fetching_Albums().then(data => {
      this.props.fetch(data);
    });
  };
  render() {
    console.log(this.props.album);
    const cards = this.props.album ? (
      <div className="row">
        {this.props.album.map(item => (
          <div className="col-sm-4" key={item.id}>
            <div className="card mt-4">
              <div className="card-body">
                <Link to={"/Albums/" + item.userId}>
                  <p>{item.title}</p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <p className="text-danger">No Albums Found!!</p>
    );
    return <div className="container-fluid">{cards}</div>;
  }
}

const mapStateToProps = state => {
  return {
    album: state.albumReducer.albums
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: data => dispatch(albumAction(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Album);
