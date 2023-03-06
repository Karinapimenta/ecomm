const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
  }
  Orders.init({
    customerId: DataTypes.STRING,
    customerName: DataTypes.STRING,
    customerCpf: DataTypes.STRING,
    deliveryAddress: DataTypes.JSON,
    orderItems: DataTypes.JSON,
    status: DataTypes.STRING,
    links: DataTypes.JSON,
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};
