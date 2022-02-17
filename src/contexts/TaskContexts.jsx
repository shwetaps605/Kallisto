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

        console.log("Mewly created task:", newTask)
        setTasks(prevTasks => {
            return [...prevTasks, newTask]
        })
    }

    const addSubTask = ({ title, taskId }) => {
        console.log("adding for", taskId);
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

    const updateSubtask = ({taskId,subTaskId}) => {
        tasks.map(task => {
            if(task.taskId === taskId){
                const taskToBeUpdated = task
                taskToBeUpdated.subtasks.map(subtask => {
                    if(subtask.subTaskId === subTaskId){
                        const subTaskToBeUpdated = subtask
                        subTaskToBeUpdated.subtaskCompletionStatus = true
                    }
                })
            }
        })
        const updatedTasks = [...tasks]
        console.log(updatedTasks)

    }

    const deleteTask = (taskId) => {
        setTasks(prevTasks => {
            return prevTasks.filter(task => task.taskId !== taskId)
        })
    }

    const deleteSubTask = (taskId, subtaskId) => {
        setTasks(prevTasks => {
            return prevTasks.map(task => {
                if (task.taskId === taskId) {
                    task.subtasks.filter(subtask => subtask.subtaskId !== subtaskId)
                }
            })
        })
    }





    return (
        <TasksContext.Provider value={{
            tasks,
            addTask,
            addSubTask,
            updateSubtask,
            deleteTask,
            deleteSubTask
        }}>
            {children}
        </TasksContext.Provider>
    )

}

export default TasksProvider


