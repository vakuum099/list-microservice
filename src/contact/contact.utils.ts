import { ContactsList } from "../contactsList/contactsList.model";
import { sanitizeRawArray } from "../utils/utils";
import { Contact } from "./contact.model";
import { getContactFromDB } from "./contact.service";

export const getListOfContacts = async (rawArray: ContactsList[]) => {
    const idArray = sanitizeRawArray(rawArray);
    let contacts: Contact[] = [];
    for (let i = 0; i < idArray.length; i++) {
        const contactString = await getContactFromDB(idArray[i].contactId);
        contacts.push(sanitizeRawArray(contactString)[0]);
    }
    return contacts;
}