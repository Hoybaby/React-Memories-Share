import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async(req, res) => {
    //simple try and catch block
    try {
        // needs to be await because we need to make it async because it can take time.
        const postMessages = await PostMessage.find();

        console.log(postMessages);
        res.status(200).json(postMessages);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
    
}

export const createPost = async(req, res) => {

    //have no way to send a body to the backend because of the lack of frontend.
    const post = req.body;
    //takes the post which is req.body which will be assigned later and passing it as an object
    //of the schema.
    const newPost = new PostMessage(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);


    } catch(error) {
        res.status(409).json({message: error.message});
    }
}

export const updatePost = async(req,res) => {

    //this is extracting the id from req.params. called object destructing.
    const {id: _id} = req.params;

    //will be sent from the front ne
    const post = req.body;

    //have to check if the ID is valid. just like i would and throw and error in java
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    const updatedPost = await PostMessage.findByIdAndUpdate(_id,{...post, _id}, {new: true});

    res.json(updatedPost);
}

export const deletePost = async(req, res) => {
    const {id: _id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    await PostMessage.findByIdAndRemove(_id);
    console.log('post deleted');

    res.json({message: 'Post deleted succesfully'});

}

export const likePost = async(req,res) => {

    const {id} = req.params;
    
    if(!req.userId) return res.json({message: 'Unathenticated'});
    
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    const post = await PostMessage.findById(id);

    //the person already liked the post and the like will be a dislike
    const index = post.likes.findIndex((id) =>id === String(req.userId));

    if(index === -1) {
        //like the post
        post.likes.push(req.userId);
    } else {
        //dislike the post
        //filer will loop through all the ids
        post.likes = post.likes.filter((id) => id !== String(req.userId));
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {new: true});

    res.json(updatedPost);
}