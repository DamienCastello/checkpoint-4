'use strict';
module.exports = (sequelize, DataTypes) => {
  const Show = sequelize.define('Show', {
    showDate: DataTypes.DATEONLY
  }, {});
  Show.associate = function(models) {
    // associations are defined here
    Show.hasMany(models.Ticket, { as: 'tickets' });
  };
  return Show;
};