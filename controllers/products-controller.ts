import { Request, Response } from "express";
import Products from "../Dto/ProductsDto";
import ProductService from "../services/ProductService";


let products = async (req: Request, res: Response) => {
  try {
    const {
      nombre,
      descripcion,
      precio,
      stock,
      categoria,
    } = req.body;

    const registerProduct = await ProductService.register(new Products(nombre, descripcion, precio, stock, categoria))
    return res.status(201).json(
      { status: 'register product ok' }
    );
    
  } catch (error: any) {
    console.error("Error en la API:", error);
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage }
      );
    }
  }
}


export default products;