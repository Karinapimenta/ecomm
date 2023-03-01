const { Router } = require('express');
const OrdersController = require('../controllers/OrdersController.js');

const router = Router();

router.post('/orders/', OrdersController.saveNewOrder);
router.patch('/orders/:id/:status', OrdersController.updateStatusOrderByLink);

module.exports = router;
