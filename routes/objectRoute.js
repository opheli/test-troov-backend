const objectController = require('../controllers/objectController');

module.exports = (server) => {
    server.route('/posts/:id_post/objects')
        .get(objectController.listAllObjects)
        .post(objectController.createAObject);

    server.route('/objects/:id_object')
        .get(objectController.getAObject)
        .put(objectController.updateAObject)
        .delete(objectController.deleteAObject);
}