import React from 'react'
import cancle from '../../icons/cross.png'
import add from '../../icons/add.png'

const TaskForm = (props) => {
    return (
        <form className='task-form'>
            <div><input type="text" /></div>
            <div className='taskform-action'>

                <button><img src={cancle} /></button>
                <button><img src={add} /></button>
            </div>
        </form>
    )
}

export default TaskForm