import React, { useContext, useState, useEffect } from "react"
import useLocalStorage from '../hooks/useLocalStorgae'
import { v4 as uuidv4 } from 'uuid'

const TasksContext = React.createContext()

export const useTasks = () => {
    return useContext(TasksContext)
}

const TasksProvider = ({ children }) => {

    const [tasks, setTasks] = useLocalStorage('tasks', [])

    //Define what a task looks like
    // task {
    //     taskId,
    //     taskTitle,
    //     taskpriority : [low, medium, high]
    //     createdAt,
    //     subtasks:[ {}]
    // }


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

    const addSubTask = ({ title, taskId }) => {
        
        const newSubTask = {
            subtaskId: uuidv4(),
            subtaskTitle: title,
            subtaskCompletionStatus: false
        }

        console.log(newSubTask);

        tasks.map((task, index) => {
            if (task.taskId === taskId) {
                console.log("Adding for", task.taskTitle, index);
                // setTasks(prevTasks => console.log(prevTasks[index]))
                // console.log(tasks[index]);
                task.subtasks.push(newSubTask)
                const newTasks = [...tasks]
                newTasks[index] = task
                setTasks(newTasks)
            }
        })

        // console.log(task);
    }



    const updateSubtask = (taskId, subTaskId) => {
        tasks.map(task => {
            if (task.taskId === taskId) {
                const taskToBeUpdated = task
                console.log("TASK TO BE UPDATED",task.taskTitle)
                taskToBeUpdated.subtasks.map((subtask,index) => {
                    if (subtask.subtaskId === subTaskId) {
                        const subTaskToBeUpdated = subtask
                        subTaskToBeUpdated.subtaskCompletionStatus = true                    }
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
            if(task.taskId === taskId){
                const taskToBeUpdated = task
                console.log('task to update',taskToBeUpdated.taskTitle)
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
            addTask,
            addSubTask,
            updateSubtask,
            deleteTask,
            deleteSubtask
        }}>
            {children}
        </TasksContext.Provider>
    )

}

export default TasksProvider


