'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.addColumn('Events', "images", { type: Sequelize.STRING(1000) });

  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.removeColumn('Events', 'images');
  }
};
