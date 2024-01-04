import React, { useState } from "react";
import "./Task.css";

function Task({ index, task }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div key={index} className="taskContainer">
      <div className="taskCompletion">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className={isChecked ? "completedTask" : ""}>{task}</div>
    </div>
  );
}

export default Task;
