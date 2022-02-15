import React, { useState, useEffect, useRef } from 'react'
import './add-task-card.styles.scss'
import { useTasks } from '../../contexts/TaskContexts'
import moment from 'moment'


const AddTaskCard = (props) => {

    const titleRef = useRef()
    const priorityRef = useRef()
    const [date, setDate] = useState("")
    const [showAddFields, setShowAddFields] = useState(true)

    const subtaskTitle = useRef()
    const subtaskStatus = useRef()

    const { addTask } = useTasks()

    const handleSubmit = (e) => {
        e.preventDefault()
        setDate(moment().format('LL'))
        addTask({
            title: titleRef.current.value,
            priority: priorityRef.current.value,
            date: date
        })
        titleRef.current.value = ""
        priorityRef.current.value = "Low"

    }

    return (
        <>
            <div className="add__task__card__container">

                <div className="add__task__card__header">
                    <h3>Add Task</h3>
                    <button className='svg-button' onClick={() => setShowAddFields(!showAddFields)}>
                        {
                            showAddFields ?
                                <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                    <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 15l-5.247-6.44-5.263 6.44-.737-.678 6-7.322 6 7.335-.753.665z" />
                                </svg> :
                                <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                    <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 8l-5.247 6.44-5.263-6.44-.737.678 6 7.322 6-7.335-.753-.665z" />
                                </svg>
                        }
                    </button>
                </div>

                {
                    showAddFields &&
                    <div className="add__task__card__body">
                        <form onSubmit={handleSubmit}>
                            <div className='form-fields'>
                                <div className="form-group">
                                    <label>Task Title</label>
                                    <input type="text" ref={titleRef} name="taskTitle" />
                                </div>
                                <div className="form-group">
                                    <label> Task priority</label>
                                    <select ref={priorityRef}>
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                    </select>
                                </div>
                            </div>

                            <input type="submit" name="Add" id="add-task-button" value="Add" />
                        </form>
                    </div>
                }



            </div>
        </>

    )
}

export default AddTaskCard