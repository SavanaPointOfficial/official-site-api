const { Router } = require('express');
const jwt = require('jsonwebtoken')
const router = Router();
const ContactController = require('../controller/ContactController');
const BudgetController = require('../controller/BudgetController');
const PrincingController = require('../controller/PricingController');
const PriceController = require('../controller/PriceController')



router.post('/contact-us', ContactController.store);

router.post('/budget-required', BudgetController.store)
router.post('/payment', PrincingController.payment);

router.post('/price/create', PriceController.createPriceTable)

module.exports = router;