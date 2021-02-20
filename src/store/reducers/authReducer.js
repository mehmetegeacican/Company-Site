const initState = {
    authError:null

}
const authReducer = (state = initState ,action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log("Login Not Success!");
            return {
                ...state,
                authError: 'LOGIN_FAILED'
            }
        case 'LOGIN_SUCCESS':
            console.log("Login Success!");
            return{
                ...state,
                authError: null
            }
        case 'SIGN_OUT_SUCCESS':
            console.log('Sign out success');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('Sign Up Success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('Sign Up not successful!');
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
            
    }
    //return state
}
export default authReducer