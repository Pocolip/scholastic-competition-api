module.exports = function(sequelize, DataTypes) {
    var Student_Winner =  sequelize.define('Student-Winner', {
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

    return Student_Winner;
};