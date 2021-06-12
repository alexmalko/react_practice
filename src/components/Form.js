import React, { useState } from "react";

// functional component with hooks
const Form = (props) => {
  const [name, setName] = useState("");
  const [value, setValue] = useState([]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSumbit2 = (e) => {
    e.preventDefault();
    setValue(name);
    setName("");
  };

  return (
    <div className="Counter">
      <h1>Form Element</h1>
      <form onSubmit={handleSumbit2}>
        <input type="text" value={name} onChange={handleChange}></input>
      </form>
      <p>{value}</p>
    </div>
  );
};
export default Form;
