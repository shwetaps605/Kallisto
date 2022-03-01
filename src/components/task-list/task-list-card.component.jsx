import React, { useState, useEffect } from 'react'
import './task-list-card.styles.scss'
import TaskItem from '../task-item/task-item.component'
import { useTasks } from '../../contexts/TaskContexts'


const TaskListCard = (props) => {

    const { tasks,saveTaskId, showModal } = useTasks()
    
    const handleAddSubtask = (taskId) => {
        saveTaskId(taskId)
        showModal()
    }

    return (
        <div className="task__list__container">
            {
                tasks.map(task => (
                    <TaskItem key={task.taskId} task={task} handleAddSubtask={handleAddSubtask}></TaskItem>
                ))
            }
        </div>
    )
}

export default TaskListCard