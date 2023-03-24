const { Router } = require('express');
const PaymentController = require('../controllers/PaymentController');

const router = Router();
router.get('/payments/:id', PaymentController.getOnePayment);
router.post('/payments', PaymentController.savePayment);
router.patch('/payments/:id/:status', PaymentController.updateStatus);

module.exports = router;
