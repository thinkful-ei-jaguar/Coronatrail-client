import React, { Component } from 'react'
import PersonContext from '../../Context/PersonContext'
import LandingPage from '../LandingPage/LandingPage'
import StartPage from '../StartPage/StartPage'
import GamePage from '../GamePage/GamePage'
import gameService from '../../services/gameService'

//import './HomePage.css'



export default class HomePage extends Component {
    static contextType = PersonContext
    
    render() {
        return (
            <div className='homePage'>
                
                {this.context.start && <LandingPage />}
                {this.context.userPage && <StartPage />}
                {this.context.game ? <GamePage/> : null}

            </div>
        )
    }
}
