const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    // List all of registers
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  show() {
    // Show a single register
  }

  store() {
    // Create a new register
  }

  update() {
    // Update a register
  }

  delete() {
    // Delete a register
  }
}

// Singleton Pattern
module.exports = new ContactController();
