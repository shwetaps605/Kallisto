import React, {useState} from 'react'
import { useTasks } from '../../contexts/TaskContexts'

const TaskProgressCard = (props) => {

    const {tasks} = useTasks()
    const [numberOfCompletedTasks, setNumberOfCompletedTasks] = useState(0)
    const [totalNumberOfTasks,setTotalNumberOfTasks] = useState(0)



    return(
        <div className="task__progress__card">
            <div className="info__group">
                <p> {numberOfCompletedTasks} tasks Completed</p>
            </div>
        </div>
    )
}

export default TaskProgressCard