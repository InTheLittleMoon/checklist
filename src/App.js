import React, { useState } from "react";
import "./App.css";

//components
import Additem from "./componenets/AddItem/Additem";
import Task from "./componenets/Task/Task";

function App() {
  const [taskBin, setTaskBin] = useState([]);

  return (
    <div className="App">
      <Additem setTaskBin={setTaskBin} />
      {taskBin.map((task, index) => (
        <Task task={task} index={index} />
      ))}
    </div>
  );
}

export default App;
