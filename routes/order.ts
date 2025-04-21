import express from "express";
import createOrderController from '../controllers/createOrder-controller';
import verifyToken from "../middleware/VerifyToken";
import getOrders from "../controllers/getOrders-controller";
const router = express.Router();


router.post('/', verifyToken, createOrderController);
router.get('/', verifyToken, getOrders)


export default router;