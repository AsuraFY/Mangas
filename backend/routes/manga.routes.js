module.exports = app => {
    const mangas = require("../controllers/manga.controller.js");

    var router = require("express").Router();

    //Create a new manga
    router.post("/",mangas.create);

    //Retrieve all mangas
    router.get("/", mangas.findAll);

    //Retrieve a single manga with id
    router.get("/:id", mangas.findOne);

    //Update a manga with id
    router.put("/:id", mangas.update);

    //Delete a manga with id
    router.delete("/:id", mangas.delete);

    app.use('/api/mangas', router);
};
