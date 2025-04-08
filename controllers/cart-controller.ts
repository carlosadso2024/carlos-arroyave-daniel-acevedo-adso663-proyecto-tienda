import { Request, Response } from "express";
import CartService from "../services/CarService";
import Cart from "../Dto/CartDto";

const addToCart = async (req: Request, res: Response) => {
    try {
        const { usuario_id, producto_id, cantidad } = req.body;

        // Validar los datos
        if (!usuario_id || !producto_id || !cantidad) {
            return res.status(400).json({ status: "Error", message: "usuario_id, producto_id, and cantidad are required" });
        }

        // Llamar al servicio para agregar el producto al carrito
        const registerCart = await CartService.addToCart(new Cart(usuario_id, producto_id, cantidad));

        // Responder con éxito
        return res.status(201).json({ status: "Success", message: "Product added to cart" });
    } catch (error: any) {
        return res.status(500).json({ status: "Error", message: error.message });
    }
};

export default addToCart;