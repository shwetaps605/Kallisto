import React, { useState } from 'react'
import { useEffect } from 'react'
import { useTasks } from '../../contexts/TaskContexts'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './task-card.styles.scss'

const TaskProgressCard = (props) => {

    ChartJS.register(ArcElement, Tooltip, Legend);

    const { tasks } = useTasks()

    const [numberOfCompletedTasks, setNumberOfCompletedTasks] = useState(0)
    const [totalNumberOfTasks, setTotalNumberOfTasks] = useState(0)
    const [totalNumberOfSubtasks, setTotalNumberOfSubtasks] = useState(0)
    const [numberOfLowPriorityTasks, setNumberOfLowPriorityTasks] = useState(0)
    const [numberOfMediumPriorityTasks, setNumberOfMediumPriorityTasks] = useState(0)
    const [numberOfHighPriorityTasks, setNumberOfHighPriorityTasks] = useState(0)


    const data = {
        labels: ['Low', 'Medium', 'High'],
        datasets: [
            {
                label: '# of tasks',
                data: [numberOfLowPriorityTasks, numberOfMediumPriorityTasks, numberOfHighPriorityTasks],
                backgroundColor: [
                    'rgb(255, 153, 153)',
                    'rgb(240, 92, 141)',
                    'rgb(172, 57, 115)'
                ]
            },
        ],
    };


    useEffect(() => {
        getTotalNumberOfTasks()
    }, [tasks])


    const getTotalNumberOfTasks = () => {
        setTotalNumberOfTasks(tasks.length)
        // const initialValue = {
        //     subtasks:[]
        // }
        // const numberOfSubtasks = tasks.reduce((prevTask,currentTask) => prevTask.subtasks.length + currentTask.subtasks.length, initialValue)
        // console.log(numberOfSubtasks);
        setNumberOfLowPriorityTasks(tasks.filter(task => { return task.taskPriority === 'Low' }).length)
        setNumberOfMediumPriorityTasks(tasks.filter(task => { return task.taskPriority === 'Medium' }).length)
        setNumberOfHighPriorityTasks(tasks.filter(task => { return task.taskPriority === 'High' }).length)
    }

    return (
        <div className="task__progress__card">
            <div className="header">
                <h1>Progress Tracker</h1>
            </div>
            <div className="content">
                <div className="info__group">
                    <h2>{totalNumberOfTasks} tasks added</h2>
                </div>
                <div className="info__chart">
                    <Doughnut className='info__chart__img' data={data} />
                </div>
            </div>
        </div>
    )
}

export default TaskProgressCard