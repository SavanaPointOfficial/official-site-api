const deleteRoutes = require('express').Router();
const DeletePriceController = require('../controller/PriceController')

deleteRoutes.delete('/price/delete/:id',DeletePriceController.deletePriceTable );


module.exports = deleteRoutes;