// reducer is a function, it accpets the state AND ACTION

import { CardActionArea } from "@material-ui/core"

//based on the action type
// the state is an array because we have will have mutiple posts.
export default (posts= [], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            // the payload is the actual posts
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];

        default:
            return posts;
    }
}