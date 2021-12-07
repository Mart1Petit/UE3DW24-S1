const models = require('../models');

module.exports = {
    getAllUsers:function(req, res){
        models.User.findAll(   
        ).then(function(user) {
            res.status(201).json(user)
        })
    },
    
    getOneUser:function(req, res){
        models.User.findByPk(req.params.id
        ).then(function(user) {
            res.status(200).json(user.id)
        })
    },
};