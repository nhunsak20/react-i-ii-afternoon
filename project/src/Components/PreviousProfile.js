import React from 'react'

function Previous(props) {
    const { page } = props

    return(
        <div className='button' onClick={page}>&#60; Previous</div>
    )
}

export default Previous