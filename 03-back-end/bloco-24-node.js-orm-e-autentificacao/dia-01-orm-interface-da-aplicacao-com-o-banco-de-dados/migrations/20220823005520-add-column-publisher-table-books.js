'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Books', 'publisher', {
      type: Sequelize.STRING,
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.removeColumn('Books', 'publisher');
  },
};
