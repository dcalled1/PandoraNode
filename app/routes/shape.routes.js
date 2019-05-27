module.exports = (app) => {
    const shapes = require('../controllers/shape.controller.js');

    // Create a new Note
    app.post('/shapes', shapes.create);

    // Retrieve all Notes
    app.get('/shapes', shapes.findAll);

    // Retrieve a single Note with noteId
    app.get('/shapes/:shapeId', shapes.findOne);

    // Update a Note with noteId
    app.put('/shapes/:shapeId', shapes.update);

    // Delete a Note with noteId
    app.delete('/shapes/:shapeId', shapes.delete);
}