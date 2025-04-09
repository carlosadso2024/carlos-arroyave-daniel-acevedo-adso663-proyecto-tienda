import express from "express";
import productsController from '../controllers/products-controller';
import getProducts from "../controllers/getProducts-controller";
import productsId from "../controllers/productsId-controller";
const router = express.Router();


router.post('/', productsController);
router.get('/', getProducts);
router.get('/:id', productsId);

export default router