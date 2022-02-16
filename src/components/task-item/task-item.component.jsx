import React from "react"
import './task-item.styles.scss'

const TaskItem = ({ task }) => {

    //TODO: Add this function in TasksContext
    const handleSubtaskCompleteAction = () => {

    }


    return (
        <div className="task__item">

            <div className="task__item__header__box">
                <p id='date'>{task.createdAt}</p>
                <h3>{task.taskTitle}</h3>
                <div className="red-line"></div>
            </div>


            {task.subtasks.length == 0 &&
                <div className="task__item__body__box">
                    <p>No subtasks</p>
                </div>
            }
            {
                task.subtasks.length > 0 && task.subtasks.map(subtask => (
                    <div className="task__item__body__box">
                        <p>{subtask.subtaskTitle}</p>
                        <svg className="svg" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                            <path d="M24 4.685l-16.327 17.315-7.673-9.054.761-.648 6.95 8.203 15.561-16.501.728.685z" />
                        </svg>
                        {/* <div className="blue-line"></div> */}
                    </div>

                ))
            }

        </div>
    )
}

export default TaskItem