import React, { useState } from "react";

// functional component with hooks
const Secret = (props) => {
  const [showSecret, setShowSecret] = useState(false);

  const secretHandler = () => {
    setShowSecret(!showSecret);
  };

  /* example on how to path argument to a function */
  // const handleLast = (ref) => {
  //   setLast(ref);
  // };

  return (
    <div className="Counter">
      <h1>Secret</h1>
      {/* exmaple a conditionally rendered compenent */}
      <button onClick={secretHandler}>Show me the secret 🎁</button>
      {showSecret ? <h2>You look good 😉</h2> : null}

      {/* example on how to path argument to a function */}
      {/* <h3 onClick={() => handleLast("Alex")}>hello {last}</h3> */}
    </div>
  );
};
export default Secret;
