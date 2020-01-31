import React from 'react'

function Next(props) {
    const { page } = props

    return(
        <div className='button' onClick={page}>Next  &#62;</div>
    )
}

export default Next