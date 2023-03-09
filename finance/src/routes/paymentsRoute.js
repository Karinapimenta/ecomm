const { Router } = require('express');
const PaymentController = require('../controllers/PaymentController');
const authenticationBearer = require('../middlewares/authentication');

const router = Router();
router.get('/payments/:id', authenticationBearer, PaymentController.getOnePayment);
router.post('/payments', authenticationBearer, PaymentController.savePayment);
router.patch('/payments/:id/:status', authenticationBearer, PaymentController.updateStatus);

module.exports = router;
