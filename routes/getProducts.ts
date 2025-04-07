import express from 'express';
import getProducts from '../controllers/getProducts-controller';
const router = express.Router();


router.get('/', getProducts);


export default router;