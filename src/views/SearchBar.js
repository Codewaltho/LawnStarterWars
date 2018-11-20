import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topSearch: ["Chewbacca", " Yoda", " Boba Fett"],
      hasText: false,
      searched: "",
      category: "people",
      redirect: false
    };
  }

  setEvent(event) {
    this.setState({ category: event.target.value });
  }

  Searching(event) {
    if (event.key === "Enter") {
      this.props.Search(event.target.value, this.state.category);
      this.setState({
        hasText: true,
        searched: event.target.value,
        redirect: true
      });
    }
  }

  InputToggle(event) {
    if (event.target.value.length > 0) {
      this.setState({
        searched: event.target.value,
        hasText: true
      });
    } else if (event.target.value.length === 0) {
      this.setState({ hasText: false });
    }
  }

  onClick(event) {
    this.setState({ redirect: true });
    this.props.Search(this.state.searched, this.state.category);
  }

  SearchWhat = () => (
    <div className="SearchContainer">
      <div className="What-are-you-searching-for">
        What are you searching for?
      </div>
      <div className="RadioSearch" onChange={this.setEvent.bind(this)}> //Radiosearch needs css
        <input
        //Add Radio buttons
        />
        People
        <input className="People" type="radio" value="movies" name="search" />
        Movies
      </div>

      <div
        onKeyPress={this.Searching.bind(this)}
        onChange={this.InputToggle.bind(this)}
      >
        <input
          className="SearchArea"
          type="text"
          name="searchBar"
          placeholder={`e.g. ${this.state.topSearch}`}
        />
        <button
          className={`SearchButton footer ${
            this.state.hasText ? "enabled" : "disabled"
          }`}
          onClick={this.state.hasText ? this.onClick.bind(this) : null}
        >
          {this.props.nowSearching ? "SEARCHING..." : "SEARCH"}
        </button>
      </div>
    </div>
  );

  render() {
    if (this.state.redirect) {
      return (
        <div>
          <Redirect push to={`/category/${this.state.searched}`} />
          <this.SearchWhat />
        </div>
      );
    }
    return (
      <div>
        <this.SearchWhat />
      </div>
    );
  }
}

export default SearchBar;
