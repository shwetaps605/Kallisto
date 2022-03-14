import React from 'react'
import './pomodoro-card.styles.scss'

const PomodoroCard = (props) => {

    return (
        <div className="pomodoro__card__container">
            <div className="pomodoro__card__header">
                <h3>Start Pomodoro</h3>
                <button className='svg-button'>
                    <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                        <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 11h6v1h-7v-9h1v8z" />
                    </svg>
                </button>
            </div>

            <div className="pomodoro__card__body">

            </div>
        </div>
    )
}

export default PomodoroCard

