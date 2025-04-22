import express from "express";
import cartController from '../controllers/cart-controller';
import getCart from "../controllers/getCart-controller";
import verifyToken from "../middleware/VerifyToken";
import deleteProductFromCart from "../controllers/deleteProductFromCart-controller";
const router = express.Router();

router.post('/', verifyToken, cartController);
router.get('/', verifyToken, getCart);
router.delete('/:id', verifyToken, deleteProductFromCart);

export default router