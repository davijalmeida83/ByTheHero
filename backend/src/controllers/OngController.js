const crypto = require('crypto');
const connection = require('../database/connection');


module.exports = {
  async index(request, response) {
    const ongs = await connection('ongs').select('*');
    return response.json(ongs);
  },

  async create(request, response) {
    //const req = request.query;  // Query
    //const req = request.params; // Route
    const {nome, email, whatsapp, cidade, uf} = request.body;   // Body
  
    const id = crypto.randomBytes(4).toString('HEX');
  
    await connection('ongs').insert({
      id,
      nome,
      email,
      whatsapp,
      cidade,
      uf
    }); 
    return response.json({ id });
  }
  
};