import { Router } from 'express';
import { creatContact, updateContact } from './contact.controller';

export const router = Router();

router.post('/', creatContact);
router.patch('/:contactId', updateContact);
