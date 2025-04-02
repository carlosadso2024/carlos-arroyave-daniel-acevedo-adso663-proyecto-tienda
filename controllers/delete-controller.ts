import { Request, Response } from "express";
import UserService from '../services/UserServices';

let deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // el id se pasa por parámetros en la URL

    // Llamar al servicio para eliminar el usuario
    await UserService.delete(parseInt(id));
    
    return res.status(200).json({ status: 'delete ok' });
  } catch (error: any) {    
    if (error.message.includes('does not exist')) {
      // Si el ID no existe, devolver un error 404
      return res.status(404).json({ error: error.message });
    }
    // Manejar otros errores
    return res.status(500).json({ error: 'An error occurred while deleting the user' });
  }
}
export default deleteUser;