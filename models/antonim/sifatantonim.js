module.exports = (sequelize, Sequelize) => {
    const SifatAntonim = sequelize.define('santonim', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        oposisiMajemuk: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        opsisiKembar: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        oposisiGradual: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        oposisiInversi: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        oposisiHirarkis: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        oposisiRelasional: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    })
    return SifatAntonim
}