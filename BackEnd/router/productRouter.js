import express from 'express';
import { addProduct } from '../controller/productController.js';
import verifyToken from '../middleware/middleware.js';

const router = express.Router();

router.post('/add', verifyToken, addProduct)

export default router;
