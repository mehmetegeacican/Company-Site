import React, { Component } from 'react'

import { connect } from 'react-redux'

import {Redirect} from 'react-router-dom';
export class Notifications extends Component {
    render() {
        const { auth } = this.props
        if(!auth.uid) return <Redirect to = '/intropage' />
        return (
            <div className = "container">
                <p> Notifications </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.fireAuth.auth
    }

}
export default connect(mapStateToProps,null)(Notifications)
