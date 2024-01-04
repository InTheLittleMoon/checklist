import React, { useState } from "react";
import "./Additem.css";

function Additem({ setTaskBin }) {
  const [checklistInputVal, setChecklistInputVal] = useState("");

  const checklistInputHandler = (event) => {
    setChecklistInputVal(event.target.value);
  };

  const addItemHandler = () => {
    if (checklistInputVal === "") {
      return;
    }

    setTaskBin((prevState) => {
      let newState = [...prevState, checklistInputVal];
      return newState;
    });
    setChecklistInputVal("");
  };

  return (
    <div className="AddItemContainer">
      <h1>To Do List</h1>
      <div className="addItemActions">
        <input
          value={checklistInputVal}
          onChange={(event) => {
            checklistInputHandler(event);
          }}
        ></input>
        <button
          className="addItemButton"
          onClick={() => {
            addItemHandler();
          }}
        >
          Add to List
        </button>
      </div>
    </div>
  );
}

export default Additem;
