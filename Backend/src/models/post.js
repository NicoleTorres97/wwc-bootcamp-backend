const mongoose = require('mongoose');

const CommenSchema = new mongoose.Schema({
    author:{
        type: String,
        requiered: true
    },
    comment: {
        type: String,
        requiered: true
    }
})
// es una clase y se declara  en mayuscula
const PostSchema = new mongoose.Schema(
    {
        title: {
            type : Sring,
            requiered : true
        },
        body: {
            type : Sring,
            requiered : true 
        },
        imageUrl: {
            type :Sring
        },
        author: {
            type : Sring,
            requiered : true 
        },
        comments: [CommentSchema]

    },
    {timestamps: true}

);

const PostModel = mongoose.model('Post', PostSchema);
modeule.exports = PostModel;