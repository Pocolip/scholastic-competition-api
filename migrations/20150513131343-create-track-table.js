'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Tracks', {
        id : {
            type : Sequelize.INTEGER,
            allowNull : false,
            primaryKey : true,
            autoIncrement : true,
            field : 'id'
        },
        name : {
            type : Sequelize.STRING
        },
        createdAt : {
            type : Sequelize.DATE,
            allowNull : false
        },
        updatedAt : {
            type : Sequelize.DATE,
            allowNull : false
        }
        }, {
          freezeTableName : true
      });
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.dropTable('Schools');
  }
};
