import React, { useEffect, useState, useRef } from 'react'
import './pomodoro-card.styles.scss'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { validate } from 'uuid';

const PomodoroCard = (props) => {

    const [pomodoroDuration, setPomodorDuration] = useState(0)
    const [shortBreakDuration, setShortBreakDuration] = useState(0)
    const [toggleShowFields, setToggleShowFields] = useState(true)
    const [startPomodoro, setStartPomodoro] = useState(false)


    let [seconds, setSeconds] = useState(0)
    const [mode, setMode] = useState('break')
    const [percentage, setPercentage] = useState(0)

    const modeRef = useRef(mode)
    const secondsRef = useRef(seconds)


    useEffect(() => {
        console.log("pomodoro", pomodoroDuration)
        const duration = (mode === 'work' ? pomodoroDuration : shortBreakDuration) * 60
        secondsRef.current = duration
        setSeconds(secondsRef.current)
    }, [pomodoroDuration, shortBreakDuration])


    function tick() {
        secondsRef.current = secondsRef.current - 1
        setSeconds(secondsRef.current)
    }

    function switchMode() {
        const nextMode = modeRef.current === 'work' ? 'break' : 'work'
        const nextSeconds = (nextMode === 'work' ? pomodoroDuration : shortBreakDuration) * 60
        setMode(nextMode)
        modeRef.current = nextMode
        setSeconds(nextSeconds)
        secondsRef.current = nextSeconds
    }

    function validateInputs() {
        if (pomodoroDuration === 0 || shortBreakDuration === 0)
            return false
        return true
    }

    function startTimer() {
        // console.log("previous", secondsRef.current);
        // console.log("SECONDS", seconds, secondsRef.current)
        const validated = validateInputs()

        if (!validated) {
            alert('must provide values for work and break duration')
            return

        }

        setStartPomodoro(true)
        const interval = setInterval(() => {
            if (secondsRef.current === 0) return switchMode()
            tick();
        }, 100)

        return () => {
            clearInterval(interval)

        }
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

                        <button onClick={() => {
                            setToggleShowFields(false)
                            setStartPomodoro(false)
                        }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.117 12L9.644 5.765L9 5L0 12.521L9 20L9.645 19.236L2.116 13H24V12H2.117Z" />
                            </svg>
                        </button>

                        {
                            startPomodoro ?
                                <div className="pomodoro__start__container">
                                    <p>{mode}</p>
                                    <CircularProgressbar
                                        value={seconds}
                                        text={seconds}
                                        styles={buildStyles({

                                            pathColor: '#3f3f3f',
                                            textColor: '#fff',
                                            trailColor: '#d6d6d6',
                                        })}
                                    />
                                </div> :

                                <form className='pomodoro__form' >
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
                                                onChange={(e) => {
                                                    setPomodorDuration(Number(e.target.value))

                                                }}
                                                required
                                            />
                                        </div>
                                        <p>:</p>
                                        <div className="form-group">
                                            <label>Break duration</label>
                                            <input
                                                type="number"
                                                min={2}
                                                max={30}
                                                step={5}
                                                name='break-time'
                                                value={shortBreakDuration}
                                                onChange={(e) => {
                                                    setShortBreakDuration(Number(e.target.value))
                                                }}
                                                required
                                            />
                                        </div>
                                        {/* <div className="form-group">
                                            <label>Long break duration</label>
                                            <input
                                                type="number"
                                                min={10}
                                                max={30}
                                                step={5}
                                                name='break-time'
                                                value={longBreakDuration}
                                                onChange={(e) => setLongBreakDuration(Number(e.target.value))}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Number of rounds</label>
                                            <input type="number" min={1} max={5} step={1} name='break-time' />
                                        </div> */}

                                    </div>

                                    <button type='button' id="start-pomodoro-button" onClick={() => startTimer()}>Start</button>


                                    {/* <input type="bu" name="Start"  value="Start" /> */}

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

