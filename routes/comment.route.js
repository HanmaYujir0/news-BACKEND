const { Router } = require('express');
const { commentController } = require('../controllers/comments.controller');

const router = Router();

router.post('/news/comments/:id', commentController.postComment);
router.delete('/comments/:id', commentController.deleteComment);
router.get('/news/comments/:id', commentController.getCommentById);

module.exports = router;