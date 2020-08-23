'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      rate: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.STRING
      },
      brand: {
        type: Sequelize.STRING
      },
      detail_product: {
        type: Sequelize.TEXT
      },
      colors: {
        type: Sequelize.JSON
      },
      capacities: {
        type: Sequelize.JSON
      },
      file: {
        type: Sequelize.STRING
      },
      vote: {
        type: Sequelize.INTEGER
      },
      testimonials: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};