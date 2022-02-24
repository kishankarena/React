import React, { useState } from 'react'
import TaskForm from './TaskForm';

const AddTask = (props) => {
    const [isEditting, setIsEditting] = useState(false);

    const addHandler = () => {

        setIsEditting(true)
    }
    return (
        <div>
            {!isEditting && <button type="button" onClick={addHandler} className="add-button">+</button>}
            {isEditting && <TaskForm />}
        </div>
    )
}

export default AddTask