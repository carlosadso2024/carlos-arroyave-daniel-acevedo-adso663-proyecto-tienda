import express from "express";
import productsController from '../controllers/products-controller';
import getProducts from "../controllers/getProducts-controller";
const router = express.Router();


router.post('/', productsController);
router.get('/', getProducts);

export default router