'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Products.init({
    title: DataTypes.STRING,
    rate: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    price: DataTypes.STRING,
    brand: DataTypes.STRING,
    detail_product: DataTypes.TEXT,
    colors: DataTypes.JSON,
    capacities: DataTypes.JSON,
    file: DataTypes.STRING,
    vote: DataTypes.INTEGER,
    testimonials: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};