const express = require('express');
const {login,signup} = require('../controller/userController');
const validate = require('../middleware/validate');
const router = express.Router();

router.post('/login',login);
router.post('/signup',validate,signup);

module.exports=router;