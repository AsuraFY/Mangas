//Importation de package express
const express = require("express");

//definir la constant app qui nous permet d'utiliser express
const app = express();

//acces a la bibliotheque application/json
app.use(express.json());
//acces a la bibliotheque application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

//initialise sequelize line 13-20
const db = require("./models");
//normal use , doesn't delete the database data
//db.sequelize.sync ();

//In developpement, you may need to drop existing tables and re-sync database
db.Sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

//definir une route simple qui retourne un msg en format JSON
// ET ecoute sur http://localhost:8080/
app.get("/", (req, res) => {
    res.json({ message: "Welcome to mangas application."});
});

//importation des routes dans index.js
require("./routes/manga.routes")(app);

//definir le port 8080 qui ecoutera les requetes
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('Server is running on port §{PORT}.');
});
