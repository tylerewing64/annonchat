const { Router } = require('express');
const auth_controller = require('../controllers/auth_controller.js');

const router = Router();

router.post('/register', auth_controller.register);
router.post('/', auth_controller.login)


module.exports = router;