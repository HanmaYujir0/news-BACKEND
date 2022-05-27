const { Router } = require('express');
const { categoriesController } = require('../controllers/categories.controllers');

const router = Router();

router.post('/categories', categoriesController.postCategories);
router.delete('/categories/:id', categoriesController.deleteCategories);
router.get('/categories', categoriesController.getCategories);

module.exports = router;
