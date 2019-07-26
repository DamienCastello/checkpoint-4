'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    status: DataTypes.STRING,
  }, {});
  Cart.associate = function(models) {
    // associations are defined here
    Cart.belongsToMany(models.Ticket, { foreignKey: 'cartId', through: 'ticketsCarts', as: 'tickets' })
  };
  return Cart;
};