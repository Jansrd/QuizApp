import React from 'react'
import './style/Home.css'

const Home = ({ start }) => {
    return (
        <div className="home">
            <div className="home__title">
                <h2>My Quiz</h2>
            </div>
            <button onClick={start}>Start</button>
        </div>
    )
}

export default Home