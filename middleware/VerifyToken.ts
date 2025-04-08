import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();

interface JwtPayload {
    data: { id: number },
    exp: number,
    iat: number
}

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    let authorization = req.get('Authorization');
    
    if (!authorization) {
        // Si no se encuentra el encabezado Authorization, se envía una respuesta y se detiene la ejecución
        return res.status(403).json({ status: "The Authorization header is required" });
    }

    const token = authorization.split(' ')[1];
    if (!token) {
        // Si no se encuentra el token, se envía una respuesta y se detiene la ejecución
        return res.status(401).json({ status: 'You have not sent a token' });
    }

    try {
        let decoded = jwt.verify(token, process.env.KEY_TOKEN as string) as JwtPayload;
        req.body.id = decoded.data.id;
        next(); // Solo se llama a next() si no hay errores
    } catch (error) {
        // Si ocurre un error al verificar el token, se envía una respuesta y se detiene la ejecución
        return res.status(403).json({ status: 'Unauthorized' });
    }
};

export default verifyToken;