import React from 'react'
import DateShow from './ DateShow'
import Weekday from './Weekday';

const Header = (props) => {
    return (
        <div className="app-header">
            <div className="app-header__date"> <DateShow date={props.date} /> </div>
            <div className="app-header__day"><Weekday date={props.date} /></div>
        </div>
    );
}

export default Header