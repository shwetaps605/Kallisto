import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'
import WeatherCard from './components/weather-card/weather-card.component';

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
    }, [])



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
                console.log(result)
            })
            .catch(err => console.error(err))
    }


    const fetchAdvice = () => {
        const random = Math.floor(Math.random() * 100)
        axios.get(`https://api.adviceslip.com/advice/${random}`)
            .then((response) => {
                console.log(response.data);
                const fetchedadvice = response.data.slip.advice
                setAdvice(fetchedadvice)
                console.log(fetchedadvice)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <h2>App</h2>
            <p>{advice}</p>
            <WeatherCard weatherData={data} />
        </>
    )
}


export default App