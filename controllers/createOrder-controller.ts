import { Request, Response } from "express";
import Pedido from "../Dto/OrderDto";
import OrderService from "../services/OrdersService";

const createOrder = async (req: Request, res: Response) => {
  try {
    const { usuario_id } = req.body;

    // Validar los datos
    if (!usuario_id) {
      return res.status(400).json({
        status: "Error",
        message: "usuario_id is required",
      });
    }

    // Llamar al servicio para crear el pedido
    const { id_pedido, total } = await OrderService.createOrder(usuario_id);

    // Crear DTO del pedido (fecha actual, estado por defecto)
    const nuevoPedido = new Pedido(usuario_id, total, "pendiente", new Date());
    nuevoPedido.id_pedidos = id_pedido;

    return res.status(201).json({
      status: "Success",
      message: "Order created successfully",
      data: nuevoPedido,
    });
  } catch (error: any) {
    return res.status(500).json({ status: "Error", message: error.message });
  }
};

export default createOrder;
