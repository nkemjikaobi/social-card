import React from 'react'
import PropTypes from 'prop-types'

const CardFooter = ({ footer: {footerTitle, footerDescription, footerLink }}) => {
    return (
        <div className='card-footer'>
            <h4>{footerTitle}</h4>
            <p>{footerDescription}</p>
            <a href="#!">{footerLink}</a>
        </div>
    )
}

CardFooter.propTypes = {
    footer: PropTypes.object.isRequired,
}


export default CardFooter
