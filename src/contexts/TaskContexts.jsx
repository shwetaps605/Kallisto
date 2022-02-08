import React, { useContext, useState, useEffect } from "react"
import useLocalStorage from '../hooks/useLocalStorgae'
import { v4 as uuidv4 } from 'uuid'

const TasksContext = React.createContext()

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

  

    const addTask = ({title,priority,date}) => {
        const newTask = {
            taskId:uuidv4(),
            taskTitle:title,
            taskPriority:priority,
            createdAt:date,
            subtasks:[]
        }
        
        console.log("Mewly created task:",newTask)
        setTasks(prevTasks => {
            return [...prevTasks, newTask]
        })
    }

    const addSubTask = ({title,taskId,status}) => {
        const newSubTask = {
            subtaskId: uuidv4(),
            subtaskTitle:title,
            subtaskStatus:status
        }
        
        tasks.map(task => {
            if(task.taskId === taskId)
            {
                task.subTasks.push(newSubTask)
            }
        })
    }

    return (
        <TasksContext.Provider value={{
            tasks
        }}>
            {children}
        </TasksContext.Provider>
    )

}

export default TasksProvider


