import React, { useState, useEffect, useRef } from 'react'
import './add-task-card.styles.scss'
import { useTasks } from '../../contexts/TaskContexts'
import moment from 'moment'


const AddTaskCard = (props) => {

    const titleRef = useRef()
    const priorityRef = useRef()
    const [date, setDate] = useState("")

    const { addTask } = useTasks()

    const handleSubmit = (e) => {
        e.preventDefault()
        setDate(moment().format('LL'))
        addTask({
            title:titleRef.current.value,
            priority:priorityRef.current.value,
            date:date
        })
    }

    return (
        <div className="add__task__card__container">
            <h3>Add Task</h3>
            <form onSubmit={handleSubmit}> 
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
                <input type="submit" name="Add" id="add-task-button" value="Add"/>
            </form>
        </div>
    )
}

export default AddTaskCard