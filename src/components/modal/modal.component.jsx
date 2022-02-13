import React, { useState, useEffect, useRef } from "react"
import './modal.styles.scss'
import { useTasks } from "../../contexts/TaskContexts"

const Modal = (props) => {

    const { tasks } = useTasks()
    const subtaskTitleRef = useRef()
    const { addSubTask } = useTasks()




    const taskState = {}

    const [taskForSubtask, setTaskForSubtask] = useState(taskState)

    useEffect(() => {
        tasks.map(task => {
            if (task.taskId === props.taskId)
                setTaskForSubtask(task)
        })
    }, [props.taskId])

    const handleAddingSubTask = () => {
       
    
        addSubTask({ 
            title: subtaskTitleRef.current.value,
            taskId: taskForSubtask.taskId
        })

        props.onClose()
    }




    if (!props.showModal) return null

    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <div className="modal__header">
                    <h2>{taskForSubtask.taskTitle}</h2>
                </div>
                <div className="modal__body">
                    <input type="text" placeholder="Add subtask" ref={subtaskTitleRef} name="subtaskTitle" />
                </div>
                <div className="modal__footer">
                    <button onClick={handleAddingSubTask}>Add Subtask</button>
                    <button onClick={props.onClose}>Close</button>
                </div>
            </div>

        </div>
    )
}

export default Modal