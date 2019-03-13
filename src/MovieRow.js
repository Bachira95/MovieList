import React, { Component } from "react";
import { connect } from "react-redux";

// AC
import * as actionCreators from "./store/actions";

class MovieRow extends Component {
  render() {
    const movie = this.props.movie;
    return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-7">{movie.title}</div>
          <div className="col-5">
            <button
              className="btn btn-info mx-1"
              onClick={() => this.props.toggleWatched(movie)}
            >
              {movie.watched ? "Unwatch" : "Watched"}
            </button>
            <button
              className="btn btn-danger mx-1"
              onClick={() => this.props.deleteMovie(movie)}
            >
              Delete
            </button>
          </div>
        </div>
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleWatched: movie => dispatch(actionCreators.toggleWatched(movie)),
    deleteMovie: movie => dispatch(actionCreators.deletMovie(movie))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MovieRow);
