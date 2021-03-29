import "./App.css";
import NumberBox from "./numberbox";
import { initial } from "./initialstatus";
import { useState } from "react";
export default function App() {
  const [status, setStatus] = useState(initial);
  const setNumber = (number, section, reset) => {
    const newStatus = { ...status };
    if (!number && reset) {
      let i = 0; 
      while (i < 10) {
        if (status[i] === section) {
          newStatus[i] = "";
        }
        i++;
      }
    }
    if (number && status[number] === section) {
      newStatus[number] = "";
    } else {
      newStatus[number] = section;
    }
    setStatus(newStatus);
  };
  return (
    <div className="App">
      {status.sections.map((section) => {
        return (
          <div className="wrap" key={`${section}`}>
            <NumberBox
              numbers={Object.keys(status)}
              status={status}
              section={section}
              setNumber={setNumber}
            />
            <button
              value={section}
              onClick={(e) => {
                setNumber("", e.target.value, true);
              }}
            >
              reset
            </button>
          </div>
        );
      })}
    </div>
  );
}
