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
                                <button onClick={() => deleteTask(task.taskId)}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_73_2)">
                                            <path d="M23.954 21.03L14.77 11.935L23.862 2.76098L21.03 -0.0460205L11.94 9.13298L2.76398 0.0449795L-0.0460205 2.85498L9.13998 11.96L0.0449795 21.144L2.85498 23.954L11.967 14.762L21.147 23.862L23.954 21.03Z" fill="#F16F6F" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_73_2">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </button>
                                <button onClick={() => props.onAddSubTask(task.taskId)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
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