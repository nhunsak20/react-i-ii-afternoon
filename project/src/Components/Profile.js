import React, { Component } from 'react'
import '../Styles/Profile.css'

import data from '../Data/data'

import ProfileName from './ProfileName'
import FavoriteMovies from './FavoriteMovies'
import List from './ProfileList'
import Changing from './Changing'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            data: data,
            profile: data[0]
        }
    }

    handleChange = (val) => {
        this.setState({
            profile: this.state.data[val]
        })
    }

    render() {
        return (
            <div className='profile-content'>
                <div className='profile-box'>
                    <div className='profile'>
                    <div className='profile-page'>{this.state.profile.id}/{this.state.data.length}</div>
                        <div className='profile-list'>
                            <ProfileName data={this.state.profile}/>
                            <List data={this.state.profile} />
                            <FavoriteMovies data={this.state.profile} /> 
                        </div>
                    </div>
                    <div className='con'>
                        <Changing change={this.handleChange} data={this.state.data} />
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Profile