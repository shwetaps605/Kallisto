import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import TasksProvider from './contexts/TaskContexts'

ReactDOM.render(
    <TasksProvider>
        <App />
    </TasksProvider>,
    document.getElementById('root'))