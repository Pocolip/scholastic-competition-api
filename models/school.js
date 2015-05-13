/**
 * Created by cesarcruz on 5/13/15.
 */

module.exports = function(sequelize, DataTypes) {
    var School =  sequelize.define('School', {
        id : {
            type : DataTypes.INTEGER,
            allowNull : false,
            primaryKey : true,
            autoIncrement : true
        },
        name : {
            type : DataTypes.STRING
        },
        address1 : {
            type : DataTypes.STRING
        },
        address2 : {
            type : DataTypes.STRING
        },
        zipcode : {
            type : DataTypes.STRING
        },
        city : {
            type : DataTypes.STRING
        },
        grade : {
            type : DataTypes.ENUM('K-6', '7-9', '10-12', 'K-9', 'K-12', '7-12')
        },
        phone : {
            type : DataTypes.STRING
        },
        createdAt : {
            type : DataTypes.DATE
        },
        updatedAt : {
            type : DataTypes.DATE
        }
    }, {
        timestamps: true
    });

    return School;
};