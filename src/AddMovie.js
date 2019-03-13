import React, { Component } from "react";
import { connect } from "react-redux";

// Action Creators
import * as actionCreators from "./store/actions";

class AddMovie extends Component {
  state = {
    title: ""
  };

  handleChange = e => this.setState({ title: e.target.value });

  handleKeyPress = e => {
    if (e.key === "Enter") this.submitMovie();
  };

  submitMovie = () => {
    if (this.state.title) {
      this.props.addMovie(this.state.title);
      this.setState({ title: "" });
    }
  };

  render() {
    return (
      <div className="col-6 mx-auto">
        <div className="input-group input-group-lg my-3">
          <input
            type="text"
            className="form-control"
            placeholder="Movie..."
            value={this.state.title}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            aria-label="Movie"
            aria-describedby="add-button"
          />
          <div className="input-group-append">
            <button
              className="btn btn-info"
              type="button"
              id="add-button"
              onClick={this.submitMovie}
            >
              + Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addMovie: title => dispatch(actionCreators.addMovie(title))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddMovie);
