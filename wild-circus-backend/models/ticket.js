'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    rate: DataTypes.STRING,
    price: DataTypes.INTEGER,
    showId: DataTypes.INTEGER
  }, {});
  Ticket.associate = function(models) {
    // associations are defined here
    Ticket.belongsToMany(models.Cart, { foreignKey: 'ticketId', through: 'ticketsCarts', as: 'carts' })
    Ticket.belongsTo(models.Show, { as: 'shows' });
  };
  return Ticket;
};