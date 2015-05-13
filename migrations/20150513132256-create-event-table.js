'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.createTable('Events',{
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
          description : {
              type : Sequelize.STRING
          },
          grade : {
              type : Sequelize.ENUM('K-6', '7-9', '10-12', 'K-9', 'K-12', '7-12')
          },
          school : {
              type : Sequelize.INTEGER,
              references : 'Schools',
              referencesKey : 'id'
          },
          location : {
              type : Sequelize.STRING
          },
          date : {
              type : Sequelize.DATE
          },
          createdAt : {
              type : Sequelize.DATE,
              allowNull : false
          },
          updatedAt : {
              type : Sequelize.DATE,
              allowNull : false
          },
          requirements : {
              type : Sequelize.STRING
          }
      }, {
          freezeTableName : true
      })
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.dropTable('Events');

  }
};
