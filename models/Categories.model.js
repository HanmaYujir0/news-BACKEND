const mongoose = require('mongoose');

const categoriesSchema = mongoose.Schema({
    categoriesName: String,
});

const Categories = mongoose.model('categories', categoriesSchema);

module.exports = Categories;