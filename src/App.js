import React, { Component } from "react";

// Components
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";

class App extends Component {
  render() {
    return (
      <div className="container">
        <AddMovie />
        <div className="row">
          <MovieList />
          <MovieList watched />
        </div>
      </div>
    );
  }
}

export default App;
