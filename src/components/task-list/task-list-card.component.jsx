import React, { useState, useEffect } from 'react'
import './task-list-card.styles.scss'
import AddTaskCard from '../add-task/add-task-card.component'

const TaskListCard = (props) => {
    return (
        <>
            <AddTaskCard></AddTaskCard>
            <div className="task__list__container">
                <h1>Your tasks for today are:</h1>
            </div>
        </>

    )
}

export default TaskListCard