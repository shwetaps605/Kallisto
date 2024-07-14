import React from 'react'
import './checkbox.styles.scss'

const Checkbox = (props) => {
    return (
        <div className="checkbox">
            <input type="checkbox" {...props} />
        </div>

    )
}

export default Checkbox