const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'John Doe',
    email: 'john@gmail.com',
    phone: '123456789',
    category_id: uuid(),
  },
  {
    id: uuid(),
    name: 'Jane Doe',
    email: 'jane@gmail.com',
    phone: '987654321',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => { resolve(contacts); });
  }
}

module.exports = new ContactsRepository();
