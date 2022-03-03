import React, { useState } from 'react'
import List from './List'

const Content = (props) => {
    return (
        <ul className='app-content'>
            {props.items.map((task) => {
                return (
                    <List
                        key={task.id}
                        storageKey={task.id}
                        title={task.title} />
                )
            })}
        </ul>
    )
}

export default Content