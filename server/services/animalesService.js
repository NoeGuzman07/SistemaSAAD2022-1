const boom = require('@hapi/boom');
const db = require('./db.service');

class AnimalesService {
  constructor(){
    this.generate();
  }
  generate(){
  }
  async create(animal) {
    const result = await db.query(`INSERT INTO animal (nombre,especie,edad,imagen)
    VALUES ('${animal.nombre}','${animal.especie}',${animal.edad},'${animal.imagen}')`);
    let message = 'Error al crear el animal';

    if (result.affectedRows) {
      message = 'Se creo correctamente el animal';
    }

    return {message};
  }
  async find() {
    const rows= await db.query(`SELECT * FROM animal`);
    return rows
  }
  async findAdoptados() {
    const rows = await db.query(`SELECT * FROM animal WHERE estado = 'ADOPTADO'`);
    return rows
  }
  async findNoAdoptados() {
    const rows = await db.query(`SELECT * FROM animal WHERE estado = 'NO ADOPTADO'`);
    return rows
  }
  async findOne(id) {
    const rows = await db.query(`SELECT * FROM animal WHERE id_animal= ${id}`);
    return rows[0]
  }
  async update(id, animal) {
    const result = await db.query(`UPDATE animal SET nombre="${animal.nombre}",
    especie="${animal.especie}",edad="${animal.edad}",estado="${animal.estado}",imagen="${animal.imagen}",persona_id_persona="${animal.persona_id_persona}" WHERE id_animal=${id}`);
    let message = 'Error al actualizar el animal';

    if (result.affectedRows) {
      message = 'Animal actualizado correctamente';
    }

    return {message};
  }
  async delete(id) {
    const result = await db.query(`DELETE FROM animal WHERE id_animal=${id}`);

    let message = 'Error al eliminar el animal';

    if (result.affectedRows) {
      message = 'Animal eliminado correctamente';
    }

    return {message};
  }
}

module.exports = AnimalesService;
