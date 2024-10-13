import express from 'express';
import { login, fetchUsers } from '../controller/adminController.js';
import verifyToken from '../middleware/middleware.js';
const router = express.Router();

router.post('/admin_login', login);
router.get('/get_users', verifyToken,fetchUsers);

export default router;