import React from 'react'
import axios from 'axios';
import './App.css'

class App extends React.Component {
    state = {
        advice: ""
    }


componentDidMount() {
    this.fetchAdvice()
}

fetchAdvice = () => {
    const random = Math.floor(Math.random() * 100)
    axios.get(`https://api.adviceslip.com/advice/${random}`)
    .then((response) => {
        console.log(response.data);
        const {advice} = response.data.slip
        this.setState({advice})
    })
    .catch(err => console.log(err))
}

render() {
    const {advice} = this.state
    return (
        <div>
            <h1>{advice}</h1>
            <button onClick={this.fetchAdvice}>
                <span>Give me some sunshine</span>
            </button>
        </div>
    )
}
}


export default App