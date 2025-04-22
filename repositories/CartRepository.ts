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
     // Buscar un producto en el carrito por su id
     static async findById(id: number) {
        const sql = 'SELECT * FROM carrito WHERE producto_id = ?';
        const [rows]: any = await db.execute(sql, [id]);
        return rows.length > 0 ? rows[0] : null; // Si el producto existe, retorna el primer resultado, sino retorna null
    }

    // Eliminar un producto del carrito por su id
    
    static async delete(id: number) {
        const sql = 'DELETE FROM carrito WHERE producto_id = ?';
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

export default CartRepository;
