'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: DataTypes.STRING,
    cartId: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations are defined here
    User.belongsTo(models.Cart, { as: 'cart' });
  };
  return User;
};