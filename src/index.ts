import express from 'express';
import { router as ApiRoutes } from './index.routes.js';

export const app = express();
app.use(express.urlencoded({ extended: true }));

app.use('/', ApiRoutes);

app.listen(3000, () => console.log(`Server listen to http://localhost:3000`));