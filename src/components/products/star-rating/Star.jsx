import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

const Star = ({ number}) => {
    let checked = Number((Math.floor(number)))
    let remainder = (Number(number) - checked).toFixed(2)
    let unchecked = 5 - Number(checked)
    let half = false
    if(remainder > 0.5){
        unchecked--
        half = true
    }
    
    
    return (
        <span >
            {[...Array(checked)].map((star, index) => (
                <FaStar color='#FADB14' key={index}/>
            ))}

            {half && <FaStarHalfAlt color='#FADB14' />}

            {[...Array(unchecked)].map((star, index) => (
                <FaRegStar color='#FADB14' key={index} />
            ))}

            

        </span>
    )
}

export default Star