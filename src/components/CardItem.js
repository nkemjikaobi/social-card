import React from 'react'
import PropTypes from 'prop-types'
import CardFooter from './CardFooter'
import CardIcons from './CardIcons'
import Border from './Border'
 import woman from '../images/woman.jpg'
// import man from '../images/man.jpg'
//  import child from '../images/child.jpg'

const CardItem = ({ card }) => {

    return (
        <div className='cardd col-md-4'>
            <div id='card-bg'>
                <button className='card-left'>{card.title}</button>
                <div className='card-main'>
                    <p>{card.description}</p>
                </div>
                <div className='card-right'>
                    <span>{card.author}</span>
                    <img src={woman} alt='human' width='30%' height='30%'/>
                </div>
            </div>
            <CardFooter footer={card} key={card.id} />
            <CardIcons icons={card}/>
            <Border />
        </div>
    )
}

CardItem.propTypes = {
    card: PropTypes.object.isRequired,
}

export default CardItem
