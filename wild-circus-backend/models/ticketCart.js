'use strict';
module.exports = (sequelize, DataTypes) => {
  const TicketCart = sequelize.define('TicketCart', {
    cartId: DataTypes.INTEGER,
    ticketId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  TicketCart.associate = function(models) {
    // associations are defined here
    TicketCart.hasMany(models.Ticket, { as: 'tickets' });
    TicketCart.hasMany(models.Cart, { as: 'carts' });
  };
  return TicketCart;
};