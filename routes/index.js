import routerx from 'express-promise-router';

import LibroRoute from './libro.route';


const router=routerx();

router.use('/libro', LibroRoute);


export default router;