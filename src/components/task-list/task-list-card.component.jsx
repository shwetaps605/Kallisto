import React, { useState, useEffect } from 'react'
import './task-list-card.styles.scss'
import AddTaskCard from '../add-task/add-task-card.component'
import TaskItem from '../task-item/task-item.component'
import { useTasks } from '../../contexts/TaskContexts'


const TaskListCard = (props) => {

    const [taskId, setTaskId] = useState("")


    const { tasks, deleteTask } = useTasks()

    return (
        <div className='task__list'>
            <AddTaskCard></AddTaskCard>
            <div className="task__list__container">
                
                {
                    tasks.map(task => (
                        <div key={task.taskId}>
                            <TaskItem task={task}></TaskItem>
                            <button onClick={() => deleteTask(task.taskId)}>Delete</button>
                            <button onClick={()=> props.onAddSubTask(task.taskId)}>Add Subtask</button>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default TaskListCard