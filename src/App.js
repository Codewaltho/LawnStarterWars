import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Main from "./views/Main";
import "./App.css";
import PeopleDetails from "./views/PeopleDetails";
import MovieDetails from "./views/MovieDetails";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/details/people/:name/" component={PeopleDetails} />
            <Route exact path="/details/movies/:name/" component={MovieDetails} />
            <Route exact path="/topic/:search" component={Main} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
