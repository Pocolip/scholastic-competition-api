module.exports = function(sequelize, DataTypes) {
    var Student_Participant =  sequelize.define('Student-Participant', {
        id : {
            type : DataTypes.INTEGER,
            allowNull : false,
            primaryKey : true,
            autoIncrement : true
        },
        StudentId : {
            type : DataTypes.INTEGER
        },
        EventId : {
            type : DataTypes.INTEGER
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

    return Student_Participant;
};