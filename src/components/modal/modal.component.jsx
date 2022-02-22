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
                    <button onClick={props.onClose}>
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                            <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z" />
                        </svg>
                    </button>
                </div>
                <div className="form__group">
                    <input type="text" placeholder="Add subtask" ref={subtaskTitleRef} name="subtaskTitle" />
                    <button>
                        <svg onClick={handleAddingSubTask} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                            <path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" />
                        </svg>
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Modal