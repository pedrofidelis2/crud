const express = require('express');
const router = express.Router();

const TokenManager = require('./token-manager');
const UserDao = require('../daos/user-daos');    

// 2. INSTANCIAR
const tm = new TokenManager();
const dao = new UserDao();

router.post('/addUser', tm.verifyJWT, async (req, res) => {
    const usuario = await dao.create(req.body);
    return res.json({ usuario: usuario });
});

router.post('/login', async (req, res) => {
    const usuario = await dao.findByLoginSenha(req.body.login, req.body.senha);
    if (usuario) {
        const id = usuario.id;
        const token = tm.sign(id);
        return res.json({ auth: true, token: token });
    }
    return res.status(401).json({ auth: false, message: 'Login ou senha inválidos' });
});

module.exports = router;