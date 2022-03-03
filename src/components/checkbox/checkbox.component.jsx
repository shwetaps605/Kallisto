import React from 'react'

const Checkbox = (props) => {
    return (
        <div className="checkbox">
            {
                props.checked ?
                    <strike><p>Task</p></strike> :
                    <input type="checkbox" {...props} />
            }

        </div>

    )
}

export default Checkbox