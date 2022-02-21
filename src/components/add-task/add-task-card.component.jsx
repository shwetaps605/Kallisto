import React, { useState, useEffect, useRef } from 'react'
import './add-task-card.styles.scss'
import { useTasks } from '../../contexts/TaskContexts'
import moment from 'moment'


const AddTaskCard = (props) => {

    const titleRef = useRef()
    const priorityRef = useRef()
    const [date, setDate] = useState("")
    const [showAddFields, setShowAddFields] = useState(false)
    const { addTask } = useTasks()

    const handleSubmit = (e) => {
        e.preventDefault()
        setShowAddFields(false)
        setDate(moment().format('LL'))
        addTask({
            title: titleRef.current.value,
            priority: priorityRef.current.value,
            date: date
        })
        titleRef.current.value = ""
        priorityRef.current.value = "Low"

    }

    return (
        <>
            <div className="add__task__card__container">

                <div className="add__task__card__header">
                    <h3>Add Task</h3>
                    <button className='svg-button' onClick={() => setShowAddFields(!showAddFields)}>
                        {
                            showAddFields ?
                                <svg width="40" height="27" viewBox="0 0 40 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M38.7417 26.6667L20 2.71008L1.30167 26.6667L0 25.6351L20 8.39233e-05L40 25.6517L38.7417 26.6667Z" fill="white" />
                                </svg>

                                :
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M38.7417 6.66675L20 30.6234L1.30167 6.66675L0 7.69841L20 33.3334L40 7.68175L38.7417 6.66675Z" fill="white" />
                                </svg>


                        }
                    </button>
                </div>

                {
                    showAddFields &&
                    <div className="add__task__card__body">
                        <form onSubmit={handleSubmit}>
                            <div className='form-fields'>
                                <div className="form-group">
                                    <label>Task Title</label>
                                    <input type="text" ref={titleRef} name="taskTitle" />
                                </div>
                                <div className="form-group">
                                    <label> Task priority</label>
                                    <select ref={priorityRef}>
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                    </select>
                                </div>
                            </div>

                            <input type="submit" name="Add" id="add-task-button" value="Add" />
                        </form>
                    </div>
                }



            </div>
        </>

    )
}

export default AddTaskCard