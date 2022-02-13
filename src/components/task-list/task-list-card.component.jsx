import React, { useState, useEffect } from 'react'
import './task-list-card.styles.scss'
import AddTaskCard from '../add-task/add-task-card.component'
import { useTasks } from '../../contexts/TaskContexts'


const TaskListCard = (props) => {

    const { tasks, deleteTask } = useTasks()


    const handleAddSubTask = (taskId) => {
        console.log(taskId);
    }


    return (
        <>
            <AddTaskCard></AddTaskCard>
            <div className="task__list__container">
                <h1>Your tasks for today are:</h1>
                {
                    tasks.map(task => (
                        <div className='task__item' key={task.taskId}>
                            <h3>{task.taskTitle}</h3>
                            <button onClick={() => deleteTask(task.taskId)}>Delete</button>
                            <button onClick={()=> props.onAddSubTask(task.taskId)}>Add Subtask</button>
                        </div>
                    ))
                }
            </div>
        </>

    )
}

export default TaskListCard