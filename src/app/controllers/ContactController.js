const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  // List all of registers
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  async show(request, response) {
    // Show a single register
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404: Not Found
      return response.status(404).json({ error: 'Contact not found' });
    }

    response.json(contact);
  }

  store() {
    // Create a new register
  }

  update() {
    // Update a register
  }

  async delete(request, response) {
    // Delete a register
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'Contact not found' });
    }

    await ContactsRepository.delete(id);
    // sendStatus: Just send status without body
    // 204: No Content
    response.sendStatus(204);
  }
}

// Singleton Pattern
module.exports = new ContactController();
