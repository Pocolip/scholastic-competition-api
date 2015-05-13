'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.createTable('Student-Winner',{
          id : {
              type : Sequelize.INTEGER,
              allowNull : false,
              primaryKey : true,
              autoIncrement : true,
              field : 'id'
          },
          StudentId : {
              type : Sequelize.INTEGER,
              references : 'Students',
              referencesKey : 'id'
          },
          EventId : {
              type : Sequelize.INTEGER,
              references : 'Events',
              referencesKey : 'id'
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
      return queryInterface.dropTable('Student-Winner');

  }
};
