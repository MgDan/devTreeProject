import { Request, Response } from "express";
import slug from 'slug'

import User from "../model/User";
import { hashPassword } from "../utils/auth";

export const createAccount = async (req: Request, res: Response)=>{

    const {email, password, handle} = req.body;
    const slugedHandle = slug(handle); // slug convierte el texto para que sea manejable en una url, el segundo argumento es para reemplazar los espacios
    const userExist = await User.findOne({email});
    const handleExist = await User.findOne({handle: slugedHandle});

    if(userExist){
        const error = new Error('usuario ya registrado')
        return res.status(409).json({error: error.message}); // status es para mandar codigos http al cliente
        // return evita que se ejecute el demas codigo sin el "return" sigue ejecutando lo demas
    }

    if(handleExist){
        const error = new Error('nick ya registrado')
        return res.status(409).json({error: error.message}); // status es para mandar codigos http al cliente
    }


    // await User.create(req.body); // alternativa a la que estamos usando para grabar un usario

    const user = new User(req.body);
    user.handle = slugedHandle;
    user.password = await hashPassword(password);
    await user.save();

    res.send({msg: 'Usuario creado exitosamente'})
    // res.send('testing')
}