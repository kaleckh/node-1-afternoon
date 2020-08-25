const products = require('../products.json');

const getProduct = (req, res) => {
    var result;
    var id = req.params.id;
    for (let index = 0; index < products.length; index++) {
        const product = products[index];

        if (product.id === parseInt(id)) {
            result = product
        }

    }

    res.status(200).send(result);
}


module.exports = getProduct;