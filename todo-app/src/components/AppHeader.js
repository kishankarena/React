import React from 'react'
import AppDate from './AppDate'
import AppWeekday from './AppWeekday.js';


const AppHeader = () => {
    const date = new Date(2016, 0, 12, 2);
    return (
        <div className="app-header">

            <div className="app-header__date"> <AppDate date={date} /> </div>
            <div className="app-header__day"><AppWeekday date={date} /></div>

        </div>


    );
}

export default AppHeader