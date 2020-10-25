const paypal = require('paypal-rest-sdk');


paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AXZ-ESxf3MzIRx8G3Pkn336mhiyiCKcjE64Dph5UsPkJ8-rqyEjv309LtrLXFKkuPLTcDyKCTpQszI-9',
    'client_secret': 'ECW2pZvW3NhUVxUkP4e28gMhRYulR4OKJDdQpI1EwKyeQxW1B9PRMuayugCzJrU_tCFpbmAmzhykTrf7'
  });


  module.exports = paypal;