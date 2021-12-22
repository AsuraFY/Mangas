module.exports = (sequelize, Sequelize) => {
    const Manga = sequelize.define("manga", {
        name: {
            type: Sequelize.STRING
        },
        year: {
            type: Sequelize.STRING
        },
    
        episodes: {
            type: Sequelize.STRING
        }
    });

    return Manga;
}