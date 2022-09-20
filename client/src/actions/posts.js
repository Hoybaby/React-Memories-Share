import * as api from '../api';

// ACTIONS creators
//these return actions
//redux thunk allows us to specifiy another arror funtion
//action is just a type which has a payload
const getPosts = () => async(dispatch) => {
    try {
        const {data} = await api.fetchPosts();
    } catch (error) {
        
    }
    const action = {type: 'FETCH_ALL', payload: []}

   dispatch(action);
}