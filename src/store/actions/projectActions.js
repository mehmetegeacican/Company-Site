export const createProject = (project) => {
    return(dispatch,getState, {getFirebase, getFirestore }) =>{
        //async call to db
        const fstore = getFirestore();
        fstore.collection('projects').add({
            ...project,
            authorFirstName : "trial",
            authorLastName : "trial",
            authorId : 12355,
            createdAt : new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT',project});
        }).catch((err) =>{
            dispatch({type: 'CREATE_PROJECT_ERROR',err});

        })
        

    }

};