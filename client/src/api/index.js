import axios from 'axios';

//making a baseURL so i can reuse this same variable to handle mutiple calls
const API = axios.create({baseURL: 'http://localhost:5000'});

//this will happen before every request
API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
})

// const url = 'http://localhost:5000/posts';

// we are going to dispatch all our actions. 
export const fetchPosts =() => API.get('/posts');

export const createPost =(newPost) =>API.post('/posts', newPost);

export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);

export const deletePost =(id) => API.delete(`/posts/${id}`);

export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

//--------------USERS----------
export const signIn = (formData) => API.post('/user/signin', formData);

export const signUp = (formData)=> API.post('/user/signup', formData);