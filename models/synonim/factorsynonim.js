module.exports = (sequelize, Sequelize) => {
    const FactorSynonim = sequelize.define('fsynonim', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        factorTime: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        factorPlace: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        factorFormal: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        facroeSocial: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        factorActvity: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        factorNuansa: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    })
    return FactorSynonim
}