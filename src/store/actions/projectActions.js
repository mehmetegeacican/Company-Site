export const createProject = (project) => {
    return(dispatch,getState, {getFirebase, getFirestore }) =>{
        //async call to db
        const fstore = getFirestore();
        const prof = getState().fireAuth.profile;
        const authorID = getState().fireAuth.auth.uid;
        fstore.collection('projects').add({
            ...project,
            authorFirstName : prof.firstName,
            authorLastName : prof.lastName,
            authorId : authorID,
            createdAt : new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT',project});
        }).catch((err) =>{
            dispatch({type: 'CREATE_PROJECT_ERROR',err});

        })
        

    }

};