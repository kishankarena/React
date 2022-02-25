import React, { useState } from 'react'

const TaskForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    };
    const submitHandler = (event) => {
        event.preventDefault();
        if (enteredTitle === '') {
            alert("Please enter task befor submit!!");
            props.onCancle();

        }
        else {
            const addedData = {
                title: enteredTitle
            };
            props.onAddData(addedData);
            setEnteredTitle('')
        }
    }
    return (
        <form className='task-form' onSubmit={submitHandler}>
            <div><input type="text" value={enteredTitle} onChange={titleChangeHandler} /></div>
            <div>  <button className='task-form__cancle' type='button' onClick={props.onCancle}>Cancle</button> </div>
            <div> <button className='task-form__submit' type='submit'>Submit</button> </div>

        </form>
    )
}

export default TaskForm