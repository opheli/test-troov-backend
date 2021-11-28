const userController = require('../controllers/userController');

module.exports = (server) => {
    server.post('/user/register', userController.userRegister);
    server.post('/user/login', userController.userLogin);
    server.get('/user/login', userController.userLogin);
}