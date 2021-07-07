import { Router } from 'express';
import { Request, Response } from 'express';
import { router as ContactRoutes } from './contact/contact.routes';
import { router as ListRoutes } from './list/list.routes';

export const router: Router = Router();

router.use('/contact', ContactRoutes);
router.use('/list', ListRoutes);

router.all('*', (req: Request, res: Response) => {
  res.status(400).send('Error 400. Bad request.');
});
