import React from "react";
import ResultsMapper from "./ResultsMapper";

const Results = props => (
  <div className="MatchesBG">
    <div className="Results">Results</div>
    <div className="ResultBreak" />
    {props.nowSearching ? (
      <div className="ZeroMatches">Searching....</div>
    ) : props.Results.length === 0 ? (
      <div className="ZeroMatches">
        <span>There are zero matches.</span>
        <span>Use the form to search for People or Movies. </span>
      </div>
     :
     ( <div className="MatchesBG">
        {props.Results.map((item, i) => ()
          <ResultsMapper
          />
        ))}
      </div>
    )}
  </div>
);

export default Results;
