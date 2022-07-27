const express = require('express');
const router = new express.Router();
const controllerUser = require('../controllers/user');

router.post('/create',controllerUser.createUser);
router.get('/getuser',controllerUser.getUser);
router.delete('/deleteuser',controllerUser.deleteUser);

module.exports = router;