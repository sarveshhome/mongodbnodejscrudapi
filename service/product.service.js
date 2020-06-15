var Product = require('../model/product.model');
_this = this;

exports.createProduct  = async function(product){
    var newProduct = new Product({
        title : product.name,
        price: product.price,
        instock : product.instock ,
        photo  : product.photo,        
        lastUpdated : new Date(),
        status: true
    });

    try
    {
        console.log('Before save : ');
        console.log(newProduct);
        var saveProduct = await newProduct.save();
        return saveProduct;
    }
    catch(e)
    {
        throw Error("Error during creating Product");
    }

}

exports.getProduct = async function () {
    try {
        var product = await Product.find();
        return product;
    } catch (e) {
        throw Error("Error during Get Product");
    }
}