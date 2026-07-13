const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const validate = require('../middleware/validate');

router.post('/api/auth/register', validate, authController.register);
router.post('/api/auth/login', validate, authController.login);
router.get('/api/auth/profile', authController.getProfile);
router.put('/api/auth/profile', authController.updateProfile);
router.post('/api/auth/logout', authController.logout);

module.exports = router;