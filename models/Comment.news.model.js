const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    commName: String,
    commentText: String,
    newsId: {
        ref: 'News',
        type: mongoose.SchemaTypes.ObjectId,
    },
});

const Comment = mongoose.model('comment', commentSchema);

module.exports = Comment;