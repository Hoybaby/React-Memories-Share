import { AUTH, LOGOUT} from '../constants/actionTypes';

const authReducer = ( state = {authData: null}, action) => {
    switch (action.type) {
        //if auth we want to get the details to console
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({...action?.data}));
            // console.log(action?.data);
            return {...state, authData: action?.data};
    
        default:
            return state;
    }
}

export default authReducer;