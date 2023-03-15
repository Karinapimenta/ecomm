const { Router } = require('express');
const OrdersController = require('../controllers/OrdersController.js');
const authenticationBearer = require('../middlewares/authentication');

const router = Router();

router.post('/orders/', authenticationBearer, OrdersController.saveNewOrder);
router.patch('/orders/:id/:status', authenticationBearer, OrdersController.updateStatusOrderByLink);

module.exports = router;
