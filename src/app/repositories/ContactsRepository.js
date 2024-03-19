const { v4 } = require('uuid');

const db = require('../../database');

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
  async findAll() {
    const rows = await db.query('SELECT * FROM contacts');
    return rows;
  }

  async findById(id) {
    const [row] = await db.query(
      'SELECT * FROM contacts WHERE id = $1',
      [id],
    );
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query(
      'SELECT * FROM contacts WHERE email = $1',
      [email],
    );
    return row;
  }

  async create({
    name, email, phone, category_id,
  }) {
    // The concept of $1, $2, $3, $4 is to avoid SQL Injection, it is a Postgres standard.
    // The RETURNING * is to return all infos of the created row.
    const [row] = await db.query(
      'INSERT INTO contacts(name, email, phone, category_id) VALUES($1, $2, $3, $4) RETURNING *',
      [name, email, phone, category_id],
    );

    return row;
  }

  update(id, {
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };

      contacts = contacts.map((contact) => (contact.id === id ? updatedContact : contact));

      resolve(updatedContact);
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
