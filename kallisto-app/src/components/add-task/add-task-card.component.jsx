import React, { useState, useEffect, useRef } from 'react'
import './add-task-card.styles.scss'
import { useTasks } from '../../contexts/TaskContext'
import moment from 'moment'


const AddTaskCard = (props) => {

    const titleRef = useRef()
    const priorityRef = useRef()
    //const [date, setDate] = useState("")
    const [showAddFields, setShowAddFields] = useState(false)
    const { addTask } = useTasks()

    const handleSubmit = (e) => {
        e.preventDefault()
        setShowAddFields(false)
        console.log("date is", moment().format('LL'));
        //setDate(moment().format('LL'))
        addTask({
            title: titleRef.current.value,
            priority: priorityRef.current.value,
            date: moment().format('LL')
        })
        titleRef.current.value = ""
        priorityRef.current.value = "Low"
    }

    return (
        <>
            <div className="add__task__card__container">
                {
                    showAddFields ?
                        <div className="add__task__card__body">

                            <button onClick={() => setShowAddFields(false)}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.117 12L9.644 5.765L9 5L0 12.521L9 20L9.645 19.236L2.116 13H24V12H2.117Z" />
                                </svg>
                            </button>

                            <form className='form-fields' onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Title</label>
                                    <input type="text" ref={titleRef} name="taskTitle" />
                                </div>

                                <div className="form-group">
                                    <label>Priority</label>
                                    <select ref={priorityRef}>
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                    </select>
                                </div>

                                <input type="submit" name="Add" id="add-task-button" value="Add" />
                            </form>

                        </div> :

                        <div className="add__task__card__header" onClick={() => setShowAddFields(!showAddFields)}>
                            <h3>Add Task</h3>
                            <button className='svg-button' >
                                <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M36.4717 20.0001L23.9267 30.3917L25 31.6667L40 19.1317L25 6.66675L23.925 7.94008L36.4733 18.3334H0V20.0001H36.4717Z" />
                                </svg>
                            </button>
                        </div>
                }
            </div>
        </>
    )
}

export default AddTaskCard