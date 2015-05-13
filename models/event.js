module.exports = function(sequelize, DataTypes) {
    var Event =  sequelize.define('Events', {
        id : {
            type : DataTypes.INTEGER,
            allowNull : false,
            primaryKey : true,
            autoIncrement : true
        },
        name : {
            type : DataTypes.STRING
        },
        description : {
            type : DataTypes.STRING
        },
        grade : {
            type : DataTypes.ENUM('K-6', '7-9', '10-12', 'K-9', 'K-12', '7-12')
        },
        location : {
            type : Sequelize.STRING
        },
        date : {
            type : Sequelize.DATE
        },
        requirements : {
            type : Sequelize.STRING
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

    return Event;
};