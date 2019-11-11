import React from "react";
/**
 * The data is passed from App component
 * @param {data} props
 */
function OneWayFlow(props) {
  return (
    <ul>
      {props.data.map(d => (
        <li key={d}>{d}</li>
      ))}
    </ul>
  );
}

export default OneWayFlow;
