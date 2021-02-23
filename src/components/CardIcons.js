import React from 'react'
import PropTypes from 'prop-types'


const CardIcons = ({icons: { retweets, likes, comments, messages}}) => {
    return (
        <div className='card-icons'>
            <span id='comment' style={show}><i className="far fa-comment"></i>{comments}</span> 
            <span id='retweet' style={show}><i className="fas fa-retweet"></i>    {retweets}</span> 
            <span id='like' style={show}><i className="far fa-heart"></i>    {likes}</span> 
            <span id='message' style={show}><i className="far fa-envelope"></i>    {messages}</span>
        </div>
    )
}

CardIcons.propTypes = {
    icons: PropTypes.object.isRequired,
}

const show = {
    display: 'flex',
    marginRight: '20px',
    alignItems: 'baseline'
}

export default CardIcons
