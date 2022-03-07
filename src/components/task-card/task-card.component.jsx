import React, { useState } from 'react'
import { useEffect } from 'react'
import { useTasks } from '../../contexts/TaskContexts'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './task-card.styles.scss'

const TaskProgressCard = (props) => {

    ChartJS.register(ArcElement, Tooltip, Legend);

    const { tasks } = useTasks()
    
    const [numberOfCompletedTasks, setNumberOfCompletedTasks] = useState(0)
    const [totalNumberOfTasks, setTotalNumberOfTasks] = useState(0)
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
              'green',
              'yellow',
              'red'
            ],
            borderColor: [
              'thistle',
              'thistle',
              'thistle',
            ],
            borderWidth: 10,
          },
        ],
      };


    useEffect(() => {
        getTotalNumberOfTasks()
    }, [tasks])


    const getTotalNumberOfTasks = () => {
        setTotalNumberOfTasks(tasks.length)
        setNumberOfLowPriorityTasks(tasks.filter(task => { return task.taskPriority === 'Low'}).length)
        setNumberOfMediumPriorityTasks(tasks.filter(task => { return task.taskPriority === 'Medium'}).length)
        setNumberOfHighPriorityTasks(tasks.filter(task => { return task.taskPriority === 'High'}).length)
    }

    return (
        <div className="task__progress__card">
            <div className="info__group">
                <p> {numberOfCompletedTasks} tasks Completed</p>
                <p>{totalNumberOfTasks} tasks added</p>
            </div>
            <Pie data={data}/>

        </div>
    )
}

export default TaskProgressCard