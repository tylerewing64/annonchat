const { Router } = require('express');
const user_controller = require('../controllers/user_controller.ts');

const router = Router();

router.post('/user', user_controller.register); //Creates New User

router.get('/user', user_controller.login) //Logs user in and creates JSON Web Token 

export default router;