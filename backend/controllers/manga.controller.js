const db =require("../models");
const Manga = db.mangas;
const Op = db.Sequelize.Op;

//Create a new manga
exports.create = (req, res) => {
    //Validate request
    if(!req.body.name){
        res.status(400).send({
            message: "Content cannot be empty!"
        });
        return;
    }

    //Create a manga
    const manga = {
        name: req.body.name,
        year: req.body.year,
        
        episodes: req.body.episodes
    };

    //Save the manga in the database
    Manga.create(manga)
        .then(data =>{
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the manga."
            });
        });
};

//Retrieve all mangas from the databases
exports.findAll = (req, res) => {
    Manga.findAll()
    .then(data =>{
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving the bicycle."
        });
    });
};

//Find a single an id
exports.findOne = (req, res) => {
};

//Delete a managa with the specified id in the request
exports.delete = (req, res) => {
};

//update a manga
exports.update = (req, res) => {

};