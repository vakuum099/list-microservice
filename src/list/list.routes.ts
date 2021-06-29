import { Router } from 'express';
import { createList, getList, addContactToList } from './list.controller';

export const router = Router();

router.post('/', createList);
router.get('/:listId', getList);
router.post('/:listId', addContactToList);
