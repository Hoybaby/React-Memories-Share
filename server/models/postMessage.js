import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    //reason why it is an object is so we can set a default.
    likeCount: {
        type: Number,
        default: 0
    },
    created: {
        type: Date,
        default: new Date()
    },
});


const PostMessage = mongoose.model('PostMessage', postSchema);

// exporting a mongoose model from the PostMessage file.
export default PostMessage;