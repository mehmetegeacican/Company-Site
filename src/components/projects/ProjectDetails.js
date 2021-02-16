import React from 'react'
import { connect } from 'react-redux';
import {firebaseConnect, firestoreConnect} from 'react-redux-firebase';
import {compose } from 'redux';

function ProjectDetails(props) {
    const id = props.match.params.id;
    const {project} = props;
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
                        <div> 1.1.2021</div>
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
        project: project
    }

}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection : 'projects'}
    ])
)(ProjectDetails)
