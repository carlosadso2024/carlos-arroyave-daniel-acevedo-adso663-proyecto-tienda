import { Request, Response } from "express";
import CartService from '../services/CarService';

let deleteProductFromCart = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // el id del producto se pasa por la URL

    // Llamar al servicio para eliminar el producto del carrito
    await CartService.delete(parseInt(id));

    return res.status(200).json({ status: 'delete ok' });
  } catch (error: any) {
    if (error.message.includes('does not exist')) {
      // Si el ID no existe en el carrito
      return res.status(404).json({ error: error.message });
    }

    // Otros errores
    return res.status(500).json({ error: 'An error occurred while deleting the product from the cart' });
  }
};

export default deleteProductFromCart;
