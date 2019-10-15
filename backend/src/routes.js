const express = require('express');

const auth = require('./controllers/auth');

const router = express.Router();

router.get('/', (req, res) => res.json({ ok: true}))

router.post('/auth', auth.store);

module.exports =  router;