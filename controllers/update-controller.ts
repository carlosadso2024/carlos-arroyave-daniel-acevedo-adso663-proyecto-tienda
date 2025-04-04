import { Request, Response } from "express";
import User from '../Dto/UserDto';
import UserService from '../services/UserServices';

let update = async (req: Request, res: Response) => {  
  try {
    const {
      nombre,
      correo,
      contraseña,
      direccion,
      telefono,
      } = req.body;
    const { id } = req.params; // el id se pasa por parámetros en la URL

    // Llamar al servicio para actualizar el usuario
    const updatedUser = await UserService.update(new User(nombre, correo, contraseña, direccion, telefono), parseInt(id));
    
    return res.status(200).json({ status: 'update ok' });
  } catch (error: any) {    
    if (error.message.includes('does not exist')) {
      // Si el ID no existe, devolver un error 404
      return res.status(404).json({ error: error.message });
    }
    if (error.code === "ER_DUP_ENTRY") {
      // Si hay un error de duplicado, devolver un error 500 con detalles
      return res.status(500).json({ errorInfo: error.sqlMessage });
    }
    // Manejar otros errores
    return res.status(500).json({ error: 'An error occurred while updating the user' });
  }
}

export default update;