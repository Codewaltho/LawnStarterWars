import React, { Component } from "react";
import axios from "axios";
import Search from "./Search";
import Results from "./Results";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { SearchResults: [], currentlySearching: false, topic: "" };
    this.Search = this.Search.bind(this);
  }

  Search(searched, topic) {
    this.setState({
      currentlySearching: true,
      topic: topic
    });

    axios({
      method: "get",
      url: `https://swapi.co/api/${
        topic === "movies" ? "films" : topic
      }/?search=${searched}`
    })
      .then(res => {
        this.setState({
          currentlySearching: false,
          SearchResults: res.data.results
        });
      })
      .catch(err => {
        console.log(err.data);
      });
  }
  render() {
    return (
      <div>
        <header style={{ marginBottom: "30px" }}>
          <div className="SWStarter">SWStarter</div>
        </header>
        <div className="wrapper">
          <Search
            Search={this.Search}
            currentlySearching={this.state.currentlySearching}
          />
          <Results
            currentlySearching={this.state.currentlySearching}
            Results={this.state.SearchResults}
            topic={this.state.topic}
          />
        </div>
      </div>
    );
  }
}
