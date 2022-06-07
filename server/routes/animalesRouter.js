const express = require('express');
const AnimalesService = require('../services/animalesService');
const router = express.Router();
const service = new AnimalesService();

router.get('/', async function (req, res, next) {
  try {
    res.json(await service.find(req.query.page));
  } catch (err) {
    next(err);
  }
});

router.get('/adoptados', async function (req, res, next){
  try {
    res.json(await service.findAdoptados(req.query.page));
  } catch (err) {
    next(err);
  }
});

router.get('/noadoptados', async function (req, res, next){
  try {
    res.json(await service.findNoAdoptados(req.query.page));
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async function (req, res, next) {
  try {
    res.json(await service.findOne(req.params.id));
  } catch (err) {
    console.error(`Error al obtener al animal`, err.message);
    next(err);
  }
});

router.post('/', async function (req, res, next) {
  try {
    res.json(await service.create(req.body));
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async function (req, res, next) {
  try {
    res.json(await service.update(req.params.id, req.body));
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async function (req, res, next) {
  try {
    res.json(await service.delete(req.params.id));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
