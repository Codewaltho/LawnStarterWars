import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Results from "./Results";

export default class Home extends Component {
  constructor(props) {
    super(props) {
    this.satte = {SearchResults: [], nowSearching: false, category: ""};
    this.Search = this.Search.bind(this);
    }

  axios({
      method: "get",
      url: `https://swapi.co/api/${
        category === "movies" ? "films" : category}/?search=${searched}`
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
  })
  }
}

//render statement -- pausing because time limit reached
