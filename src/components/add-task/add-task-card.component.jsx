import React, { useState, useEffect, useRef } from 'react'
import './add-task-card.styles.scss'
import { useTasks } from '../../contexts/TaskContexts'
import Moment from 'react-moment';


const AddTaskCard = (props) => {

    const title = useRef()
    const priority = useRef()
    const [date, setDate] = useState("")

    const { addTask } = useTasks()

    const handleSubmit = () => {
        console.log(title.current.value);
        console.log(priority.current.value);
    }

    return (
        <div className="add__task__card__container">
            <h3>Add Task</h3>
            <form>
                <div className="form-group">
                    <label>Task Title</label>
                    <input type="text" ref={title} name="taskTitle" />
                </div>
                <div className="form-group">
                    <label> Task priority</label>
                    <select ref={priority}>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                </div>
                <input type="submit" name="Add" id="add-task-button" value="Add" onClick={handleSubmit} />
            </form>
        </div>
    )
}

export default AddTaskCard