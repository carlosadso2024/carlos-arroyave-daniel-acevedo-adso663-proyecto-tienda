import express from 'express';
import deleteController from '../controllers/delete-controller';

const router = express.Router();


router.delete('/:id', deleteController);


export default router;