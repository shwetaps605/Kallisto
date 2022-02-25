import React from "react"
import './task-item.styles.scss'
import { useTasks } from "../../contexts/TaskContexts"

const TaskItem = ({ task }) => {

    const { updateSubtask, deleteSubtask, deleteTask } = useTasks()

    const handleSubtaskCompleteAction = (taskId, subtaskId) => {
        updateSubtask(taskId, subtaskId)
    }

    const handleRemoveTask = (taskId) => {
        const subtasks = task.subtasks;
        console.log(subtasks);
        
        

    }

    const handleSubTaskDelete = (taskId, subtaskId, status) => {
        console.log("Subtask deletion started")
        if (!status) {
            alert('This subtask is incomplete')
            return
        }
        deleteSubtask(taskId, subtaskId)
    }


    return (
        <div className="task__item">

            <div className="task__item__header__box" onDoubleClick={() => handleRemoveTask(task.taskId)}>
                <p id='date'>{task.createdAt}</p>
                <div className="task__item__title">
                    <h3>{task.taskTitle}</h3>

                    <button>
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" /></svg>
                    </button>
                </div>

            </div>

            <div className="red-line"></div>


            {task.subtasks.length == 0 &&
                <div className="task__item__body__box default">
                    <p>No subtasks</p>
                </div>
            }

            {
                task.subtasks.length > 0 && task.subtasks.map(subtask => (
                    <div className="task__item__body__box" onDoubleClick={() => handleSubTaskDelete(task.taskId, subtask.subtaskId, subtask.subtaskCompletionStatus)}>
                        {
                            subtask.subtaskCompletionStatus ?
                                <strike><p className="subtitle__text striked">{subtask.subtaskTitle}</p></strike> :
                                <p className="subtitle__text">{subtask.subtaskTitle}</p>
                        }
                        {
                            !subtask.subtaskCompletionStatus &&
                            <svg onClick={() => { handleSubtaskCompleteAction(task.taskId, subtask.subtaskId) }} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                <path d="M24 4.685l-16.327 17.315-7.673-9.054.761-.648 6.95 8.203 15.561-16.501.728.685z" />
                            </svg>
                        }
                    </div>
                ))

            }
            {/* <div className="task__item add__subtask" contentEditable="true">
                <p>Add Subtask</p>
            </div> */}
        </div>
    )
}

export default TaskItem