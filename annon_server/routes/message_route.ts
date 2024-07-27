const {Router } = require('express');
const message_controller = require('../controllers/message_controller');

const router = new Router();
router.post('/conversation',  message_controller.createConversation);
router.get('/conversation',  message_controller.getConversation);


const conversation_endpoints = router;
export default conversation_endpoints;