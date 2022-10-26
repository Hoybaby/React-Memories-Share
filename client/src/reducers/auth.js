import { AUTH, LOGOUT} from '../constants/actionTypes';

const authReducer = ( state = {authData: null}, action) => {
    switch (action.type) {
        //if auth we want to get the details to console
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({...action?.data}));
            // console.log(action?.data);
            return {...state, authData: action?.data}

        case LOGOUT:
            localStorage.clear();
            return {...state, authData: null}
    
        default:
            return state;
    }
}

export default authReducer;