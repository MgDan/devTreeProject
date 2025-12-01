import {Router} from 'express';

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


export default router;