import express from 'express';
import productsId from '../controllers/productsId';
const router = express.Router();


router.get('/:id', productsId);


export default router;