import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topResults: ["Chewbacca", " Yoda", "  Boba Fett"],
      textInSearch: false,
      searched: "",
      topic: "people",
      redirect: false
    };
  }

  setTopic(event) {
    this.setState({ topic: event.target.value });
  }

  Searching(event) {
    if (event.key === "Enter") {
      this.props.Search(event.target.value, this.state.topic);
      this.setState({
        textInSearch: true,
        searched: event.target.value,
        redirect: true
      });
    }
  }

  InputToggle(event) {
    if (event.target.value.length > 0) {
      this.setState({
        searched: event.target.value,
        textInSearch: true
      });
    } else if (event.target.value.length === 0) {
      this.setState({ textInSearch: false });
    }
  }

  onClick(event) {
    this.setState({ redirect: false });
    this.props.Search(this.state.searched, this.state.topic);
  }

  SearchComp = () => (
    <div className="SearchContainer">
      <div className="What-are-you-searching-for">
        What are you searching for?
      </div>
      <div className="RadioToggle" onChange={this.setTopic.bind(this)}>
        <input
          style={{ marginRight: "5px" }}
          type="radio"
          value="people"
          name="search"
          defaultChecked
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
          className="Searchbox"
          type="text"
          name="searchBar"
          placeholder={`e.g. ${this.state.topResults}`}
        />
        <button
          className={`SearchButton footer ${
            this.state.textInSearch ? "enabled" : "disabled"
          }`}
          onClick={this.state.textInSearch ? this.onClick.bind(this) : null}
        >
          {this.props.currentlySearching ? "SEARCHING..." : "SEARCH"}
        </button>
      </div>
    </div>
  );

  render() {
    if (this.state.redirect) {
      return (
        <div className="aside" style={{ marginLeft: "14%" }}>
          <Redirect push to={`/topic/${this.state.searched}`} />
          <this.SearchComp />
        </div>
      );
    }
    return (
      <div className="aside" style={{ marginLeft: "14%" }}>
        <this.SearchComp />
      </div>
    );
  }
}
