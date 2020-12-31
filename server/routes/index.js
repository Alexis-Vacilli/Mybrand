import userRoutes from './api/v1/user';
import express from 'express';
const router = express.Router();
router.use("/",userRoutes);

export default router;