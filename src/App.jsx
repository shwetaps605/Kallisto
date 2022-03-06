import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import WeatherCard from './components/weather-card/weather-card.component';
import AdviceCard from './components/advice-card/advice-card.component';
import TaskListCard from './components/task-list/task-list-card.component';
import Modal from './components/modal/modal.component';
import AddTaskCard from './components/add-task/add-task-card.component'
import Tas

import './App.css'

function App() {

    const [lat, setLat] = useState([])
    const [long, setLong] = useState([])
    const [data, setData] = useState([])
    const [advice, setAdvice] = useState("")

    useEffect(() => {
        fetchData()
    }, [lat, long])

    

    useEffect(() => {
        fetchAdvice()
    },[])

    const fetchData = async () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude)
            setLong(position.coords.longitude)
            console.log('gettting it');
        })

        await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(result => {
                setData(result)
            })
            .catch(err => console.error(err))
    }

    const fetchAdvice = () => {
        const random = Math.floor(Math.random() * 100)
        axios.get(`https://api.adviceslip.com/advice/${random}`)
            .then((response) => {
                const fetchedadvice = response.data.slip.advice
                setAdvice(fetchedadvice)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <h2 id='title'>kallisto</h2>
            {
                (typeof data.main != 'undefined') ?
                    (<WeatherCard weatherData={data} />) :
                    (<div></div>)
            }
            <AdviceCard adviceData={advice} />
            <AddTaskCard></AddTaskCard>
            <TaskListCard></TaskListCard>
            <Modal></Modal>
        </>
    )
}


export default App