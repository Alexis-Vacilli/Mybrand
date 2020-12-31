import express from 'express';
import userSignUp from '../../../controllers/user';
const router = express.Router();
require ('dotenv').config();


router.post('/', userSignUp);
module.exports = router;