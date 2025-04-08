import db from '../config/config-db';
import User from '../Dto/UserDto';
import Auth from '../Dto/AuthDto';
import bcrypt from 'bcryptjs';


class UserRepository {

    static async add(user: User){
        const sql = 'INSERT INTO usuarios (nombre, correo, contraseña, direccion, telefono) VALUES (?, ?, ?, ?, ?)';
        const values = [user.nombre, user.correo, user.contraseña, user.direccion, user.telefono];
        return db.execute(sql, values);
    }

    static async login(auth: Auth){
        const sql = 'SELECT id, contraseña FROM usuarios WHERE correo=?';
        const values = [auth.correo];
        const result: any = await db.execute(sql, values);
        if (result[0].length > 0){
          const isContraseñaValid = await bcrypt.compare(auth.contraseña, result[0][0].contraseña);
          if (isContraseñaValid){
            return {logged: true, status: "Successful authentication", id: result[0][0].id}
          }
          return {logged: false, status: "Invalid username or password" };
        }
        return {logged: false, status: "Invalid username or password" };
    }

    static async update(user: User, id: number){
      const checkSql = 'SELECT id FROM usuarios WHERE id = ?';
      const checkResult: any = await db.execute(checkSql, [id]);

       if (checkResult[0].length === 0) {
        // Si no existe, lanzar un error o devolver un mensaje
        throw new Error(`User with id ${id} does not exist`);
       }
        const sql = 'UPDATE usuarios SET nombre=?, correo=?, contraseña=?, direccion=?, telefono=? WHERE id=?';
        const values = [user.nombre, user.correo, user.contraseña, user.direccion, user.telefono, id];
        return db.execute(sql, values);
    }

    static async delete(id: number){
      const checkSql = 'SELECT id FROM usuarios WHERE id = ?';
      const checkResult: any = await db.execute(checkSql, [id]);

       if (checkResult[0].length === 0) {
        // Si no existe, lanzar un error o devolver un mensaje
        throw new Error(`User with id ${id} does not exist`);
       }
        const sql = 'DELETE FROM usuarios WHERE id=?';
        const values = [id];
        return db.execute(sql, values);
    }
}


export default UserRepository;