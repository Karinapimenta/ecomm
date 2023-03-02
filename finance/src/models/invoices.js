const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Invoices extends Model {
    static associate(models) {
      Invoices.belongsTo(models.Payments, {
        foreignKey: 'paymentId',
      });
    }
  }
  Invoices.init({
    customerData: DataTypes.JSON,
    address: DataTypes.JSON,
    products: DataTypes.JSON,
  }, {
    sequelize,
    modelName: 'Invoices',
  });
  return Invoices;
};
