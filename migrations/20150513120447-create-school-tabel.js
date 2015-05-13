'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Schools', {
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
            address1 : {
                type : Sequelize.STRING
            },
            address2 : {
                type : Sequelize.STRING
            },
            zipcode : {
                type : Sequelize.STRING
            },
            city : {
                type : Sequelize.STRING
            },
            grade : {
                type : Sequelize.ENUM('K-6', '7-9', '10-12', 'K-9', 'K-12', '7-12')
            },
            phone : {
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
