import db from '../config/config-db';
import Products from '../Dto/ProductsDto';



class ProductRepository {

    static async add(product: Products){
        const sql = 'INSERT INTO productos (nombre, descripcion, precio, stock, categoria) VALUES (?, ?, ?, ?, ?)';
        const values = [product.nombre, product.descripcion, product.precio, product.stock, product.categoria];
        return db.execute(sql, values);
    }

    static async get() {
        // Consulta para obtener todos los productos
        const sql = 'SELECT * FROM productos';
        
        // Ejecutar la consulta y devolver los resultados
        return db.execute(sql);
    }
    
    static async update(product: Products, id: number){
      const checkSql = 'SELECT id FROM products WHERE id = ?';
      const checkResult: any = await db.execute(checkSql, [id]);

       if (checkResult[0].length === 0) {
        // Si no existe, lanzar un error o devolver un mensaje
        throw new Error(`product with id ${id} does not exist`);
       }
        const sql = 'UPDATE productos SET nombre=?, descripcion=?, precio=?, stock=?, categoria=? WHERE id=?';
        const values = [product.nombre, product.descripcion, product.precio, product.stock, product.categoria, id];
        return db.execute(sql, values);
    }

    static async delete(id: number){
      const checkSql = 'SELECT id FROM productos WHERE id = ?';
      const checkResult: any = await db.execute(checkSql, [id]);

       if (checkResult[0].length === 0) {
        // Si no existe, lanzar un error o devolver un mensaje
        throw new Error(`product with id ${id} does not exist`);
       }
        const sql = 'DELETE FROM productos WHERE id=?';
        const values = [id];
        return db.execute(sql, values);
    }
}


export default ProductRepository;