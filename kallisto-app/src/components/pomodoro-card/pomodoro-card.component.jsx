import React, { useEffect, useState, useRef } from 'react'
import './pomodoro-card.styles.scss'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const PomodoroCard = (props) => {

    const [pomodoroDuration, setPomodorDuration] = useState(0)
    const [shortBreakDuration, setShortBreakDuration] = useState(0)
    const [toggleShowFields, setToggleShowFields] = useState(true)
    const [startPomodoro, setStartPomodoro] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const [seconds, setSeconds] = useState(0)
    const [mode, setMode] = useState('work')


    const modeRef = useRef(mode)
    const secondsRef = useRef(seconds)
    const isPausedRef = useRef(isPaused)

    const workColor = 'rgb(172, 57, 115)';
    const restColor = 'rgb(142, 236, 108)';


    useEffect(() => {
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
        const validated = validateInputs()
        if (!validated) {
            alert('must provide values for work and break duration')
            return
        }
        setStartPomodoro(true)
        const interval = setInterval(() => {
            if (isPausedRef.current) {
                return
            }
            if (secondsRef.current === 0) return switchMode()
            tick();
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }

    const totalSeconds = mode === 'work'
        ? pomodoroDuration * 60
        : shortBreakDuration * 60
    const percentage = Math.round(seconds / totalSeconds * 100)

    const minutes = Math.floor(seconds / 60)
    let secondsLeft = seconds % 60
    if (secondsLeft < 10) secondsLeft = '0' + secondsLeft

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
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.117 12L9.644 5.765L9 5L0 12.521L9 20L9.645 19.236L2.116 13H24V12H2.117Z" />
                            </svg>
                        </button>

                        {
                            startPomodoro ?
                                <div className="timer__container">
                                    <p className='timer_message'>{mode === 'work' ? "Stay focused!" : "Take a break!"}</p>
                                    <div
                                        className="timer"
                                        onClick={() => { setIsPaused(!isPaused); isPausedRef.current = !isPausedRef.current; }}
                                    >
                                        <CircularProgressbar
                                            value={percentage}
                                            text={minutes + ':' + secondsLeft}
                                            styles={buildStyles({
                                                pathColor: mode === 'work' ? workColor: restColor,
                                                textColor: '#fff',
                                                trailColor: '#d6d6d6',
                                                backgroundColor:'#333'
                                            })}
                                        />
                                        {/* {
                                        isPaused ?
                                            <svg className='play-button' width="40" height="40" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" fill='#fff'>
                                                <path d="M23 12l-22 12v-24l22 12zm-21 10.315l18.912-10.315-18.912-10.315v20.63z" />
                                            </svg> :
                                            <svg className='pause-button' width="40" height="40" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" fill='#fff'>
                                                <path d="M10 24h-6v-24h6v24zm10 0h-6v-24h6v24zm-11-23h-4v22h4v-22zm10 0h-4v22h4v-22z" />
                                            </svg>
                                    } */}
                                    </div>
                                    
                                </div> :

                                <form className='pomodoro__form' >
                                    <div className="form-control">
                                        <div className="form-group">
                                            <label>Pomodoro duration</label>
                                            <input
                                                type="number"
                                                min={10}
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
                                                min={10}
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
                                    </div>

                                    <button type='button' id="start-pomodoro-button" onClick={() => startTimer()}>Start</button>
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

