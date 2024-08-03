'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add the `createdAt` column
    await queryInterface.addColumn('messages', 'createdAt', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    });

    // Add the `updatedAt` column
    await queryInterface.addColumn('messages', 'updatedAt', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the `createdAt` column
    await queryInterface.removeColumn('messages', 'createdAt');

    // Remove the `updatedAt` column
    await queryInterface.removeColumn('messages', 'updatedAt');
  }
};