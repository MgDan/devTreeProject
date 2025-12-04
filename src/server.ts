import express from 'express';

//locals
import  router  from './router';

// Este archivo solo sera para configuraciones como base de datos, cors, etc

const app = express();

// esto sirve para parsear los llamados que tengan un objeto json; sin el, el body de un request te aparecera como undefined (tema de performance, no lo deja por default porque no todas las llamadas tienen un objeto json)
app.use(express.json());

// agregamos las rutas

app.use('/', router); // si lo dejas como .get no te va a dejar acceder a las routas (solo a la primera que es la que hace match)
// tienes que cambiar a .use para que reconozca las rutas

export default app;