import { Contact } from "../contact/contact.model";
import { ContactsList } from "../contactsList/contactsList.model";

export const sanitizeRawArray = (rawArray: ContactsList[] | Contact[]) => {
    return JSON.parse(JSON.stringify(rawArray));
}

export const showData = (data: unknown) => {
    console.log(data);
}
