const { DataTypes } = require('sequelize')
    /**
     * @param {import('sequelize').Sequelize} Sequelize
     * @param {import('sequelize').DataTypes} DataTypes
     */
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: true
    },

  }, 
  {
    tableName: 'users',
    timestamps: false,
  });
  Users.associate = (models) => {
    Users.hasMany(models.Sale, { foreignKey: 'user_id', as: 'user' })
    Users.hasMany(models.Sale, { foreignKey: 'seller_id', as: 'seller' })
  };
  return Users;
};

