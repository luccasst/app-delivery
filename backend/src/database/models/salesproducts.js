const { DataTypes } = require('sequelize')
/**
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProduct', {
    saleId: {
      allowNull: false,
      field: "sale_id",
      primaryKey: true,
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: "sales",
        key: "id",
      }
    },
    productId: {
      allowNull: false,
      primaryKey: true,
      field: "product_id",
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: "products",
        key: "id",
      }
    },
    quantity: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },

  }, {
    tableName: 'sales_products',
    timestamps: false,
  });

  SalesProduct.associate = ({Sale, Product}) => {
    Sale.belongsToMany(Product, {
        through: SalesProduct,
        foreignKey: 'productId',
    });
    Product.belongsToMany(Sale, {
        through: SalesProduct,
        foreignKey: 'saleId',
    });
    
    SalesProduct.belongsTo(Product, { 
        foreignKey: 'productId', as: 'products'
    });
    SalesProduct.belongsTo(Sale, { 
        foreignKey: 'saleId', as: 'sale' 
    })
};
  return SalesProduct;
};




