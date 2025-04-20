import express from "express";
import createOrderController from '../controllers/createOrder-controller';
import verifyToken from "../middleware/VerifyToken";
const router = express.Router();


router.post('/', verifyToken, createOrderController);


export default router;