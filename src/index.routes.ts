import { Router } from 'express';
import { Request, Response } from 'express';
import { router as ContactRoutes } from './contact/contact.routes';

export const router: Router = Router();

router.use('/contact', ContactRoutes);

router.all('*', (req: Request, res: Response) => {
  res.status(400).send('Error 400. Bad request.');
});
