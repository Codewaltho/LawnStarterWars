import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class IndividualResult extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <IndividualResultComp
        props={this.props}
        clickDetails={this.clickDetails}
        state={this.state}
      />
    );
  }
}

const IndividualResultComp = data => (
  <div className="Result">
    <div style={{ margin: "17px 0" }}>
      <div className="ResultName" style={{ display: "inline-block" }}>
        {data.props.result.name !== undefined
          ? data.props.result.name
          : data.props.result.title}
      </div>
      {data.props.result.name !== undefined ? (
        <NavLink
          className="DetailsButton"
          to={{
            pathname: `/details/${data.props.topic}/${data.props.result.name}`,
            state: { url: data.props.result.url }
          }}
        >
          <span style={{ paddingTop: "7px" }}>SEE DETAILS</span>
        </NavLink>
      ) : (
        <NavLink
          className="DetailsButton"
          to={{
            pathname: `/details/${data.props.topic}/${data.props.result.title}`,
            state: {
              url: data.props.result.url,
              title: data.props.result.title
            }
          }}
        >
          <span style={{ paddingTop: "7px" }}>SEE DETAILS</span>
        </NavLink>
      )}
    </div>
    <div className="divider" style={{ marginBottom: "17px" }} />
  </div>
);
