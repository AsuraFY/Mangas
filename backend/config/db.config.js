module.exports = {
    HOST:"localhost",
    USER: "nice",
    PASSWORD: "nice",
    DB: "db_mangas",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}