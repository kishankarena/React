import React, { useState } from 'react'

const AppList = (props) => {
    const [disableTxt, setDisableTxt] = useState(false)
    const chekedHandler = (e) => {
        if (!disableTxt) {
            setDisableTxt(e.target.checked)
        }
        else {
            setDisableTxt(false)
        }
    }
    return (
        <li className='app-content__data'>
            <div>
                {disableTxt && <lable className="lable-text">{props.title}</lable>}
                {!disableTxt && <lable>{props.title}</lable>}

            </div>
            <div>
                <input
                    type="radio"
                    defaultChecked={disableTxt}

                    onChange={chekedHandler} />
            </div>
        </li>
    )
}

export default AppList