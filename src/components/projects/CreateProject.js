import React, { Component } from 'react'

import { connect } from 'react-redux'
import {createProject} from '../../store/actions/projectActions'
import {Redirect} from 'react-router-dom';
export class CreateProject extends Component {

    state = {
        project_title : "",
        project_content : "",
        project_members : "",

    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value

        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.createProject(this.state);
        this.props.history.push('/');

    }
    render() {
        const { auth } = this.props
        if(!auth.uid) return <Redirect to = '/intropage' />
        return (
            <div className = "container">
                <form onSubmit = {this.handleSubmit} className = "white">
                    <h5 className = "grey-text text-darken-3">Create a Project</h5>
                    <div className = "input-field">
                        <label htmlFor = "project_title">Project Title</label>
                        <input type = "text" id = "project_title" onChange = {this.handleChange} className = "blue-text"></input>
                    </div>
                    <div className = "input-field">
                        <label htmlFor = "project_content">Project Content</label>
                        <textarea id="project_content" onChange = {this.handleChange} className="materialize-textarea blue-text text-darken-2"></textarea>
                    </div>
                    <div className = "input-field">
                        <button className = "btn blue lighten-1 z-depth-0">Create</button>
                    </div>

                </form>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.fireAuth.auth
    }

}
const mapDispatchToProps = (dispatch) =>{
    return{
        createProject : (project) => (dispatch(createProject(project)))
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(CreateProject)
