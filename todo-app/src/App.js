import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css'
import Content from './components/Content';
import AddTask from './components/addtask/AddTask';

const getTitle = () => {
  const list = localStorage.getItem('title');
  if (list) {
    return JSON.parse(localStorage.getItem('title'));
  }
  else {
    return [];
  }

};

const App = () => {
  const [date, setDate] = useState(new Date());
  const [tasks, setTasks] = useState(getTitle());

  let taskDate = parseInt(localStorage.getItem('taskDate'));
  let currDate = date.getDate();

  useEffect(() => {
    if (currDate !== taskDate) {
      localStorage.clear();
      console.log("clear localstorage")
      if (localStorage.getItem('title') === null) {
        // console.log("re-render")
        setTasks(getTitle());
      }
    }
  }, [date.getMinutes()]);

  setInterval(() => {
    setDate(new Date());
    console.log("set date");
  }, 60 * 1000);

  // Add task to local storage
  const addTaskHandler = (taskData) => {
    setTasks((prevTaskData) => {
      return [...prevTaskData, taskData];
    })
  };
  useEffect(() => {
    localStorage.setItem('title', JSON.stringify(tasks))
  }, [tasks])

  return (
    <div className="app">
      <Header date={date} />
      <Content items={tasks} />
      <AddTask onAddTask={addTaskHandler} />
    </div>
  )
}
export default App;


