import { ShowResult, UpdateStringHelper } from '../interfaces';

export const updateStringHelper: UpdateStringHelper = (req) => {
  const uuid = req.params.contactId;
  const { name, email } = JSON.parse(req.body.contact);
  let newName = !name ? '' : `contacts.name='${name}'`;
  const newEmail = !email ? '' : `contacts.email='${email}'`;
  if (newName && newEmail) {
    newName = newName.concat(',');
  }
  return `UPDATE contacts SET ${newName} ${newEmail} WHERE contacts.uuid='${uuid}'`;
};

export const showResult: ShowResult = (res) => console.log(res);
