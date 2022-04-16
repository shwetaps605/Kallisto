import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import TasksProvider from './contexts/TaskContext'
import TimerProvider from './contexts/TimerContext'

ReactDOM.render(
    <TasksProvider>
        <TimerProvider>
            <App />
        </TimerProvider>
    </TasksProvider>,
    document.getElementById('root'))