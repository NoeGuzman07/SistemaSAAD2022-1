const boom = require('@hapi/boom');
const db = require('./db.service');

class PersonasService {
  constructor(){
    this.generate();
  }
  generate(){
  }
  async create(persona) {
    const result = await db.query(`INSERT INTO persona (nombre,direccion)
    VALUES ('${persona.nombre}','${persona.direccion}')`);
    let message = 'Error al crear la persona';

    if (result.affectedRows) {
      message = 'Se creo correctamente la persona';
    }

    return {message};
  }
  async find() {
    const rows= await db.query(`SELECT * FROM persona`);
    return rows
  }
  async findOne(id) {
    const rows = await db.query(`SELECT * FROM persona WHERE id_persona= ${id}`);
    return rows[0]
  }
  async update(id, persona) {
    const result = await db.query(`UPDATE persona SET nombre="${persona.nombre}",
    direccion="${persona.direccion}" WHERE id_persona=${id}`);
    let message = 'Error al actualizar la persona';

    if (result.affectedRows) {
      message = 'Persona actualizada correctamente';
    }

    return {message};
  }
  async delete(id) {
    const result = await db.query(`DELETE FROM persona WHERE id_persona=${id}`);

    let message = 'Error al eliminar la persona';

    if (result.affectedRows) {
      message = 'Persona eliminada correctamente';
    }

    return {message};
  }
}

module.exports = PersonasService;