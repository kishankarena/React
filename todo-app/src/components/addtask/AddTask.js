import React, { useState } from 'react'
import TaskForm from './TaskForm';

const AddTask = (props) => {
  const [isEditting, setIsEditting] = useState(false);
  const addDataHandler = (addedData) => {
    const taskData = {
      ...addedData,
      id: Date.now()
    };
    props.onAddTask(taskData);
    setIsEditting(false)
  }
  const startEditting = () => {
    setIsEditting(true)
  }
  const stopEditting = () => {
    setIsEditting(false)
  }

  return (
    <div>
      {!isEditting &&
        <button type="button" onClick={startEditting} className="add-button">+</button>}
      {isEditting && <TaskForm onCancle={stopEditting} onAddData={addDataHandler} />}
    </div>
  )
}
export default AddTask