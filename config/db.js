//koneksi ke database
module.exports = {
    host: 'localhost',
    user: 'root',
    pass: '',
    db: 'synona-api',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
}