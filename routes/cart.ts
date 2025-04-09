import express from "express";
import cartController from '../controllers/cart-controller';
import getCart from "../controllers/getCart-controller";
import verifyToken from "../middleware/VerifyToken";
const router = express.Router();

router.post('/', verifyToken, cartController);
router.get('/', verifyToken, getCart);

export default router