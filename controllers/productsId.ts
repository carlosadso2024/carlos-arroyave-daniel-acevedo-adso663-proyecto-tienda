import { Request, Response } from "express";
import ProductRepository from "../repositories/ProductRepository";

let productsId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await ProductRepository.getById(Number(id)) as any;
    const product = result[0][0];

    if (!product) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }

    return res.status(200).json({
      status: 'Producto encontrado',
      product: product
    });
  } catch (error: any) {
    return res.status(500).json({
      errorInfo: "Error",
      error: error.message
    });
  }
};

export default productsId;
