'use strict';

const express = require('express');
const router = express.Router();

const middlewares = require('../middlewares');
const UserController = require('../controllers/auth');


router.post('/login', UserController.login);
router.post('/register', UserController.register);
router.get('/me', middlewares.checkAuthentication, UserController.me);
router.get('/items/:name', UserController. findItemsByName, );
router.get('/items/:category', UserController.findItemsByCategory);
router.get('/logout', UserController.logout);

module.exports = router;
