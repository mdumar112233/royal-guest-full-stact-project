import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NotFound extends Component {
    render() {
        return (
            <div>
                <h2>Not Found</h2>
                <h3>404</h3>
                <Link to='/'>Back to Home</Link>
            </div>
        )
    }
}

export default NotFound
