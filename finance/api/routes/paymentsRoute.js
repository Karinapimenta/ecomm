const {Router} = require ('express')
const PaymentController = require ('../controllers/PaymentController')

const router = Router ()
router.get('/payments/:id', PaymentController.getOnePayment)//OK
router.post('/payments', PaymentController.savePayment) //Ok
router.patch('/payments/:id/:status', PaymentController.updateStatus)

module.exports = router