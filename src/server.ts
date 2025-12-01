import express from 'express';

//locals
import  router  from './router';

// Este archivo solo sera para configuraciones como base de datos, cors, etc

const app = express();

// agregamos las rutas

app.use('/', router); // si lo dejas como .get no te va a dejar acceder a las routas (solo a la primera que es la que hace match)
// tienes que cambiar a .use para que reconozca las rutas

export default app;