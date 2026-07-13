const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
const authenticate = require('../middleware/auth');

router.get('/api/cash-register', authenticate, controller.getAll);
router.post('/api/cash-register', authenticate, controller.create);
router.get('/api/cash-register/:id', authenticate, controller.getOne);
router.put('/api/cash-register/:id', authenticate, controller.update);
router.delete('/api/cash-register/:id', authenticate, controller.remove);

router.get('/api/medicines', authenticate, controller.getAll);
router.post('/api/medicines', authenticate, controller.create);
router.get('/api/medicines/:id', authenticate, controller.getOne);
router.put('/api/medicines/:id', authenticate, controller.update);
router.delete('/api/medicines/:id', authenticate, controller.remove);

router.get('/api/sales', authenticate, controller.getAll);
router.post('/api/sales', authenticate, controller.create);
router.get('/api/sales/:id', authenticate, controller.getOne);
router.put('/api/sales/:id', authenticate, controller.update);
router.delete('/api/sales/:id', authenticate, controller.remove);

module.exports = router;