import React from 'react'

const AppWeekday = (props) => {
    const weekdays = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATERDAY"];
    let day = weekdays[props.date.getDay()];
    return (

        <div>
            {day}
        </div>
    )
}

export default AppWeekday