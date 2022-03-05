import React from 'react'

const Checkbox = (props) => {
    return (
        <div className="checkbox">
            <input type="checkbox" {...props} />
        </div>

    )
}

export default Checkbox