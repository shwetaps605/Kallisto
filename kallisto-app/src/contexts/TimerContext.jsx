import React, { useState,useContext } from 'react'


const TimerContext = React.createContext()

export const useTimer = () => {
    return useContext(TimerContext)
}

const TimerProvider = ({children}) => {

    const [pomodoroDuration, setPomodorDuration] = useState(0)
    const [shortBreakDuration, setShortBreakDuration] = useState(0)
    const [longBreakDuration, setLongBreakDuration] = useState(0)
    return(
        <TimerContext.Provider value={{

        }}>
            {children}
        </TimerContext.Provider>
    )
}

export default TimerProvider

