import express from 'express';
import productsId from '../controllers/getProducts-controller';
const router = express.Router();


router.get('/:id', productsId);


export default router;