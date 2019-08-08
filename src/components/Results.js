import React from "react";

function Results(props) {
  const results = props.results.map(result => <li key={result}>{result}</li>);
  return <ul className="results">{results}</ul>;
}

export default Results;
