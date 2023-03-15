//untuk menjalankan semua model yg ada pada project
const dbConfig = require('../config/db')
const Sequlize = require('sequelize')
const sequelize = new Sequlize(
    dbConfig.db,
    dbConfig.user,
    dbConfig.pass, {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        operatorAlias: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
        },
    },
)
const db = {}
db.Sequlize = Sequlize
db.sequelize = sequelize

db.quizzes = require('./quiz')(sequelize, Sequlize)
db.fsynonims = require('./synonim/factorsynonim')(sequelize, Sequlize)
db.jsynonims = require('./synonim/jenissynonim')(sequelize, Sequlize)
db.santonims = require('./antonim/sifatantonim')(sequelize, Sequlize)
db.jantonims = require('./antonim/jenisantonim')(sequelize, Sequlize)
db.kamussynos = require('./synonim/kamus')(sequelize, Sequlize)
db.kamusantos = require('./antonim/kamus')(sequelize, Sequlize)

module.exports = db