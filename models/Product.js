// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    //id column (integer, not null, primary key, auto increment)
    //product_name column (string, not null)
    //price column (decimal, not null, validates as decimal)
    //stock column (integer, not null, set value 10, validates numeric value)
    //category_id column (integer, references `category` model's `id`)
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
