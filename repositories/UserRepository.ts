import db from '../config/config-db';
import User from '../Dto/UserDto';
import Auth from '../Dto/AuthDto';
import bcrypt from 'bcryptjs';


class UserRepository {

    static async add(user: User){
        const sql = 'INSERT INTO users (email, nombres, apellidos, telefono, password) VALUES (?, ?, ?, ?, ?)';
        const values = [user.email, user.nombres, user.apellidos, user.telefono, user.password];
        return db.execute(sql, values);
    }

    static async login(auth: Auth){
        const sql = 'SELECT id, password FROM users WHERE email=?';
        const values = [auth.email];
        const result: any = await db.execute(sql, values);
        if (result[0].length > 0){
          const isPasswordValid = await bcrypt.compare(auth.password, result[0][0].password);
          if (isPasswordValid){
            return {logged: true, status: "Successful authentication", id: result[0][0].id}
          }
          return {logged: false, status: "Invalid username or password" };
        }
        return {logged: false, status: "Invalid username or password" };
    }

    static async update(user: User, id: number){
      const checkSql = 'SELECT id FROM users WHERE id = ?';
      const checkResult: any = await db.execute(checkSql, [id]);

       if (checkResult[0].length === 0) {
        // Si no existe, lanzar un error o devolver un mensaje
        throw new Error(`User with id ${id} does not exist`);
       }
        const sql = 'UPDATE users SET email=?, nombres=?, apellidos=?, telefono=?, password=? WHERE id=?';
        const values = [user.email, user.nombres, user.apellidos, user.telefono, user.password, id];
        return db.execute(sql, values);
    }

    static async delete(id: number){
      const checkSql = 'SELECT id FROM users WHERE id = ?';
      const checkResult: any = await db.execute(checkSql, [id]);

       if (checkResult[0].length === 0) {
        // Si no existe, lanzar un error o devolver un mensaje
        throw new Error(`User with id ${id} does not exist`);
       }
        const sql = 'DELETE FROM users WHERE id=?';
        const values = [id];
        return db.execute(sql, values);
    }
}


export default UserRepository;