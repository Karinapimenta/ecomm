'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Payments', [
    {
      value: 807.00,
      name: "Martin Baba",
      number: 4770439826908345,
      expirationDate:"2026-04",
      cvv:240,
      status:"CONFIRMADO",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      value: 796.00,
      name: "Martha Gordon",
      number: 4220611464873223,
      expirationDate:"2024-04",
      cvv:756,
      status:"CANCELADO",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      value: 560.00,
      name: "Nicolai Napolitano",
      number: 4118332728723600,
      expirationDate:"2030-01",
      cvv:121,
      status:"CRIADO",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      value: 760.00,
      name: "Herbert Hansson",
      number: 4461936198926411,
      expirationDate:"2024-11",
      cvv:134,
      status:"CRIADO",
      createdAt:new Date(),
      updatedAt:new Date()
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
