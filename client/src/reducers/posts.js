// reducer is a function, it accpets the state AND ACTION
import { FETCH_ALL, UPDATE, DELETE, CREATE } from '../constants/actionTypes';

//based on the action type
// the state is an array because we have will have mutiple posts.
export default (posts= [], action) => {
    switch(action.type) {
        case FETCH_ALL:
            // the payload is the actual posts
            return action.payload;
        case CREATE:
            return [...posts, action.payload];

        case UPDATE:
      
        //if the id matches the payload id, it will return the payload if not, just return the post
            return posts.map((post)=> post._id === action.payload._id ? action.payload : post);

        case DELETE:
            return posts.filter((post)=> post._id !== action.payload);

        


        default:
            return posts;
    }
}