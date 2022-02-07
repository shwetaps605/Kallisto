import "./weather-card.styles.scss"

const WeatherCard = ({ weatherData }) => (
    <div className="weather__data__card">
        <div>
            <p>{weatherData.name}</p>
            <p>{weatherData.main.temp} &deg;C</p>
        </div>
        <p>{weatherData.weather[0].description}</p>
    </div>

)

export default WeatherCard