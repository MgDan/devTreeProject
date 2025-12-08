import {Router} from 'express';
import User from './model/User';
import { createAccount } from './handler/handler';

const router = Router();

router.get('/',(req, res)=>{
    res.send('Hola mundo en Express | Typescript')
})

router.get('/valores',(req, res)=>{
    res.send('valores')
})


router.get('/ecom',(req, res)=>{
    res.send('Este es el ecommerce')
})

router.post('/auth/register', createAccount); // llamamos mejor un handler para mantener limpio el codigo

export default router;