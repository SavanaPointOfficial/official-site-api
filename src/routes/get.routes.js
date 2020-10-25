const PriceController = require('../controller/PriceController');

const getRoutes = require('express').Router();

const PriceTable = require('../controller/PriceController')

getRoutes.get('/price/table', PriceTable.getPriceTable);

getRoutes.get('/price/table/:param', PriceTable.getPriceTableParams)

module.exports = getRoutes;



