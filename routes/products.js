const productsController = require('../controllers/productsControllers');
const router = require('express').Router();

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProduct);
router.get('/search/:key', productsController.searchProduct);
router.post('/', productsController.createProduct);

module.exports = router;
