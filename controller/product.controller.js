var ProductService = require('../service/product.service');

_this = this;

exports.createProduct = async function(req,res,next)
{
    var product={
        title : req.body.title,
        price: req.body.price,
        instock: req.body.instock,
        photo: req.body.photo,
        lastUpdated: new Date(),
        status: true
    }

    try {
        // Calling the Service function with the new object from the Request Body
        var createdProduct = await ProductService.createProduct(product);
        return res.status(201).json({status: 201, data: createdProduct, message: "Succesfully Created Product"});
    } catch (error) {
        return res.status(400).json({status: 400, message: "Product Creation was Unsuccesfull"})
    }
}


exports.getProduct = async function (req, res, next) {
    console.log('get Product');
    try {
        var product = await ProductService.getProduct();
        return res.status(200).json({status: 200, data: product, message: "Succesfully product Recieved"});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}