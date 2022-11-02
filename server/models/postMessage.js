import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    //reason why it is an object is so we can set a default.
    likes: {
        type: [String],
        default: [],
    },
    created: {
        type: Date,
        default: new Date()
    },
});


const PostMessage = mongoose.model('PostMessage', postSchema);

// exporting a mongoose model from the PostMessage file.
export default PostMessage;