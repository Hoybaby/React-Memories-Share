import { AUTH, LOGOUT} from '../constants/actionTypes';

const authReducer = ( state = {authData: null}, action) => {
    switch (action.type) {
        //if auth we want to get the details to console
        case AUTH:
            console.log(action?.data);
            return state;
    
        default:
            return state;
    }
}

export default authReducer;