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
                        <div key={task.taskId} className='task'>
                            <TaskItem task={task}></TaskItem>
                            <div className="task__buttons">
                                <button onClick={() => deleteTask(task.taskId)}>Delete</button>
                                <button onClick={() => props.onAddSubTask(task.taskId)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
                                    </svg>
                                </button>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default TaskListCard