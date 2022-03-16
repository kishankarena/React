import React, { useState, useEffect } from "react";
import List from "./List";
import AddTask from "./addtask/AddTask";

// getTitle function
const getTitle = () => {
  const list = localStorage.getItem("title");
  if (list) {
    return JSON.parse(localStorage.getItem("title"));
  } else {
    return [];
  }
};

// content component
const Content = (props) => {
  const date = new Date();
  const [tasks, setTasks] = useState(getTitle());

  let taskDate = parseInt(localStorage.getItem("taskDate"));
  let currDate = date.getDate();

  useEffect(() => {
    if (currDate !== taskDate) {
      localStorage.clear();

      console.log("clear localstorage");
      if (localStorage.getItem("title") === null) {
        setTasks(getTitle());
      }
    }
  }, [currDate]);

  // Add task to local storage
  const addTaskHandler = (taskData) => {
    setTasks((prevTaskData) => {
      return [...prevTaskData, taskData];
    });
  };
  useEffect(() => {
    localStorage.setItem("title", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <ul className="app-content">
        {tasks.map((task) => {
          return <List key={task.id} storageKey={task.id} title={task.title} />;
        })}
      </ul>
      <AddTask onAddTask={addTaskHandler} />
    </>
  );
};

export default Content;
