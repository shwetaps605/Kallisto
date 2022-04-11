import React, { useEffect, useState } from 'react'
import './pomodoro-card.styles.scss'

const PomodoroCard = (props) => {

    let [pomodoroDuration, setPomodorDuration] = useState(0)
    const [shortBreakDuration, setShortBreakDuration] = useState(0)
    const [longBreakDuration, setLongBreakDuration] = useState(0)
    const [rounds, setRounds] = useState(0)
    const [toggleShowFields, setToggleShowFields] = useState(true)
    const [startPomodoro, setStartPomodoro] = useState(false)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setSeconds(seconds - 1)
            if (seconds === 0) {
                setPomodorDuration(pomodoroDuration - 1)
                pomoTime = pomoTime - 1
            }
        }, 1000)

    }, [seconds])



    const handleSubmit = (e) => {
        e.preventDefault()
        setSeconds(59)
    }

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

                        {
                            startPomodoro ?
                                <div className="pomodoro__start__container">
                                    <span>
                                        {pomodoroDuration}:{seconds}
                                    </span>
                                </div> :

                                <form className='pomodoro__form' onSubmit={handleSubmit}>
                                    <div className="form-control">
                                        <div className="form-group">
                                            <label>Pomodoro duration</label>
                                            <input
                                                type="number"
                                                min={2}
                                                max={60}
                                                step={5}
                                                name='pomodoro-time'
                                                value={pomodoroDuration}
                                                onChange={(e) => setPomodorDuration(Number(e.target.value))}
                                            />
                                        </div>
                                        <p>:</p>
                                        <div className="form-group">
                                            <label>Short break duration</label>
                                            <input
                                                type="number"
                                                min={10}
                                                max={30}
                                                step={5}
                                                name='break-time'
                                                value={shortBreakDuration}
                                                onChange={(e) => setShortBreakDuration(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Long break duration</label>
                                            <input
                                                type="number"
                                                min={10}
                                                max={30}
                                                step={5}
                                                name='break-time'
                                                value={longBreakDuration}
                                                onChange={(e) => setLongBreakDuration(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Number of rounds</label>
                                            <input type="number" min={1} max={5} step={1} name='break-time' />
                                        </div>

                                    </div>


                                    <input type="submit" name="Start" id="start-pomodoro-button" value="Start" />

                                </form>

                        }

                        <div className="message">

                        </div>
                    </div>
            }
        </div>
    )
}

export default PomodoroCard

