import express from 'express';
import loggingUser from '../../../controllers/userlogin';
const router = express.Router();
require ('dotenv').config();


router.post('/login', loggingUser);
module.exports = router;