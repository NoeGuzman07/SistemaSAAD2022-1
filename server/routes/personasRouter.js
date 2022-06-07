const express = require('express');
const PersonasService = require('../services/personasService');
const router = express.Router();
const service = new PersonasService();

router.get('/', async function (req, res, next) {
  try {
    res.json(await service.find(req.query.page));
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async function (req, res, next) {
  try {
    res.json(await service.findOne(req.params.id));
  } catch (err) {
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
