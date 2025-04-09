import db from "../config/config-db";
import Cart from "../Dto/CartDto";

class CartRepository {
    // Modificado: Filtrar por usuario_id para que solo obtengas el carrito de ese usuario
    static async get(userId: number) {
        const sql = 'SELECT * FROM carrito WHERE usuario_id = ?';
        const [cart] = await db.execute(sql, [userId]);  // Pasamos el userId como parámetro
        return cart;
    }

    // Método para agregar productos al carrito
    static async addToCart(cart: Cart) {
        const sql = 'INSERT INTO carrito (usuario_id, producto_id, cantidad) VALUES (?, ?, ?)';
        const values = [cart.usuario_id, cart.producto_id, cart.cantidad];
        const [result] = await db.execute(sql, values);  // Ejecuatamos la inserción
        return result;  // Retornamos el resultado (insertId, affectedRows, etc.)
    }
}

export default CartRepository;
