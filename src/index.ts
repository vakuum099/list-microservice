import express from 'express';
import { router as ApiRoutes } from './index.routes';
import { sequelize } from './sequelize';
import { List } from './list/list.model';
import { Contact } from './contact/contact.model';
import { ContactList } from './contactList/contactList.model';

sequelize.addModels([Contact, List, ContactList]);

sequelize.sync();

export const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', ApiRoutes);
app.listen(3000, () => console.log('Server listen to http://localhost:3000'));
