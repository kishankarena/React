import React, { useState } from 'react';
import AppHeader from './components/AppHeader';
import './App.css'
import AppContent from './components/AppContent';
import AddTask from './components/addtask/AddTask';

const DEFAULT_TASK = [
  {
    id: 'e1',
    title: 'Buy new sweatshirt'
  },
  {
    id: 'e2',
    title: 'Begin promotional'
  },
  {
    id: 'e3',
    title: 'Read an article'
  },
  {
    id: 'e4',
    title: 'Try not to fall asleep'
  },
  {
    id: 'e5',
    title: 'Watch \'Sherlock\''
  },
  {
    id: 'e6',
    title: 'Begin QA for the product'
  },
  {
    id: 'e7',
    title: 'Go for a walk'
  },
];
const App = () => {
  const [tasks, setTasks] = useState(DEFAULT_TASK);
  const addTaskHandler = (taskData) => {
    setTasks((prevTaskData) => {
      return [...prevTaskData, taskData];
    })
  };
  return (
    <div className="app">
      <AppHeader />
      <AppContent items={tasks} />
      <AddTask onAddTask={addTaskHandler} />

    </div>
  )
}
export default App;


