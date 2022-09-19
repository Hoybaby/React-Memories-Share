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