import { Request, Response } from "express";

import User from "../model/User";

export const createAccount = async (req: Request, res: Response)=>{

    const {email} = req.body;
    const userExist = await User.findOne(email);

    if(userExist){
        const error = new Error('usuario ya registrado')
        return res.status(409).json({error: error.message}); // status es para mandar codigos http al cliente
        // return evita que se ejecute el demas codigo sin el "return" sigue ejecutando lo demas
    }

    await User.create(req.body);
    res.send({msg: 'Usuario creado exitosamente'})
    // res.send('testing')
}