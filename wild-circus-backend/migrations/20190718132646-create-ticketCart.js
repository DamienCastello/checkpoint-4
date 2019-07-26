'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TicketsCarts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cartId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Carts',
          foreignKey: 'id'
        }
      },
      ticketId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tickets',
          foreignKey: 'id'
        }
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('TicketsCarts');
  }
};