import {AUTH} from '../constants/actionTypes';
import * as api from '../api/index';

export const signin = (formData, history) => async(dispatch)=> {
    try {
        // logs in the user 
        //form is component in Auth
        const { data} = await api.signIn(formData);

        dispatch({type: AUTH, data});

        history.push('/');
    } catch(error){
        console.log(error);
    }
};

export const signup = (formData, history) => async(dispatch)=> {
    try {
        // signup  the user 
        const { data} = await api.signUp(formData);

        dispatch({type: AUTH, data});

        history.push('/');
    } catch(error){
        console.log(error);
    }
}