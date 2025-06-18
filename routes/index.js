const express = require('express');
const router = express.Router();
router.use(express.json());
const { login, register } = require('../controllers/authController');

router.use('/auth', login);
module.exports = router;