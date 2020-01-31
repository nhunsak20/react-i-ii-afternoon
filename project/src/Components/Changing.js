import React, { Component } from 'react'

import Next from './NextProfile'
import Previous from './PreviousProfile'

class Changing extends Component {
    constructor() {
        super()
        this.state = {
            page: 0
        }
        
        this.handleNext = this.handleNext.bind(this)
        this.handlePrevious = this.handlePrevious.bind(this)
    }

    handleNext() {
        const currentPage = this.state.page
        const maxPage = this.props.data.length - 1
        
        const nextPage = currentPage < maxPage ? currentPage + 1 : 0
        
        this.setState({
            page: nextPage
        })
        
        this.props.change(nextPage)
    }
    
    handlePrevious() {
        const currentPage = this.state.page
        const maxPage = this.props.data.length - 1
        
        const prevPage = currentPage <= 0 ? maxPage : currentPage - 1
        

        this.setState({
            page: prevPage
        })

        this.props.change(prevPage)
    }

    render() {
        return (
            <div className='profile-event'>
                <Previous page={this.handlePrevious} />
                <div className='profile-edit'>
                    <div>
                        Edit
                    </div>
                    <div>
                        Delete
                    </div>
                    <div>
                        New
                    </div>
                </div>
                <Next page={this.handleNext} />
            </div>
        )
    }


}

export default Changing