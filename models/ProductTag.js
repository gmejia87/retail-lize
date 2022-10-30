const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init(
  // define columns
  {
    //id column (integer, not null, primary key, auto increment)
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //product_id column (integer, references `product` model's `id`)
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "product",
        key: "id",
      },
    },
    //tag_id column (integer, references `tag` model's `id`)
    tag_id: {
      type: DataTypes.INTEGER,
      references: "tag",
      key: "id",
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;
