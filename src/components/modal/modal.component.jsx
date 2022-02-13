import React, { useState, useEffect } from "react"
import './modal.styles.scss'
import { useTasks } from "../../contexts/TaskContexts"

const Modal = (props) => {

    const { tasks } = useTasks()

    const taskState = {}

    const [taskForSubtask, setTaskForSubtask] = useState(taskState)

    useEffect(() => {
        tasks.map(task => {
            if (task.taskId === props.taskId)
                setTaskForSubtask(task)
        })
    }, [props.taskId])




    if (!props.showModal) return null

    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <div className="modal__header">
                    <h2>{taskForSubtask.taskTitle}</h2>
                </div>
                <div className="modal__body">
                    {
                        taskForSubtask.subtasks.length > 0 ?
                            taskForSubtask.subtasks.map(subtask => (
                                <p>subtask.subtaskTitle</p>
                            )) :
                            <p>No subtasks!</p>
                    }
                </div>
                <div className="modal__footer">
                    <button>Add Subtask</button>
                    <button onClick={props.onClose}>Close</button>
                </div>
            </div>

        </div>
    )
}

export default Modal