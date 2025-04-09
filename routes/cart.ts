import express from "express";
import cartController from '../controllers/cart-controller';
import verifyToken from "../middleware/VerifyToken";
const router = express.Router();

router.post('/', verifyToken, cartController);


export default router