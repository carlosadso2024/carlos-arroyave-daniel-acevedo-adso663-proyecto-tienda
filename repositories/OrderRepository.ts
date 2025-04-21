import db from "../config/config-db"; // tu conexión MySQL

class OrderRepository {
  static async calculateTotalFromCart(usuario_id: number): Promise<number> {
    const [rows]: any = await db.execute(
      `
      SELECT SUM(p.precio * c.cantidad) AS total
      FROM carrito c
      JOIN productos p ON c.producto_id = p.id_prod
      WHERE c.usuario_id = ?
      `,
      [usuario_id]
    );

    return rows[0]?.total || 0;
  }

  static async insertOrder(usuario_id: number, total: number): Promise<number> {
    const [result]: any = await db.execute(
      `
      INSERT INTO pedidos (usuario_id, total, estado)
      VALUES (?, ?, 'pendiente')
      `,
      [usuario_id, total]
    );

    return result.insertId;
  }

  static async clearCart(usuario_id: number): Promise<void> {
    await db.execute(
      `
      DELETE FROM carrito WHERE usuario_id = ?
      `,
      [usuario_id]
    );
  }
  
  static async get(userId: number) {
    const sql = 'SELECT * FROM pedidos WHERE usuario_id = ?';
    const [order] = await db.execute(sql, [userId]);  // Pasamos el userId como parámetro
    return order;
  }
  

}



export default OrderRepository;
