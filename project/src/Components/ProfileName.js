import React from 'react'

function ProfileName(props) {
    const { data } = props
    
    const firstName = data.name.first
    const lastName = data.name.last

    return (
        <h1>
            <span className='profile-name'>{`${firstName} ${lastName}`}</span>
        </h1>
    )
}

export default ProfileName