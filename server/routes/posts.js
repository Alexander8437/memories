const express = require("express")
const { createPost, getPosts, updatePost, deletePost, likePost } = require("../controller/posts.js");

const router = express.Router()


router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost)

module.exports = router;