import React, { useContext, useState, useEffect } from "react"
import useLocalStorage from '../hooks/useLocalStorgae'
import { v4 as uuidv4 } from 'uuid'

const TasksContext = React.createContext()

export const useTasks = () => {
    return useContext(TasksContext)
}

const TasksProvider = ({ children }) => {

    const [tasks, setTasks] = useLocalStorage('tasks', [])
    const [taskId, setTaskId] = useState("")
    const [modalState, setModalState] = useState(false)

    const saveTaskId = async (id) => {
        setTaskId(id)
    }

    const showModal = () => {
        setModalState(true)
    }

    const hideModal = () => {
        setModalState(false)
    }

  

    const addTask = ({ title, priority, date }) => {
        const newTask = {
            taskId: uuidv4(),
            taskTitle: title,
            taskPriority: priority,
            createdAt: date,
            subtasks: []
        }

        setTasks(prevTasks => {
            return [...prevTasks, newTask]
        })
    }

    const addSubtask = (title) => {

        const newSubTask = {
            subtaskId: uuidv4(),
            subtaskTitle: title,
            subtaskCompletionStatus: false
        }

        tasks.map((task, index) => {
            if (task.taskId === taskId) {
                task.subtasks.push(newSubTask)
                const newTasks = [...tasks]
                newTasks[index] = task
                setTasks(newTasks)
            }
        })
    }



    const updateSubtask = (taskId, subTaskId) => {
        tasks.map(task => {
            if (task.taskId === taskId) {
                const taskToBeUpdated = task
                taskToBeUpdated.subtasks.map((subtask, index) => {
                    if (subtask.subtaskId === subTaskId) {
                        const subTaskToBeUpdated = subtask
                        subTaskToBeUpdated.subtaskCompletionStatus = true
                    }
                })
            }
        })
        const updatedTasks = [...tasks]
        setTasks(updatedTasks)
    }

    const deleteTask = (taskId) => {
        setTasks(prevTasks => {
            return prevTasks.filter(task => task.taskId !== taskId)
        })
    }

    const deleteSubtask = (taskId, subtaskId) => {
        tasks.map(task => {
            if (task.taskId === taskId) {
                const taskToBeUpdated = task
                const subtasks = taskToBeUpdated.subtasks.filter(subtask => subtask.subtaskId !== subtaskId)
                taskToBeUpdated.subtasks = subtasks
            }
        })
        const updatedTasks = [...tasks]
        setTasks(updatedTasks)
    }

    return (
        <TasksContext.Provider value={{
            tasks,
            taskId,
            modalState,
            showModal,
            hideModal,
            addTask,
            addSubtask,
            updateSubtask,
            deleteTask,
            deleteSubtask,
            saveTaskId
        }}>
            {children}
        </TasksContext.Provider>
    )

}

export default TasksProvider


