import React from "react"
import './task-item.styles.scss'

const TaskItem = ({ task }) => (
    <div className="task__item">
        <h3>{task.taskTitle}</h3>
        <div className="title-line"></div>

        {task.subtasks.length == 0 && <p>No subtasks</p>}
        {
            task.subtasks.length > 0 && task.subtasks.map(subtask => (
                <>
                <p>{subtask.subtaskTitle}</p>
                <div className="blue-line"></div>
                </>

            ))
        }
        <p>{task.createdAt}</p>
    </div>
)

export default TaskItem