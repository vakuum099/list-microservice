import { AskToWorkWithDB, DBOperationResult } from '../interfaces';
import {createNewList, getContactsOfList, addNewContactToList} from './list.service'

export const createList: AskToWorkWithDB = async (req, res) => {
    const resultOfCreateList: DBOperationResult = await createNewList(req);
    res.status(resultOfCreateList.code).send(resultOfCreateList.content);
}

export const getList: AskToWorkWithDB = async (req, res) => {
    const resultOfCreateList: DBOperationResult = await getContactsOfList(req);
    res.status(resultOfCreateList.code).send(resultOfCreateList.content);
}

export const addContactToList: AskToWorkWithDB = async (req, res) => {
    const resultOfCreateList: DBOperationResult = await addNewContactToList(req);
    res.status(resultOfCreateList.code).send(resultOfCreateList.content);
}
