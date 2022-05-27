const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
    title: String,
    text: String,
    categoriesId: {
        ref: 'Categories',
        type: mongoose.SchemaTypes.ObjectId,
    },
});

const News = mongoose.model('news', newsSchema);

module.exports = News;