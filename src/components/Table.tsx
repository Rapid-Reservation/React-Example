import { useState } from "react";

import "/src/App.css";

function Table({ number }) {
  const [reserved, setReserved] = useState(false);
  const [label, setLabel] = useState("");
  function getStatus() {
    if (reserved == false) {
      setReserved(true);
      setLabel("Taken");
    } else if (reserved == true) {
      setReserved(false);
      setLabel("Open");
    }
  }

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
