import React from 'react'

import './assets/styles/index.sass'

import MainPageComponent from './components/MainPageComponent/MainPageComponent'

class App extends React.Component {
    render() {
        return(
            <div className="app-wrapper">
                <MainPageComponent/>
            </div>
        )
    }
}

export default App