import React from "react"
import './task-item.styles.scss'

const TaskItem = ({ task }) => (
    <div className="task__item">
        <h3>{task.taskTitle}</h3>
        <p>{task.createdAt}</p>
        {
            task.subtasks.length == 0 ?
                <p>No subtasks</p> :
                <p>{task.subtasks.lenth} subtasks</p>
        }
    </div>
)

export default TaskItem