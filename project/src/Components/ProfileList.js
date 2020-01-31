import React from 'react'

function List(props) {
    const { data } = props

    return (
        <div>
            <p><span className='bolder'>From: </span>{data.city}, {data.country}</p>
            <p><span className='bolder'>Job Title: </span>{data.title}</p>
            <p><span className='bolder'>Employer: </span>{data.employer}</p>
        </div>
    )
}

export default List