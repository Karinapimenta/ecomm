import Categories from '../models/Category.js';
import DataCheck from '../datacheck/dataCheckCategories.js';

class CategoryController {
  static getCategories = (req, res) => {
    Categories.find((err, categories) => {
      if (err) {
        res.status(404).send({ message: `${err.message} - No category found` });
      } else {
        res.status(200).json(categories);
      }
    });
  };

  static getCategoryById = (req, res) => {
    const { id } = req.params;
    Categories.findById(id, (err, categories) => {
      if (err) {
        res.status(404).send({ message: `${err.message} - Category not found` });
      } else {
        res.status(200).send(categories);
      }
    });
  };

  static saveCategory = (req, res) => {
    const category = new Categories(req.body);
    category.save((err) => {
      if (err) {
        res.status(401).send({ message: `${err.message} - Access Denied` });
      } else {
        res.status(201).send(category.toJSON());
      }
    });
  };

  static updateCategory = (req, res) => {
    const { id } = req.params;
    const info = new Categories(req.body);
    const flag = [];

    DataCheck.nameCheck(info.name, flag);
    DataCheck.statusCheck(info.status, flag);
    let size = 0;

    if (Object.keys(req.body).length === 0) { size = 1; }
    Categories.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err && size === 0 && flag.length === 0) {
        res.status(200).send({ message: 'Category updated successfully' });
      } else {
        res.status(404).send({ message: 'Category could NOT be updated due to invalid values' });
      }
    });
  };

  static deleteCategory = (req, res) => {
    const { id } = req.params;
    Categories.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Category removed successfully' });
      } else {
        res.status(404).send({ message: err.message });
      }
    });
  };

  static activateCategory = (req, res) => {
    const { id } = req.params;
    Categories.findByIdAndUpdate(id, { $set: { status: true } }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Category activated successfully' });
      } else {
        res.status(404).send({ message: err.message });
      }
    });
  };
}

export default CategoryController;
