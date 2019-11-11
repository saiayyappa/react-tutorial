import React, { useState } from "react";
/**
 * Using function component, state has been modified
 */
function Hello() {
  var [name, setName] = useState("Harry");
  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div>
      Using Function component
      <br />
      <input value={name} onChange={handleChange} />
    </div>
  );
}

export default Hello;
