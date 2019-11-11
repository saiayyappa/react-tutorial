import React from "react";
import "./App.css";
import Hello from "./Hello";
import Hello2 from "./Hello2";
import OneWayFlow from "./OneWayFlow";
import ReactFormEx from "./ReactFormEx";

function App() {
  const names = ["sai", "nave", "boo"];
  const daysOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  ];
  return (
    <div>
      <Hello />
      <Hello2 />
      <OneWayFlow data={names} />
      <ReactFormEx daysOfWeek={daysOfWeek} />
    </div>
  );
}

export default App;
