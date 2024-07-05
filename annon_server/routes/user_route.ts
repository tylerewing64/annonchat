const { Router } = require('express');
const auth_controller = require('../controllers/auth_controller.js');

const router = Router();

router.post('/user', auth_controller.register); //Creates New User
router.get('/user', auth_controller.login) //Verifies user and returns JWT Token


export default  router;