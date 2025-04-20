import OrderRepository from "../repositories/OrderRepository";

class OrderService {
  static async createOrder(usuario_id: number) {
    // 1. Calcular total desde el carrito
    const total = await OrderRepository.calculateTotalFromCart(usuario_id);

    if (total === 0) {
      throw new Error("El carrito está vacío");
    }

    // 2. Crear el pedido
    const id_pedido = await OrderRepository.insertOrder(usuario_id, total);

    // 3. (Opcional) Vaciar el carrito después de crear el pedido
    await OrderRepository.clearCart(usuario_id);

    return { id_pedido, total };
  }
}

export default OrderService;
