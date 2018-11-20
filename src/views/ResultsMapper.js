import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class ResultsMapper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SingleResult
        props={this.props}
        clickDetails={this.clickDetails}
        state={this.state}
      />
    );
  }
}

const SingleResult = data => (
  <div className="Results">
        {data.props.result.name !== undefined
          ? data.props.result.name
          : data.props.result.title}
      </div>
      {data.props.result.name !== undefined ? (
        <NavLink
          className="DetailsButton"
          to={{
            pathname: `/details/${data.props.category}/${data.props.result.name}`,
            state: { url: data.props.result.url }
          }}
        >
          <span>SEE DETAILS</span>
        </NavLink>
      ) : (
        <NavLink
          className="DetailsButton"
          to={{
            pathname: `/details/${data.props.category}/${data.props.result.title}`,
            state: {
              url: data.props.result.url,
              title: data.props.result.title
            }
          }}
        >
          <span>SEE DETAILS</span>
        </NavLink>
      )}
    </div>
    <div className="ResultBreak"/>
  </div>
);
