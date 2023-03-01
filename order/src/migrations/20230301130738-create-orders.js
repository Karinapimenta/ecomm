'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customerId: {
        type: Sequelize.STRING
      },
      customerName: {
        type: Sequelize.STRING
      },
      customerCpf: {
        type: Sequelize.STRING
      },
      deliveryAddress: {
        type: Sequelize.JSON
      },
      orderItems: {
        type: Sequelize.JSON
      },
      status: {
        type: Sequelize.STRING
      },
      links: {
        type: Sequelize.JSON
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};