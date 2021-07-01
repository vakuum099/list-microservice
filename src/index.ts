import express from 'express';
import { router as ApiRoutes } from './index.routes';

export const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', ApiRoutes);
app.listen(3000, () => console.log(`Server listen to http://localhost:3000`));
