const Shape = require('../models/shape.model.js');

// Create and Save a new Note
exports.create = (req, res) => {

    // Validate request
    if(!req.body.type) {
        return res.status(400).send({
            message: "Type can not be empty"
        });
    }

    // Create a Note
    const shape = new Shape({
        title: req.body.name || "Unnamed shape", 
        type: req.body.type,
        radius: req.body.radius,
        quadrant: req.body.quadrant,
        widthSize: req.body.widthSize,
        heightSize: req.body.heightSize,
        orientation: req.body.orientation,
        xpoints: req.body.xpoints,
        ypoints: req.body.ypoints
    });

    // Save Note in the database
    shape.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Shape.find()
    .then(shapes => {
        res.send(shapes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    Shape.findById(req.params.shapeId)
    .then(shape => {
        if(!shape) {
            return res.status(404).send({
                message: "Shape not found with id " + req.params.shapeId
            });            
        }
        res.send(shape);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Shape not found with id " + req.params.shapeId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving shape with id " + req.params.shapeId
        });
    });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};