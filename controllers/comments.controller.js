const Comment = require('../models/Comment.news.model');

module.exports.commentController = {
    postComment: (req, res) => {
        Comment.create({
            commName: req.body.commName,
            commentText: req.body.commentText,
            newsId: req.body.newsId
        }).then(() => {
            res.json('Комментарий добавлен')
        });
    },
    deleteComment: (req, res) => {
        Comment.findByIdAndRemove(req.params.id).then(() => {
            res.json('Комментарий удален')
        });
    },
    getCommentById: (req, res) => {
        Comment.find({newsId: req.params.id}).then((data) => {
            res.json(data)
        });
    }
}