const { DataTypes } = require('sequelize')
    /**
     * @param {import('sequelize').Sequelize} Sequelize
     * @param {import('sequelize').DataTypes} DataTypes
     */
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Product', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL(4,2)
    },
    url_image: {
      allowNull: false,
      type: DataTypes.STRING(200)
    }
  }, 
  {
    tableName: 'products',
    timestamps: false,
  });
  // Products.associate = (models) => {
      
  //   };
    return Products;
  };