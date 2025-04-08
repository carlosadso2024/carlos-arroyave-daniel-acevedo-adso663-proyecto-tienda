import db from "../config/config-db";
import Cart from "../Dto/CartDto";

class CartRepository {
    static async get() {
        const sql = 'SELECT * FROM carrito';
        return db.execute(sql);
    }
    
    static async addToCart(cart: Cart) {
        const sql = 'INSERT INTO carrito (usuario_id, producto_id, cantidad) VALUES (?, ?, ?)';
        const values = [cart.usuario_id, cart.producto_id, cart.cantidad];
        return db.execute(sql, values);
    }


}

export default CartRepository;