import React, { useState } from "react";

const TaskForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredTitle === "") {
      alert("Please enter task befor submit!!");
      props.onCancle();
    } else {
      const addedData = {
        title: enteredTitle,
      };
      props.onAddData(addedData);
      localStorage.setItem("taskDate", new Date().getDate());
      setEnteredTitle("");
    }
  };
  const keyDownHandler = (e) => {
    if (e.key === "Enter") {
      submitHandler(e);
    } else if (e.key === "Escape") {
      props.onCancle();
    }
  };

  return (
    <form className="task-form">
      <input
        type="text"
        placeholder="Add task here...."
        value={enteredTitle}
        onChange={titleChangeHandler}
        onKeyDown={keyDownHandler}
        autoFocus
      />
    </form>
  );
};

export default TaskForm;
