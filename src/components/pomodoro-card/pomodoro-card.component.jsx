import React, { useState } from 'react'
import './pomodoro-card.styles.scss'

const PomodoroCard = (props) => {

    const [pomodoroDuration, setPomodorDuration] = useState(0)
    const [breakDuration, setBreakDuration] = useState(0)
    const [toggleShowFields, setToggleShowFields] = useState(true)

    return (
        <div className="pomodoro__card__container">
            {
                !toggleShowFields ?
                    <div className="pomodoro__card__header" onClick={() => setToggleShowFields(true)}>
                        <h3>Start Pomodoro</h3>
                        <button className='svg-button'>
                            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 11h6v1h-7v-9h1v8z" />
                            </svg>
                        </button>
                    </div> :

                    <div className="pomodoro__card__body">
                        <button onClick={() => setToggleShowFields(false)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.117 12L9.644 5.765L9 5L0 12.521L9 20L9.645 19.236L2.116 13H24V12H2.117Z" />
                            </svg>
                        </button>

                        <form className='pomodoro__form'>
                            <div className="form-group">
                                <label>Pomodoro duration</label>
                                <input type="number" value={10} step={10} name='pomodoro-time' />
                            </div>
                            <p>:</p>
                            <div className="form-group">
                                <label>Break duration</label>
                                <input type="number" value={10} step={10} name='pomodoro-time' />
                            </div>
                        </form>
                    </div>
            }
        </div>
    )
}

export default PomodoroCard

