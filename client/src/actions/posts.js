import * as api from '../api';

// ACTIONS creators
//these return actions
//redux thunk allows us to specifiy another arror funtion
//action is just a type which has a payload
export const getPosts = () => async(dispatch) => {
    try {
        // we are getting the response and the data object. data represents the post
        const {data} = await api.fetchPosts();

        //redux will dispatch an action from the data on the backend
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post)=> async(dispatch)=> {

    try {
        const {data} = await api.createPosts(post);

        dispatch({type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);
  
      dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
      console.log(error);
    }
  };
