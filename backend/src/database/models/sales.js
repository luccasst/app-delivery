const { DataTypes } = require('sequelize')
/**
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sale', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },

    userId: {
      type: DataTypes.INTEGER,
      field: "user_id",
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      }
    },

    sellerId: {
      type: DataTypes.INTEGER,
      field: "seller_id",
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      }
    },

    totalPrice: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: false,
      field: "total_price",
    },

    deliveryAddress: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: "delivery_address",
    },

    deliveryNumber: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "delivery_number",
    },

    saleDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: "sale_date",
    },

    status: {
      type: DataTypes.STRING(50),
      defaultValue: "Pendente"
    },

  }, {
    tableName: 'sales',
    timestamps: false,
  });

  Sales.associate = ({User, SalesProduct, Sale}) => {
    Sales.belongsTo(User, { foreignKey: 'userId', as: 'user', through: Sale });
    Sales.belongsTo(User, { foreignKey: 'sellerId', as: 'seller', through: Sale });
    Sales.hasMany(SalesProduct, { foreignKey: "saleId", as: "products"})
  };

  return Sales;
};




