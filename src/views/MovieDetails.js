import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { MovieDetailsColumn, MoviePeopleColumn } from "./ItemDetails";

export default class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    axios({
      method: "get",
      url: `${this.props.location.state.url}`
    })
      .then(res => {
        let filmsStorage = [];
        for (let i = 0; i <= res.data.characters.length; i++) {
          axios({ method: "get", url: `${res.data.characters[i]}` })
            .then(res => {
              filmsStorage.push(res.data);
            })
            .catch(err => {
              console.log(err.data);
            });
        }
        setTimeout(() => {
          this.setState({
            detailColumn: res.data,
            movies: filmsStorage
          });
        }, 500);
      })
      .catch(err => {
        console.log(err.data);
      });
  }

  render() {
    return <DetailsComp props={this.props} state={this.state} />;
  }
}

const DetailsComp = props => (
  <div>
    <header style={{ marginBottom: "30px" }}>
      <div className="SWStarter">SWStarter</div>
    </header>
    <div className="DetailsBG wrapper">
      <div className="ResultsTitle">{props.props.match.params.name}</div>
      <div className="Details aside">
        <div className="details-title">Opening Crawl</div>
        <div className="divider-details" />
        <div className="information-details" style={{ fontWeight: "normal" }}>
          <MovieDetailsColumn info={props.state} />
        </div>
      </div>
      <div className="Movies aside" style={{ marginLeft: "10%" }}>
        <div className="details-title">Characters</div>
        <div className="divider-details" />
        <div
          className="information-details"
          style={{ fontWeight: "normal", width: "300px" }}
        >
          <MoviePeopleColumn info={props.state} />
        </div>
      </div>
      <NavLink className="footer" to="/">
        <span
          className="DetailsButton"
          style={{ float: "left", width: "187px" }}
        >
          <div style={{ marginTop: "7px" }}>BACK TO SEARCH</div>
        </span>
      </NavLink>
    </div>
  </div>
);

// export default Details;
