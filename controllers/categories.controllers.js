const Categories = require('../models/Categories.model');

module.exports.categoriesController = {
    postCategories: (req, res) => {
        Categories.create({
            categoriesName: req.body.categoriesName,
        }).then(() => {
            res.json('Категоря добавлена')
        });
    },
    deleteCategories: (req, res) => {
        Categories.findByIdAndRemove(req.params.id).then(() => {
            res.json('Категория удалена')
        });
    },
    getCategories: (req, res) =>{
        Categories.find().then((data) => {
            res.json(data)
        });
    }
}