const express = require('express');
const usersCtrl = require('../controllers/usersCtrl');

exports.router = (function() {
    const apiRouter = express.Router();
    apiRouter.route('/users').get(usersCtrl.getAllUsers);
    apiRouter.route('/users/:id/').get(usersCtrl.getOneUser);
    return apiRouter;
})();