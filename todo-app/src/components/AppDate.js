import React from 'react'

const AppDate = () => {
    const date = new Date(2016, 0, 12, 1);
    const day = date.toLocaleDateString('en-US', { day: '2-digit' });
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const year = date.getFullYear();
    return (

        <div>
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>

        </div>
    )
}

export default AppDate