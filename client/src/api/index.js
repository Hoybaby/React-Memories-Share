import axios from 'axios';

const url = 'http://localhost:5000/posts';

// we are going to dispatch all our actions. 
export const fetchPosts =() => axios.get(url);