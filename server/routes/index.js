import user from './api/v1/user';
import express from 'express';
const router = express.Router();
router.use('/signup',user);

export default router;