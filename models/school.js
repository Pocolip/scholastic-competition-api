/**
 * Created by cesarcruz on 5/13/15.
 */

module.exports = function(sequelize, DataTypes) {
    var Professor =  sequelize.define('Professor', {
        id : {
            type : DataTypes.INTEGER,
            allowNull : false,
            primaryKey : true,
            autoIncrement : true
        },
        firstName : {
            type : DataTypes.STRING
        },
        lastName : {
            type : DataTypes.STRING
        },
        email : {
            type : DataTypes.STRING
        },
        password : {
            type : DataTypes.STRING
        },
        school : {
            type : DataTypes.INTEGER,
            references : 'Schools',
            referencesKey : 'id'
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

    return Professor;
};