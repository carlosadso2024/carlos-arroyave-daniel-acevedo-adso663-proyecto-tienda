import { Request, Response } from "express";
import CartRepository from "../repositories/CartRepository";

let getCart = async (req: Request, res: Response) => {
  try {
    // Usamos el userId que viene del middleware verifyToken
    const userId = req.body.id;

    // Llamar al método get del repositorio pasando el userId para obtener los productos del carrito del usuario
    const cart = await CartRepository.get(userId);


    // Devolver los productos en la respuesta
    return res.status(200).json({
      status: 'Get cart OK', 
      id: userId,
      cart: cart 
    });
  } catch (error: any) {
    // Manejar errores y devolver un mensaje de error
    return res.status(500).json({ errorInfo: "An unknown error has occurred", error: error.message });
  }
};

export default getCart;
