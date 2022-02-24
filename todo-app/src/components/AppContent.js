import React, { useState } from 'react'
import AppList from './AppList'




const AppContent = (props) => {

    return (
        <ul className='app-content'>

            {props.items.map((task) => {
                return (
                    <AppList
                        key={task.id}
                        title={task.title} />
                )

            })}
        </ul>
    )
}

export default AppContent