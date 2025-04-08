import express from 'express';
import getCart from '../controllers/getCart-controller';
const router = express.Router();


router.get('/', getCart);


export default router;