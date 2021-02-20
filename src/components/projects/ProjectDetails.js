import React from 'react'
import { connect } from 'react-redux';
import {firebaseConnect, firestoreConnect} from 'react-redux-firebase';
import {compose } from 'redux';
import {Redirect} from 'react-router-dom';
import moment from 'moment'

function ProjectDetails(props) {
    const id = props.match.params.id;
    const {project,auth} = props;

    if(!auth.uid) return <Redirect to = '/intropage' />

    if(project){
        return(
            <div className = "container section project-details">
                <div className = "card">
                    <div className = "card-content">
                        <span className = "card-title indigo-text">{project.project_title} </span>
                    </div>
                    <div className = "card-action">
                        <p className = "blue-text text-darken-1">{project.project_content}</p>
                    </div>
                    <div className = "card-action gret lighten-4 grey-text">
                        <div> Posted by {project.authorFirstName} {project.authorLastName}</div>
                        <div> {moment(project.createdAt.toDate()).calendar()}</div>
                    </div>

                </div>
            </div>
        )
    }
    else{
        return(
            <div className = "container center">
                <p> Loading Project Content</p>
            </div>
        )
    }
    console.log(props);
    
}

const mapStateToProps = (state,ownProps) =>{
    //console.log(state);
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    return{
        project: project,
        auth: state.fireAuth.auth
    }

}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection : 'projects'}
    ])
)(ProjectDetails)
