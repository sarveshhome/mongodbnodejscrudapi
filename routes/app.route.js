'use strict';
module.exports = function(app) {
    var productController = require('../controller/product.controller.js');

    app.route('/api/product')
        .get(productController.getProduct)
        .post(productController.createProduct);

    // app.route('/product/:productid')
    //     .get(productController.getProduct)
    //     .put(productController.updateProduct)
    //     .delete(productController.deleteProduct);

}


