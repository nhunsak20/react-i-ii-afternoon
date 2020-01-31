import React from 'react'

function Next(props) {
    const { page } = props

    return(
        <button className='button' onClick={page}>Next  &#62;</button>
    )
}

export default Next