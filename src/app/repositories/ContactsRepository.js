const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'John Doe',
    email: 'john@gmail.com',
    phone: '123456789',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Jane Doe',
    email: 'jane@gmail.com',
    phone: '987654321',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => { resolve(contacts); });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      resolve(
        contacts = contacts.filter((contact) => contact.id !== id),
      );
    });
  }
}

module.exports = new ContactsRepository();
