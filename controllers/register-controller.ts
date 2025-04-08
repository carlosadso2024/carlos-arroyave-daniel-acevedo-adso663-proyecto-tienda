import { Request, Response } from "express";
import User from '../Dto/UserDto';
import UserService from '../services/UserServices';


let register = async (req: Request, res: Response) => {
  try {
    const {
      nombre,
      correo,
      contraseña,
      direccion,
      telefono,
      
    } = req.body;
    const registerUser = await UserService.register(new User(nombre, correo, contraseña, direccion, telefono))
    return res.status(201).json(
      { status: 'register ok'}
    );
  } catch (error: any) {
    console.error("Error en la API:", error);
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage }
      );
    }
  }
}


export default register;