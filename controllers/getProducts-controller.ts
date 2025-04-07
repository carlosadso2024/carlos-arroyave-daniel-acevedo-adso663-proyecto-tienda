import { Request, Response } from "express";
import ProductRepository from "../repositories/ProductRepository";

let getProducts = async (req: Request, res: Response) => {
  try {    
    // Llamar al método get del repositorio para obtener todos los productos
    const products = await ProductRepository.get();

    // Devolver los productos en la respuesta
    return res.status(200).json({
      status: 'Get products OK',
      products: products[0] // Los resultados suelen estar en la primera posición del array
    });
  } catch (error: any) {
    // Manejar errores y devolver un mensaje de error
    return res.status(500).json({ errorInfo: "An unknown error has occurred", error: error.message });
  }
};

export default getProducts;