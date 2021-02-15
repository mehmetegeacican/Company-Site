import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id;
    return (
        <div className = "container section project-details">
            <div className = "card">
                <div className = "card-content">
                    <span className = "card-title">Project Title - {id} </span>
                    <p>Lorem</p>
                </div>
                <div className = "card-action gret lighten-4 grey-text">
                    <div> Posted by the ...</div>
                    <div> 1.1.2021</div>
                </div>

            </div>
        </div>
    )
}

export default ProjectDetails
