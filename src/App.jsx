import React from 'react'


import Header from './components/modules/Header'
import Footer from './components/modules/Footer'
import Break from './components/Break'
import Session from './components/Session'
import Timer from './components/Timer'

function App() {
    return (
        <div className="App">
            <div className="clock">
            <Header />
            <div className="break-and-session">
                <Break />
                <Session />
            </div>
            <Timer />
            <Footer />
        </div>
        </div>
    )
}

export default App
