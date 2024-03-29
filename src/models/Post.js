import mongoose from "mongoose";

const {Schema} = mongoose;

const postSchema = new Schema({
    title: {
        type:String,
       
        required: true,
    },
    desc: {
        type:String,
        
        required: true,
    },
    img: {
        type:String,
        required: true,
    },
    content: {
        type:String,
        required: true,
    },
    username: {
        type:String,
        required: true,
    },
},
{timestamps:true}
);

let Post;

try {
    // Try to retrieve an existing model to prevent recompilation
    Post = mongoose.model("Post");
} catch (error) {
    // If model doesn't exist, create and export it
    Post = mongoose.model("Post", postSchema);
}

export default Post;