'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Student-Participant',{
        student_id : {
            type : Sequelize.INTEGER,
            references : 'Students',
            referencesKey : 'id'
        },
        event_id : {
            type : Sequelize.INTEGER,
            references : 'Events',
            referencesKey : 'id'
        }
    }, {
        freezeTableName : true
    });
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.dropTable('Student-Participant');

  }
};
