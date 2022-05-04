//const data = require ('../data/data')
const postService = require ('../services/post-service')

const getPosts = (req, res) => {
    try{
        const posts = await postService.getPosts();
        res.setHeader('Total post:', posts.lengh)
        res.json(posts)
    } catch (error){
        next(error);
    }
}

const getPost = async (req, res, next) => {
    const id = req.params.id;
    try{
        const post = await postService.getPost(id);
        if (!post){
            return res.status(404).json({message: "Post not found"})
        }
        res.json(post);

    } catch(error){
        next(error);
    }
}
const createPost =  async(req, res) => {
    const newPost = req.body;
    try{
        const savedPost = await postService.createPost(newPost);
        res.status(201).json(savedPost);

    } catch(error){
        console.log(error);
        res.status(500).json({message: "Internal error"});
    }

    

    //data.push(newPost)
    //res.status(201).json(newPost)
}
const updatePost = async(req, res, next) => {
    const id = req.params.id;
    const postToUpdate = req.body;

    try {
        const updatePost = await postService.updatePost(id, postToUpdate);
        if(!updatePost) {
            return res.status(404).json({message: "Post"})
        }
        
        res.json(updatePost);

    } catch(error){
        next(error);
    }
}

const deletePost = async(req, res,next) => {
    const id = req.params.id;
    try {
        await postService.deletePost(id);
        res.status(204).send();

    }catch(error){
        next(error);
    }
}

module.exports = {

    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}

