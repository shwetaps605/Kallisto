import React, { useState, useEffect, useRef } from 'react'
import './add-task-card.styles.scss'
import { useTasks } from '../../contexts/TaskContexts'
import Moment from 'react-moment';


const AddTaskCard = (props) => {

    const [title, setTitle] = useState("")
    const [priority, setPriority] = useState("")
    const [date, setDate] = useState("")

    const { addTask } = useTasks()

    return (
        <div className="add__task__card__container">
            <h3>Add Task</h3>
            <form>
                <div className="form-group">
                    <label>Task Title</label>
                    <input type="text" value={title} name="taskTitle" />
                </div>
                <div className="form-group">
                    <label> Task priority</label>
                    <select>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default AddTaskCard