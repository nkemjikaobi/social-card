import React from 'react'
import CardFooter from './CardFooter'
import man from '../images/man.jpg';

const Card = () => {
    return (
        <div class='card'>
            <div id='card-bg'>
                <button class='card-left'>DEV</button>
                <div class='card-main'>
                    <p>Learning React? Start Small.</p>
                </div>
                <div class='card-right'>
                    <span>Dave Ceddia</span>
                    <img src={man} alt='man' width='50px' height='40px'/>
                </div>
            </div>
            <CardFooter />
        </div>
    )
}

export default Card

