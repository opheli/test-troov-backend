const Object = require('../models/objectModel');

exports.listAllObjects = (req, res) => {
    Object.find({id_post: req.params.id_post}, (error, objects) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            });
        } else {
            res.status(200);
            res.json(objects);
        }
    });
}

exports.createAObject = (req, res) => {
    let newObject = new Object(req.body);
    newObject.id_post = req.params.id_post;


    newObject.save((error, object) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            });
        } else {
            res.status(201);
            res.json(object);
        }
    });
}

exports.getAObject = (req, res) => {
    Object.findById(req.params.id_object, (error, object) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            });
        } else {
            res.status(200);
            res.json(object);
        }
    })
}

exports.updateAObject = (req, res) => {
    Object.findByIdAndUpdate(req.params.id_object, req.body, {
        new: true
    }, (error, object) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            });
        } else {
            res.status(200);
            res.json(object);
        }
    })
}

exports.deleteAObject = (req, res) => {
    Object.findByIdAndDelete(req.params.id_object, (error) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            });
        } else {
            res.status(200);
            res.json({
                message: "Objet supprimé"
            });
        }
    });
}