import express from "express";
import updateController from '../controllers/update-controller';
const router = express.Router();

router.patch('/:id', updateController);

export default router;