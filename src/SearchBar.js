import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class SearchBar extends Component {
  render() {
    return (
      <div className="input-group input-group-lg m-0">
        <input
          type="text"
          className="form-control border-0"
          placeholder="Search movies..."
          aria-label="Search"
          onChange={this.props.handleChange}
        />
        <span className="my-auto mr-3">
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>
    );
  }
}

export default SearchBar;
