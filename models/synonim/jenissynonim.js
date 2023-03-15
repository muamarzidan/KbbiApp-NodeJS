module.exports = (sequelize, Sequelize) => {
    const JenisSynonim = sequelize.define('jsynonim', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        synonimMutlak: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        synonimSemirip: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        synonimSelingkung: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    })
    return JenisSynonim
}