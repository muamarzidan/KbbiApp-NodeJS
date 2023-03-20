module.exports = (sequelize, Sequelize) =>{
    const homeSyninonim = sequelize.define('homesynonim', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        para1: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        para2: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        para3: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    })
    return homeSyninonim;
}