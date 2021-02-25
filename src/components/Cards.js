import React, { useState } from 'react'
import CardItem from './CardItem';
import woman from '../images/woman.jpg'
import man from '../images/man.jpg'
import child from '../images/child.jpg'

const Cards = () => {

    const [cards]= useState([
            {
                id: 1,
                title: 'dev',
                description: 'Learning React? Start Small.',
                author: 'Dave Ceddia',
                url: man,
                footerTitle: 'Learning React? Start Small',
                footerDescription: 'Can\'t pry yourself away from the tutorials? The cure is to make tiny little experiment apps.',
                footerLink: 'dave.com',
                comments: 2,
                retweets: 34,
                likes: 40,
                messages: 32
            },
            {
                id: 2,
                title: 'baker',
                description: 'The dough and flour matters.',
                author: 'Lucia Baker',
                url: woman,
                footerTitle: 'The dough rises',
                footerDescription: 'More flour needed',
                footerLink: 'baker.io',
                comments: 6,
                retweets: 64,
                likes: 7,
                messages: 23
            },
            {
                id: 3,
                title: 'student',
                description: 'Education keeps me going',
                author: 'Jasper Lopez',
                url: child,
                footerTitle: 'Atomic Physics',
                footerDescription: 'Quantum Mechanics might take over',
                footerLink: 'jasper.lopez.dev',
                comments: 87,
                retweets: 9,
                likes: 9,
                messages: 10
            }
        
    ])

    return (
            <div className='row'>
                    {cards.map( card => (<CardItem key={card.id} card={card}/>))}
            </div>   
    )
}

export default Cards

