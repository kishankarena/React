import React, { useState, useEffect } from 'react'

const List = (props) => {
    const [disableTxt, setDisableTxt] = useState("");
    if (disableTxt) {
        localStorage.setItem(props.storageKey, disableTxt);
    }
    let storageCheck = localStorage.getItem(props.storageKey);

    const chekedHandler = (e) => {
        setDisableTxt("checked");
    }

    return (
        <li className='app-content__data'>
            <div>
                {storageCheck && <h5 className='text-muted'>{props.title}</h5>}
                {!storageCheck && <h5 className='title-text'>{props.title}</h5>}
            </div>
            <div>
                <input
                    type="radio"
                    defaultChecked={storageCheck}
                    className='app-content_radio'
                    onChange={chekedHandler} />
            </div>
        </li>
    )
}
export default List