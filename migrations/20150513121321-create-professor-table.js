'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.createTable('Professors', {
      id : {
          type : Sequelize.INTEGER,
          allowNull : false,
          primaryKey : true,
          autoIncrement : true,
          field : 'id'
      },
      firstName : {
        type : Sequelize.STRING
      },
      lastName : {
        type : Sequelize.STRING
      },
      email : {
        type : Sequelize.STRING
      },
      password : {
        type : Sequelize.STRING
      },
      school : {
        type : Sequelize.INTEGER,
        references : 'Schools',
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

      return queryInterface.dropTable('Professors');

  }
};
