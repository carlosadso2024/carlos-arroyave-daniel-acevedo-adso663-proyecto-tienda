import express from 'express';
import getCart from '../controllers/getCart-controller';
import verifyToken from '../middleware/VerifyToken';
const router = express.Router();


router.get('/', verifyToken, getCart);


export default router;