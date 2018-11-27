import React from "react";
import IndividualResult from "./IndividualResult";

const Results = props => (
  <div className="MatchesBG aside">
    <div className="ResultsTitle">Results</div>
    <div className="divider" />
    {props.currentlySearching ? (
      <div className="NoResults">Searching....</div>
    ) : props.Results.length === 0 ? (
      <div className="NoResults">
        <span>There are zero matches.</span>
        <span>Use the form to search for People or Movies. </span>
      </div>
    ) : (
      <div className="ResultsContainer">
        {props.Results.map((item, i) => (
          <IndividualResult
            key={`${item}-${i}`}
            result={item}
            topic={props.topic}
          />
        ))}
      </div>
    )}
  </div>
);

export default Results;
