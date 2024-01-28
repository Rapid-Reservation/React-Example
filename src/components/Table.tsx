import { useState } from "react";

import "/src/App.css";
//@ts-ignore
function Table({ number }) {
  //Its fine the number binding is type "any"

  // Use react hooks to set reserved and label states
  const [reserved, setReserved] = useState(false);
  const [label, setLabel] = useState("");

  // Function to get status and update table state
  function getStatus() {
    if (reserved == false) {
      setReserved(true);
      setLabel("Taken");
    } else if (reserved == true) {
      setReserved(false);
      setLabel("Open");
    }
  }
  //TSX that will be returned
  //The return statement can only return ONE HTML element. <> </> tags are fragment tags.
  // A fragment can house multiple tags and componenets, but is ONE element
  return (
    <>
      <div className="table">
        <div className={reserved ? "background-taken" : "background-open"}>
          <p>
            Table #{number} : {label}
          </p>
          <button onClick={getStatus}>Click me </button>
        </div>
      </div>
    </>
  );
}

export default Table;
