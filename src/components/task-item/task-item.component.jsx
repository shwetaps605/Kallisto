import React, { useState } from "react"
import './task-item.styles.scss'
import { useTasks } from "../../contexts/TaskContexts"
import Checkbox from "../checkbox/checkbox.component"

const TaskItem = ({ task, handleAddSubtask }) => {

    const { updateSubtask, deleteSubtask, deleteTask, updateTaskStatus } = useTasks()

    const handleSubtaskCompleteAction = (taskId, subtaskId) => {
        updateSubtask(taskId, subtaskId)
        const subtasks = task.subtasks;
        const incompleteSubtask = subtasks.filter((subtask) => { return subtask.subtaskCompletionStatus === false })
        if (incompleteSubtask.length === 0 ) {
            updateTaskStatus(taskId)
        }
        
    }

    const handleRemoveTask = (taskId) => {
        if(task.isComplete || task.subtasks.length === 0){
            deleteTask(taskId)
            return
        }
        alert('This task has incomplete tasks. Complete them first')
    }

    const handleSubTaskDelete = (taskId, subtaskId, status) => {
        if (!status) {
            alert('This subtask is incomplete')
            return
        }
        deleteSubtask(taskId, subtaskId)
    }





    return (
        <div className="task__item">
            <div className="task__item__header" onDoubleClick={() => handleRemoveTask(task.taskId)}>
                <p id='date'>{task.createdAt}</p>
                <div className="task__item__header__content">
                    <h3>{task.taskTitle}</h3>
                    <button>
                        <svg onClick={() => handleAddSubtask(task.taskId)} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" /></svg>
                    </button>
                </div>
            </div>

            <div className="task__item__content">
                {
                    task.subtasks.length > 0 && task.subtasks.map(subtask => (
                        <div className="subtask" onDoubleClick={() => handleSubTaskDelete(task.taskId, subtask.subtaskId, subtask.subtaskCompletionStatus)}>
                            {
                                subtask.subtaskCompletionStatus ?
                                    <strike><p className="subtitle__text striked">{subtask.subtaskTitle}</p></strike> :
                                    <p className="subtitle__text">{subtask.subtaskTitle}</p>
                            }
                            <Checkbox value={subtask.subtaskTitle} checked={subtask.subtaskCompletionStatus} onChange={() => handleSubtaskCompleteAction(task.taskId, subtask.subtaskId)}></Checkbox>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TaskItem