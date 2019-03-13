import React, { Component } from "react";
import { connect } from "react-redux";

//Components
import SearchBar from "./SearchBar";
import MovieRow from "./MovieRow";

class MovieList extends Component {
  state = {
    query: ""
  };

  updateQuery = e => {
    this.setState({ query: e.target.value });
  };

  render() {
    const movies = this.props.movies.filter(
      movie => movie.watched === !!this.props.watched
    );
    let filteredMovies = movies;

    if (this.state.query) {
      filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(this.state.query.toLowerCase())
      );
    }

    const movieRows = filteredMovies.map((movie, idx) => (
      <MovieRow key={movie.title + idx} movie={movie} />
    ));

    return (
      <div className="col-6">
        <div className="my-4">
          <h3>
            {this.props.watched ? "Watched" : "Watchlist"}
            <span className="badge badge-pill badge-light ml-4">
              {filteredMovies.length}
              {filteredMovies.length !== movies.length &&
                ` out of ${movies.length}`}
            </span>
          </h3>
        </div>
        <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item p-0">
              <SearchBar handleChange={this.updateQuery} />
            </li>
            {movieRows}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

export default connect(mapStateToProps)(MovieList);
