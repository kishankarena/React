import React from 'react'


const AppDate = (props) => {

    const day = props.date.toLocaleDateString('en-US', { day: '2-digit' });
    const month = props.date.toLocaleDateString('en-US', { month: 'short' });
    const year = props.date.getFullYear();
    return (

        <div className='app-date'>
            <div className='app-date__day'>{day}</div>
            <div> <div className='app-date__month'>{month}</div>
                <div className='app-date__year'>{year}</div></div>

        </div>
    )
}

export default AppDate