const updateRoutes = require('express').Router();
const UpdateTableController = require('../controller/PriceController')

updateRoutes.put('/price/update/:id', UpdateTableController.updatePriceTable)

module.exports = updateRoutes;