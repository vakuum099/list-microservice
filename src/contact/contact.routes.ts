import { Router } from 'express';
import { createContact, updateContact } from './contact.controller';

export const router = Router();

router.post('/', createContact);
router.patch('/:contactId', updateContact);
