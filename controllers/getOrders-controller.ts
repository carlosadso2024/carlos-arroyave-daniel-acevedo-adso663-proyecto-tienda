import { Request, Response } from "express";
import OrderRepository from "../repositories/OrderRepository";


let getOrders = async (req: Request, res: Response) => {
    try {
      // Usamos el userId que viene del middleware verifyToken
      const userId = req.body.id;
  
      // Llamar al método get del repositorio pasando el userId para obtener los productos del carrito del usuario
      const order = await OrderRepository.get(userId);
  
  
      // Devolver los productos en la respuesta
      return res.status(200).json({
        status: 'Get Orders OK', 
        id: userId,
        order: order
      });
    } catch (error: any) {
      // Manejar errores y devolver un mensaje de error
      return res.status(500).json({ errorInfo: "An unknown error has occurred", error: error.message });
    }
  };
  
  export default getOrders;
  