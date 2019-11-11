import React, { useState } from "react";
/**
 * React Form Example
 */
const dayInput = React.createRef();
function ReactFormEx(props) {
  const [day, setDay] = useState(props.daysOfWeek[0]);
  function handleSelect(e) {
    console.log(e.target.value);
    setDay(e.target.value);
  }
  function handleSubmit(e) {
    alert(dayInput.current.value);
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={day} ref={dayInput} />
      <br />
      <textarea value="react" />
      <br />
      <select value={day} onChange={handleSelect}>
        {props.daysOfWeek.map(day => (
          <option value={day} key={day}>
            {day}
          </option>
        ))}
      </select>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default ReactFormEx;
