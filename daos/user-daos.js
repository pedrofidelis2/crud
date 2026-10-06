const db = require('../models/index.js');
const bcrypt = require('bcrypt');

class UserDao {

    findByLoginSenha = async (login, senha) => {
        const usuario = await db.User.findOne({
            where: { login: login }
        });
        if (usuario) {
            const valido = await bcrypt.compare(senha, usuario.senha);
            if (valido) return usuario;
        }
        return null;
    }

    create = async (objJSON) => {
        if (objJSON.senha) {
            // Criptografa a senha antes de salvar no banco
            objJSON.senha = await bcrypt.hash(objJSON.senha, 10);
        }
        return await db.User.create(objJSON);
    }
}

module.exports = UserDao;