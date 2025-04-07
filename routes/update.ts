import express from "express";
import updateController from '../controllers/update-controller';
import verifyToken from '../middleware/VerifyToken';
const router = express.Router();

router.patch('/:id', verifyToken, updateController);

export default router;