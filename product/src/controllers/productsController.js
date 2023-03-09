import Products from '../models/Product.js';
import DataCheck from '../datacheck/dataCheckProducts.js';

class ProductController {
  static getProducts = (req, res) => {
    Products.find((err, products) => {
      if (err) {
        res.status(404).send({ message: `${err.message} - No products found` });
      } else {
        res.status(200).json(products);
      }
    });
  };

  static getProductbyId = (req, res) => {
    const { id } = req.params;
    Products.findById(id, (err, products) => {
      if (err) {
        res.status(404).send({ message: `${err.message} - Product not found` });
      } else {
        res.status(200).send(products);
      }
    });
  };

  static saveProduct = (req, res) => {
    const product = new Products(req.body);
    product.save((err) => {
      if (err) {
        res.status(401).send({ message: `${err.message} - Access Denied` });
      } else {
        res.status(201).send(product.toJSON());
      }
    });
  };

  static updateProduct = (req, res) => {
    const { id } = req.params;
    const info = new Products(req.body);
    const flag = [];

    DataCheck.nameCheck(info.product, flag);
    DataCheck.slugCheck(info.slug, flag);
    DataCheck.priceCheck(info.pricePerUnit, flag);
    DataCheck.quantityCheck(info.quantityInStock, flag);
    let size = 0;
    if (Object.keys(req.body).length === 0) { size = 1; }
    Products.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err && size === 0 && flag.length === 0) {
        res.status(200).send({ message: 'Product updated successfully' });
      } else {
        res.status(404).send({ message: 'Product could NOT be updated due to invalid values' });
      }
    });
  };

  static deleteProduct = (req, res) => {
    const { id } = req.params;
    Products.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Product removed successfully' });
      } else {
        res.status(404).send({ message: err.message });
      }
    });
  };
}

export default ProductController;
